import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';
import { $ } from 'protractor';
import { BufferAttribute } from 'three';
import { JointType } from '../enums/joint-type.enum';
import { ThreeJoint } from '../models/three-joint.model';
import { Frame } from '../models/frame.model';
import { Joint } from '../models/joint.model';

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

  scene: any;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  skeleton: THREE.Skeleton = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://localhost:44376/api/experiments/json/' + this.name + '/' + this.type)
      .subscribe(result => {
        this.result = result as Frame[];

        this.initScene();
        this.initSkeleton();
        this.updateSkeleton(this.result[0]);
        this.renderScene();
        this.animate();
      });
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera( 70, this.width / this.height, 0.1, 1000 );
    this.camera.position.z = 1000;

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
    
    this.connect(bones, JointType.Torso, JointType.LeftCollar);
    this.connect(bones, JointType.LeftCollar, JointType.LeftShoulder);
    this.connect(bones, JointType.LeftShoulder, JointType.LeftElbow);
    this.connect(bones, JointType.LeftElbow, JointType.LeftWrist);
    this.connect(bones, JointType.LeftWrist, JointType.LeftHand);

    this.connect(bones, JointType.Torso, JointType.RightCollar);
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
      threeJoint.position.y = joint.Location.Y;
      threeJoint.position.z = joint.Location.Z;
    }
    else {
      threeJoint.position.x = 0;
      threeJoint.position.y = 0;
      threeJoint.position.z = 0;
    }
  }

  animate() {
    requestAnimationFrame( this.animate.bind(this) );
    var a = this.scene;

    this.renderer.render( this.scene, this.camera );
  }

  getBone(bones: ThreeJoint[], jointType: JointType) {
    return bones.find(b => b.jointType === jointType);
  }

  connect(bones: ThreeJoint[], root: JointType, leaf: JointType): any {
    this.getBone(bones, root).add(this.getBone(bones, leaf));
  }
}