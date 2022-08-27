
import { Role } from "./role.model";
import { Vehicule } from "./vehicule.model";

export class User {
    userId:Number;
    userName:String;
    address:String;
    active:Boolean;
    roles:Role[];
    city:String;
    code_postale:Number;
    tel:String;
    email:String;
    firstName:String;
    gender:String;
    lastName:String;
    password:String;
    profession:String;
    birthday:Date;
    date_obtention_permis:String;
    sit_matr:String;
    veh:Vehicule[];
}
