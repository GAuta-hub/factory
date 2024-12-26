import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-customer-bill-form',
  imports: [ReactiveFormsModule, MatInputModule, MatDatepickerModule],
  templateUrl: './customer-bill-form.component.html',
  styleUrl: './customer-bill-form.component.scss'
})
export class CustomerBillFormComponent implements OnInit, OnChanges {

  myForm!: FormGroup;
  total: any;
quantity: any;
rate: any;

  constructor(private Fb: FormBuilder, private cs: CustomerService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }




  ngOnInit(): void {
    this.myForm = this.Fb.group({
      customer_bill_id: [, [Validators.required]],
      customer_address: [, [Validators.required]],
      customer_name: [, [Validators.required]],
      customer_phone_number: [, [Validators.required]],
      date: [, [Validators.required]],
      quantity: [, [Validators.required]],
      rate: [, [Validators.required]],
      total_amount: [, [Validators.required]],
    })
    

  }



  onSubmit() {
    console.log(this.myForm.value);
    // Add the form data to the gridData array
    this.cs.addcustomerbill(this.myForm.value).subscribe({
      next: (data: any) => { }
    })
  }


}
function add(quantity:number,rate:number): any {
  return quantity*rate;
}

