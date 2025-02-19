import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action',
  imports: [MatIconModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent implements ICellRendererAngularComp{
 
  params:any;
 
  agInit(params: any): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams): boolean {
   return true;
  }


  onClick(event:any,action :any) {
 // put anything into params u want pass into parents component
 const params = {
  event: event,
  type:action,
  rowData: this.params.node.data
  // ...something
}
this.params.onClick(params);

}
}


