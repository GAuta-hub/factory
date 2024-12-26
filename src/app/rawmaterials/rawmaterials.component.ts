import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-rawmaterials',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './rawmaterials.component.html',
  styleUrl: './rawmaterials.component.scss'
})
export class RawmaterialsComponent {

}
