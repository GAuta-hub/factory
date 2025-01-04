import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';
import { CustomerBillFormComponent } from '../customer-bill-form/customer-bill-form.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-customer-bill',
  imports: [AgGridAngular, HttpClientModule, HeaderComponent, FooterComponent],
  templateUrl: './customer-bill.component.html',
  styleUrl: './customer-bill.component.scss'
})
export class CustomerBillComponent implements OnInit {

  modules: Module[] = [ClientSideRowModelModule];
  rowData: any;
  constructor(private customer: CustomerService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.customer.getcustomerbilldetails().subscribe({
      next: (data: any) => {
        this.rowData = data;
      }
    })


  }

  colDefs: ColDef[] = [
    {
      field: "Select",
      editable: true,
      cellRenderer: (params: { value: any; }) => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    { field: "customer_bill_id" },
    { field: "customer_address" },
    { field: "customer_name" },
    { field: "customer_phone_number" },
    { field: "date" },
    { field: "quantity" },
    { field: "rate" },
    { field: "total_amount" },

  ];

  openDialog() {
    this.dialog.open(CustomerBillFormComponent, { width: '200px', height: '400px' });
  }
}





