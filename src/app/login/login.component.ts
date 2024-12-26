import { Component, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, RouterLink, RouterModule, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FooterComponent,
    MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule, MatDividerModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  
  constructor(private userService: UserService,private router: Router) {}

 loginForm =new FormGroup({
  username: new FormControl('',[Validators.maxLength(10),Validators.required]),
  password: new FormControl(),
 })
 
 showModal = false; //show model is control flag that control the model is visible or not
 toggleModal() { //method toggles the visibility of the modal.
  this.showModal = !this.showModal; }
 
  hide = true;    //toggle visibility button in password
  passwordControl = new FormControl('', [Validators.required]);
 
  onSubmit() {
    console.log(this.loginForm)
    this.router.navigate(["/welcome"]);
    this.userService.setUsername(this.loginForm.controls.username.value!)
    }
 
    onLoginSuccess() {
      
      this.userService.setUsername(this.loginForm.controls.username.value!);
    }
 
}

