import * as THREE from 'three';
import { JointType } from '../enums/joint-type.enum';

export class ThreeJoint extends THREE.Bone {
    constructor(jointType: JointType) {
        super();

        this.jointType = jointType;
    }

    public jointType: JointType;
}