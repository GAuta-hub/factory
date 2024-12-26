import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-our-community',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './our-community.component.html',
  styleUrl: './our-community.component.scss'
})
export class OurCommunityComponent {

}
