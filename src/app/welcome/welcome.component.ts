import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit{
  userName: string = '';

  constructor(private userService: UserService) {
    this.userName = this.userService.getUsername();
  }
  ngOnInit(): void {
   let username= this.userService.getUsername();
  }

}
