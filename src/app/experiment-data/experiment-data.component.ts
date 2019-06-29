import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';
import { $ } from 'protractor';
import { BufferAttribute } from 'three';

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
  result: any;
  camera: any;
  scene: any;
  renderer: any;

  skeleton: THREE.Skeleton = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://localhost:44376/api/experiments/json/' + this.name + '/' + this.type)
      .subscribe(result => {
        this.result = result;
      });

    /*this.initCanvas();
    this.initSkeleton();
    this.initMesh();
    */
    this.init();
    this.animate();
  }

  init() {

    this.camera = new THREE.PerspectiveCamera( 70, this.width / this.height, 0.1, 20 );
    this.camera.position.z = 10;

    this.scene = new THREE.Scene();

    var bones = [];
		var shoulder = new THREE.Bone();
		var elbow = new THREE.Bone();
		var hand = new THREE.Bone();

		shoulder.add( elbow );
		elbow.add( hand );

		bones.push( shoulder );
		bones.push( elbow );
		bones.push( hand );

		shoulder.position.y = -5;
		elbow.position.y = 0;
		hand.position.y = 5;

		var armSkeleton = new THREE.Skeleton( bones );
		var helper = new THREE.SkeletonHelper( bones[ 0 ] );
		
		var boneContainer = new THREE.Group();
		boneContainer.add( bones[ 0 ] );

		this.scene.add( helper );
		this.scene.add( boneContainer );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( this.width, this.height );

    setTimeout(x => {
      var element = document.getElementById(this.type);
    
      if (element)
        element.appendChild( this.renderer.domElement );
    }, 100);
  }

  animate() {
    requestAnimationFrame( this.animate.bind(this) );
    
    this.renderer.render( this.scene, this.camera );
  }
}