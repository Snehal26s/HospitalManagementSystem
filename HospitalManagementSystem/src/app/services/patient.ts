import { PrescriptionHistory } from "./prescription-history.service";
export class Patient {
    id:number=0;
    name:string="";
    age:string="";
    bloodGroup:string="";
    prescription:string="";
    dose:string="";
    fees:string="";
    urgency:string="";
  prescriptionHistory?: PrescriptionHistory[];
  createdAt?: Date; 


}
