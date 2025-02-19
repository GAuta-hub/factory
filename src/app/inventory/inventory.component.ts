import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, GridApi, GridReadyEvent, Module, RowSelectionOptions } from 'ag-grid-community';
import { InventoryService } from '../service/inventory.service';
import { ActionComponent } from '../action/action.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inventory',
  imports: [HeaderComponent, FooterComponent, AgGridAngular, MatButtonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {

  modules: Module[] = [ClientSideRowModelModule];
  rowdata: any;
  gridApi!: GridApi;


  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  constructor(private inventory: InventoryService) { }

  ngOnInit(): void {
    this.inventory.getInventoryDetails().subscribe({
      next: (data: any) => {
        this.rowdata = data;
      }
    })
  }

  colDef: ColDef[] = [
    {
      field: "Action",
      cellRenderer: ActionComponent,
      cellRendererParams: {
        onclick: this.onAction.bind(this),
      }
    },
    { field: "material_id" },
    { field: "material_name" },
    { field: "date" },
    { field: "material_quantity_used" },
    { field: "material_quantity_received" },
    { field: "material_quantity_available" }
  ];
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
  };

  onAction(e: any) {
    if (e.type === 'save') {
      console.log('save')
    }
  }



  deleteitem(event: any) {
    console.log(this.gridApi.getSelectedRows()
    .map(a => {

      this.inventory.deletecustomer(a.material_id).subscribe({
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
      columnKeys: ['material_id', 'material_name', 'date', 'material_quantity_used', 'material_quantity_received', 'material_quantity_available'],  // Export specific columns, including those that are hidden
      skipHeader: false, // Include column headers,
    };

    this.gridApi.exportDataAsCsv(params);
  }

}
