import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../services/medicine.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-medicine',
  imports: [CommonModule, FormsModule],  
  templateUrl: './medicine.component.html'
})
export class MedicineComponent implements OnInit {
  medicines: any[] = [];
  newMedicine: any = {
    name: '',
    description: ''
  };

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines() {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }

  addMedicine() {
    this.medicineService.createMedicine(this.newMedicine).subscribe(() => {
      this.loadMedicines();
      this.newMedicine = { name: '', description: '' };
    });
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(() => {
      this.loadMedicines();
    });
  }
}
