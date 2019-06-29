import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';
import { $ } from 'protractor';

@Component({
  selector: 'experiment-data',
  templateUrl: './experiment-data.component.html',
  styleUrls: ['./experiment-data.component.css']
})
export class ExperimentDataComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;

  result: any;
  camera: any;
  scene: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://localhost:44376/api/experiments/json/' + this.name + '/' + this.type)
      .subscribe(result => {
        this.result = result;
      });

    this.init();
    //this.animate();
  }
 
  init() {
    this.camera = new THREE.PerspectiveCamera( 70, 800 / 600, 0.01, 10 );
    this.camera.position.z = 1;
 
    this.scene = new THREE.Scene();
 
    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();
 
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
 
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( 800, 600 );

    setTimeout(x => {
      var element = document.getElementById(this.type);
    
      if (element)
        element.appendChild( this.renderer.domElement );
    }, 100);
  }
  
  animate() {
    requestAnimationFrame( this.animate );
 
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
 
    this.renderer.render( this.scene, this.camera );
  }
}