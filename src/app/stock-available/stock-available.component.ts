import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-stock-available',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './stock-available.component.html',
  styleUrl: './stock-available.component.scss'
})
export class StockAvailableComponent {

}
