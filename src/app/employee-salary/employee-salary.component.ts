import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelApiModule,themeQuartz, ClientSideRowModelModule, ColDef, CsvExportModule, GridApi, GridReadyEvent, Module, ModuleRegistry, NumberEditorModule, RowApiModule, RowSelectionModule, RowSelectionOptions, TextEditorModule, ValidationModule, ValueFormatterParams,  } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActionComponent } from '../action/action.component';
import { SalaryService } from '../service/salary.service';

ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  RowSelectionModule,
  RowApiModule,
  ClientSideRowModelModule,
  ValidationModule,
  NumberEditorModule, TextEditorModule, CsvExportModule
]);


@Component({
  selector: 'app-employee-salary',
  imports: [HeaderComponent,FooterComponent,AgGridAngular,MatButtonModule],
  templateUrl: './employee-salary.component.html',
  styleUrl: './employee-salary.component.scss'
})
export class EmployeeSalaryComponent implements OnInit{

  modules: Module[] = [ClientSideRowModelModule];
  rowData: any[] = [];
  gridApi!: GridApi;
  defaultPageSize!: 15;
 

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  constructor(private salary:SalaryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.salary.getsalarydetails().subscribe({
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
      editable: false ,
      cellRenderer: ActionComponent,
      cellRendererParams: {
        onClick: this.onAction.bind(this),
       
      },
    },
    { field: "serial_number", editable: false  },
    { field: "worker_name",  },
    { field: "date",
      valueFormatter: (params: ValueFormatterParams<any, Date>) => {
        if (!params.value) {
          return "";
        }
        const month = params.value.getMonth() + 1;
        const day = params.value.getDate();
        return `${params.value.getFullYear()}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      },
      cellEditor: "agDateCellEditor",
    },
    { field: "total_salary",valueFormatter: p => "rs. " + p.value},
    { field: "advances",  valueFormatter: p => "rs. " + p.value},
    { field: "salary_paid", valueFormatter: p => "rs. " + p.value },
    { field: "remaining_salary", valueFormatter: p => "rs. " + p.value,
    
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
      columnKeys: ['serial_number', 'worker_name', 'date', 'total_salary', 'advances',  'salary_paid', 'remaining_salary'],  // Export specific columns, including those that are hidden
      skipHeader: false, // Include column headers,
    };

    this.gridApi.exportDataAsCsv(params);
  }

  deleteitem(event: any) {
    console.log(this.gridApi.getSelectedRows().map(a => {
      this.salary.deleteSalary(a.customer_bill_id).subscribe({
        next: (data: any) => {

        }
      })
    })
    );
  }

}