import { JointType } from '../enums/joint-type.enum';
import { Location3D } from './location3D.model';

export class Joint {
    public JointType: JointType;
    public Location: Location3D;
}