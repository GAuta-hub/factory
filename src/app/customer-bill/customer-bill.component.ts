import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelApiModule,themeQuartz, ClientSideRowModelModule, ColDef, CsvExportModule, GridApi, GridReadyEvent, Module, ModuleRegistry, NumberEditorModule, RowApiModule, RowSelectionModule, RowSelectionOptions, TextEditorModule, ValidationModule,  } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActionComponent } from '../action/action.component';
import { CustomerService } from '../service/customer.service';
ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  RowSelectionModule,
  RowApiModule,
  ClientSideRowModelModule,
  ValidationModule,
  NumberEditorModule, TextEditorModule, CsvExportModule
]);



@Component({
  selector: 'app-customer-bill',
  imports: [AgGridAngular, HeaderComponent, FooterComponent, MatButtonModule],
  templateUrl: './customer-bill.component.html',
  styleUrl: './customer-bill.component.scss'
})

export class CustomerBillComponent implements OnInit {


  
  modules: Module[] = [ClientSideRowModelModule];
  rowData: any[] = [];
  gridApi!: GridApi;
  defaultPageSize!: 15;
 

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  constructor(private customer: CustomerService, private http: HttpClient) { }

  ngOnInit(): void {
    this.customer.getcustomerbilldetails().subscribe({
      next: (data: any) => {
        this.rowData = data;
      },
      error: (data: any) => { }
    })
  }
  defaultColDef:ColDef={
    flex:1,
    sortable: false,
    filter: true,
    floatingFilter: true,
    editable: true ,
  };
  colDefs: ColDef[] = [
    {
      field: "Action",
      cellRenderer: ActionComponent,
      cellRendererParams: {
        onClick: this.onAction.bind(this),
      },
    },
    { field: "customer_bill_id",  },
    { field: "customer_address",  },
    { field: "customer_name",},
    { field: "customer_phone_number",},
    { field: "date",  },
    { field: "quantity", },
    { field: "rate", valueFormatter: p => "rs. " + p.value },
    { field: "total_amount", valueFormatter: p => "rs. " + p.value,
    
    },
  ];

  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
  };

  onAction(e: any) {
    if (e.type === 'save') {
      console.log(e.type);
    }

  }

  additems() {

    this.gridApi.applyTransaction({
      addIndex: 0,
      add: [0],

    });
  }

  exptortdatatoexel() {
    const params = {
      fileName: 'my-data.csv',
      columnKeys: ['customer_bill_id', 'customer_address', 'customer_name', 'customer_phone_number', 'date', 'quantity', 'rate', 'total_amount'],  // Export specific columns, including those that are hidden
      skipHeader: false, // Include column headers,
    };

    this.gridApi.exportDataAsCsv(params);
  }

  deleteitem(event: any) {
    console.log(this.gridApi.getSelectedRows().map(a => {
      this.customer.deletecustomer(a.customer_bill_id).subscribe({
        next: (data: any) => {

        }
      })
    })
    );
  }







}







