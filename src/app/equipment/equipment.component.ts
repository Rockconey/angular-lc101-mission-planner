import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   mass: number;
   itemMass: number = this.mass;
   item: object[];
   inactive: boolean = false;
   nearMaxMass: boolean = true;
   massBudget: number = this.maximumAllowedMass - this.cargoMass;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
    addItem (item) {
     
     this.cargoHold.push(item.name);
     this.cargoMass = this.cargoMass + item.mass;

     if (this.cargoHold.length === this.maxItems) {
       this.inactive;
     }

     if (this.cargoMass >= this.maximumAllowedMass) {
       
      this.inactive;
     }
     
     if (this.massBudget <= 200) {
        this.nearMaxMass;
      } else {
        !this.nearMaxMass;
     }

      if (this.cargoMass <= this.maximumAllowedMass) {
        return true;
      } else {
        return false;
      }
    }

    tooMuch(itemMass) {
      if ((this.cargoMass + itemMass) > this.maximumAllowedMass) {
        this.inactive;
      } else {
        !this.inactive;
      }
    }
    
    clearCargo() {
      this.cargoHold = [];
      this.cargoMass = 0;
      !this.inactive;
      this.massBudget = 2000
    }
      
}
