import { Group } from "./group";
import { Race } from "./race";

export class Sheep {

  id!:number;
  barcodeNo!:number;
  gender!:boolean;
  dateOfBirth!:Date;
  age!:number;
  weight!:number;

  group!:Group;
  race!: Race;
}


