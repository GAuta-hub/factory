import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';
import { InventoryService } from '../inventory.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  imports: [HeaderComponent,FooterComponent,AgGridAngular,HttpClientModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit{
  modules: Module[] = [ClientSideRowModelModule];
  rowdata:any;
  constructor(private inventory: InventoryService){}

  ngOnInit(): void {
    this.inventory.getInventoryDetails().subscribe({
      next: (data:any)=>{
        this.rowdata = data;
      }
    })
  }

  colDef: ColDef[]=[
    {field: "material_id"},
    {field: "material_name"},
    {field: "date"},
    {field:"material_quantity_used"},
    {field:"material_quantity_received"},
    {field:"material_quantity_available"}
  ];
}
