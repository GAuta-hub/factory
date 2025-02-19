import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelApiModule, ClientSideRowModelModule, ColDef, CsvExportModule, GridApi, GridOptions, GridReadyEvent, Module, ModuleRegistry, NumberEditorModule, RowApiModule, RowSelectionModule, RowSelectionOptions, TextEditorModule, ValidationModule, } from 'ag-grid-community';

import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { ActionComponent } from '../action/action.component';
import { RawmaterialsService } from '../service/rawmaterials.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  RowSelectionModule,
  RowApiModule,
  ClientSideRowModelModule,
  ValidationModule,
  NumberEditorModule, TextEditorModule, CsvExportModule
]);

@Component({
  selector: 'app-rawmaterials',
  imports: [AgGridAngular, MatButtonModule, HeaderComponent, FooterComponent],
  templateUrl: './rawmaterials.component.html',
  styleUrl: './rawmaterials.component.scss'
})
export class RawmaterialsComponent implements OnInit {


  modules: Module[] = [ClientSideRowModelModule];
  rowData: any[] = [];
  gridApi!: GridApi;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

  }

  constructor(private rm: RawmaterialsService, private http: HttpClient,) {

  }

  ngOnInit(): void {
    this.rm.getRawMaterialDetails().subscribe({
      next: (data: any) => {
        this.rowData = data;
      },
      error: (data: any) => { }
    })
  }

  columnDefs: any[] = [
    {
      headerName: 'Actions',
      cellRenderer: ActionComponent,  // Custom component for actions
      cellRendererParams: {
        onClick: this.onAction.bind(this),
      }
    },

    { field: "rawmaterial_id", editable: false },
    { field: "received_date", editable: true },
    { field: "name_of_material", editable: true },
    { field: "quantity", editable: true },
    { field: "rate", editable: true },
    { field: "total_amount", editable: true },
    { field: "phone_number", editable: true },
    { field: "invoice_number", editable: true },
    { field: "address", editable: true }
  ];

  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
  };

  onAction(e:any) {
    if(e.type==='save'){
      console.log(e.type);
   }
  }

  deleteitem(event: any) {
    console.log(this.gridApi.getSelectedRows()
      .map(a => {

        this.rm.deleteRawMaterial(a.rawmaterial_id).subscribe({
          next: (data: any) => {
          }
        })
      })
    );
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
      columnKeys: ['rawmaterial_id', 'received_date', 'name_of_material', 'quantity', 'rate', 'total_amount', 'phone_number', 'invoice_number','address'],  // Export specific columns, including those that are hidden
      skipHeader: false, // Include column headers,
    };

    this.gridApi.exportDataAsCsv(params);
  }
}
