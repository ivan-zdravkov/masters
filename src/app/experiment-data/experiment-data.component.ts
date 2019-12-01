import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';
import { $ } from 'protractor';
import { BufferAttribute } from 'three';
import { JointType } from '../enums/joint-type.enum';
import { ThreeJoint } from '../models/three-joint.model';
import { Frame } from '../models/frame.model';
import { Joint } from '../models/joint.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import * as JSZip from 'jszip';

@Component({
  selector: 'experiment-data',
  templateUrl: './experiment-data.component.html',
  styleUrls: ['./experiment-data.component.css']
})
export class ExperimentDataComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;

  width: number = 800;
  height: number = 600;

  result: Frame[];
  imageResult: string[] = [];
  imageResult2D: string[] = [];
  imageResult3D: string[] = [];

  scene: any;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  skeleton: THREE.Skeleton = null;

  currentFrame: number = 0;
  originalImage: SafeResourceUrl;
  image2D: SafeResourceUrl;
  image3D: SafeResourceUrl;

  constructor(
    private http: HttpClient, 
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.http.get(`${environment.baseUrl}/${this.name}/Original.zip`, { responseType: 'arraybuffer'})
      .subscribe(result => {
        this.decompressImages(result, this.imageResult, this.updateImage);
      });

    this.http.get(`${environment.baseUrl}/${this.name}/${this.type}.zip`, { responseType: 'arraybuffer'})
      .subscribe(result => {
        if (this.type === "2D")
          this.decompressImages(result, this.imageResult2D, this.updateImage2D);
        else if (this.type === "3D")
          this.decompressImages(result, this.imageResult3D, this.updateImage3D);
      });

    this.http.get(`${environment.baseUrl}/${this.name}/Result${this.type}.json`)
      .subscribe(result => {
        this.result = result as Frame[];

        this.initScene();
        this.initSkeleton();
        this.updateSkeleton(this.result[this.currentFrame]);
        this.renderScene();
        this.animate();
      });
  }

  decompressImages(result: any, imageResult: string[], startPlayback: Function) {
    let zip = new JSZip();

    zip.loadAsync(result)
      .then(function(unzipped) {
        for(var fileName in unzipped.files) {
          unzipped.files[fileName]
            .async("base64")
            .then(function success(imageBase64) {
              imageResult.push(imageBase64);
            });
        }

        startPlayback(0);
      });
  }

  initScene() {
    var minX: number = this.getMinX(this.result);
    var maxX: number = this.getMaxX(this.result);

    var minY: number = this.getMinY(this.result);
    var maxY: number = this.getMaxY(this.result);

    var minZ: number = this.getMinZ(this.result);
    var maxZ: number = this.getMaxZ(this.result);

    maxZ = this.type === "2D" ? maxZ : maxZ * 10;
    var cameraY = this.type === "2D" ? 0 : -minY * 2;
    var cameraZ = this.type === "2D" ? maxZ * 5 : maxZ;
    var fov = this.type === "2D" ? 120 : 30;

    this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, minZ, maxZ);
    this.camera.position.y = cameraY;
    this.camera.position.z = cameraZ;

    this.scene = new THREE.Scene();
  }

  initSkeleton() {
    var bones: ThreeJoint[] = [
      new ThreeJoint(JointType.Head),
      new ThreeJoint(JointType.Neck),
      new ThreeJoint(JointType.LeftCollar),
      new ThreeJoint(JointType.RightCollar),
      new ThreeJoint(JointType.LeftShoulder),
      new ThreeJoint(JointType.RightShoulder),
      new ThreeJoint(JointType.LeftElbow),
      new ThreeJoint(JointType.RightElbow),
      new ThreeJoint(JointType.LeftWrist),
      new ThreeJoint(JointType.RightWrist),
      new ThreeJoint(JointType.LeftHand),
      new ThreeJoint(JointType.RightHand),
      new ThreeJoint(JointType.Torso),
      new ThreeJoint(JointType.Waist),
      new ThreeJoint(JointType.LeftHip),
      new ThreeJoint(JointType.RightHip),
      new ThreeJoint(JointType.LeftKnee),
      new ThreeJoint(JointType.RightKnee),
      new ThreeJoint(JointType.LeftAnkle),
      new ThreeJoint(JointType.RightAnkle),
    ];

    this.connect(bones, JointType.Waist, JointType.Torso);
    this.connect(bones, JointType.Torso, JointType.Neck);
    this.connect(bones, JointType.Neck, JointType.Head);
    
    this.connect(bones, JointType.Neck, JointType.LeftCollar);
    this.connect(bones, JointType.LeftCollar, JointType.LeftShoulder);
    this.connect(bones, JointType.LeftShoulder, JointType.LeftElbow);
    this.connect(bones, JointType.LeftElbow, JointType.LeftWrist);
    this.connect(bones, JointType.LeftWrist, JointType.LeftHand);

    this.connect(bones, JointType.Neck, JointType.RightCollar);
    this.connect(bones, JointType.RightCollar, JointType.RightShoulder);
    this.connect(bones, JointType.RightShoulder, JointType.RightElbow);
    this.connect(bones, JointType.RightElbow, JointType.RightWrist);
    this.connect(bones, JointType.RightWrist, JointType.RightHand);

    this.connect(bones, JointType.Waist, JointType.LeftHip);
    this.connect(bones, JointType.LeftHip, JointType.LeftKnee);
    this.connect(bones, JointType.LeftKnee, JointType.LeftAnkle);

    this.connect(bones, JointType.Waist, JointType.RightHip);
    this.connect(bones, JointType.RightHip, JointType.RightKnee);
    this.connect(bones, JointType.RightKnee, JointType.RightAnkle);

		this.skeleton = new THREE.Skeleton(bones);
		
		var boneContainer = new THREE.Group();
		boneContainer.add(this.getBone(bones, JointType.Waist));

		this.scene.add(new THREE.SkeletonHelper(this.getBone(bones, JointType.Waist)));
    this.scene.add(boneContainer);
  }

  renderScene() {
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( this.width, this.height );

    setTimeout(x => {
      var element = document.getElementById(this.type);
    
      if (element)
        element.appendChild( this.renderer.domElement );
    }, 100);
  }

  updateImage(frameIndex: number): any {
    if (this && this.imageResult && this.imageResult.length > 0)
      this.originalImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult[frameIndex]);
  }

  updateImage2D(frameIndex: number): any {
    if (this && this.imageResult2D && this.imageResult2D.length > 0)
      this.image2D = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult2D[frameIndex]);
  }

  updateImage3D(frameIndex: number): any {
    if (this && this.imageResult3D && this.imageResult3D.length > 0)
      this.image3D = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult3D[frameIndex]);
  }

  updateSkeleton(frame: Frame): any {
    this.updateBone(frame, JointType.Head); 
    this.updateBone(frame, JointType.Neck);
    this.updateBone(frame, JointType.LeftCollar);
    this.updateBone(frame, JointType.RightCollar);
    this.updateBone(frame, JointType.LeftShoulder);
    this.updateBone(frame, JointType.RightShoulder);
    this.updateBone(frame, JointType.LeftElbow);
    this.updateBone(frame, JointType.RightElbow);
    this.updateBone(frame, JointType.LeftWrist);
    this.updateBone(frame, JointType.RightWrist);
    this.updateBone(frame, JointType.LeftHand);
    this.updateBone(frame, JointType.RightHand);
    this.updateBone(frame, JointType.Torso);
    this.updateBone(frame, JointType.Waist);
    this.updateBone(frame, JointType.LeftHip);
    this.updateBone(frame, JointType.RightHip);
    this.updateBone(frame, JointType.LeftKnee);
    this.updateBone(frame, JointType.RightKnee);
    this.updateBone(frame, JointType.LeftAnkle);
    this.updateBone(frame, JointType.RightAnkle);
  }

  updateBone(frame: Frame, jointType: JointType): any {
    var threeJoint: ThreeJoint = this.getBone(this.scene.children[0].bones, jointType)
    var joint: Joint = frame.Skeleton.Joints.find(x => x.JointType === jointType);
    
    if (joint) {
      threeJoint.position.x = joint.Location.X;
      threeJoint.position.y = this.type === "2D" ? -joint.Location.Y : joint.Location.Y;
      threeJoint.position.z = joint.Location.Z;
    }
    else {
      threeJoint.position.x = 0;
      threeJoint.position.y = 0;
      threeJoint.position.z = 0;
    }
  }

  animate() {
    setTimeout(() => {
      requestAnimationFrame( this.animate.bind(this) );

      var a = this.scene;

      this.currentFrame + 1 < this.result.length ? 
        this.currentFrame++ : 
        this.currentFrame = 0;

      this.updateSkeleton(this.result[this.currentFrame]);
      this.updateImage(this.currentFrame);

      if (this.type === "2D")
        this.updateImage2D(this.currentFrame);

      if (this.type === "3D")
        this.updateImage3D(this.currentFrame);

      this.renderer.render( this.scene, this.camera );
    }, 50);
  }

  getBone(bones: ThreeJoint[], jointType: JointType) {
    return bones.find(b => b.jointType === jointType);
  }

  connect(bones: ThreeJoint[], root: JointType, leaf: JointType): any {
    this.getBone(bones, root).add(this.getBone(bones, leaf));
  }

  getMinX(result: Frame[]): number {
    var min = Number.MAX_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.X < min && j.Location.X !== 0)
          min = j.Location.X;
      });
    });

    return min;
  }

  getMaxX(result: Frame[]): number {
    var max = Number.MIN_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.X > max)
          max = j.Location.X;
      });
    });

    return max;
  }

  getMinY(result: Frame[]): number {
    var min = Number.MAX_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.Y < min && j.Location.Y !== 0)
          min = j.Location.Y;
      });
    });

    return min;
  }

  getMaxY(result: Frame[]): number {
    var max = Number.MIN_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.Y > max)
          max = j.Location.Y;
      });
    });

    return max;
  }

  getMinZ(result: Frame[]): number {
    var min = Number.MAX_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.Z < min && j.Location.Z !== 0)
          min = j.Location.Z;
      });
    });

    return min;
  }

  getMaxZ(result: Frame[]): number {
    var max = Number.MIN_SAFE_INTEGER;

    result.forEach(f => {
      f.Skeleton.Joints.forEach(j => {
        if (j.Location.Z > max)
          max = j.Location.Z;
      });
    });

    return max;
  }
}