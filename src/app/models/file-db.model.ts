import { User } from "./user.model";
import { Vehicule } from "./vehicule.model";

export class FileDB {
    id:number;
    name:String;
    type:String;
    data:Int32Array[];
    user:User;
    veh :Vehicule
}
