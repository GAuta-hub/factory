import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-employee-salary',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './employee-salary.component.html',
  styleUrl: './employee-salary.component.scss'
})
export class EmployeeSalaryComponent {

}
