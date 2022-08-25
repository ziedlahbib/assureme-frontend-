import { Alimentation } from "./alimentation";
import { Assurance } from "./assurance.model";
import { Carosserie } from "./carosserie";
import { Marque } from "./marque";
import { Modele } from "./modele";
import { Puissance } from "./puissance";
import { User } from "./user.model";

export class Vehicule {
    vehId:Number;
    date_achat:Date;
    date_mise_cir:Date;
    marque:Marque;
    modele:Modele;
    carosserie:Carosserie;
    alimentation:Alimentation;
    puissance:Puissance;
    user:User;
    assu:Assurance;

}
