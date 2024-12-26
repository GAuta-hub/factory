import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-our-mission',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss'
})
export class OurMissionComponent {

}
