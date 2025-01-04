import { Component, OnInit, signal, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FooterComponent,
    MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule, MatDividerModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  hide = signal(true);
  alertMessage:any;
  showModal = false; //show model is control flag that control the model is visible or not

  constructor(private fb: FormBuilder,private userService: UserService,private router: Router,private dialog:MatDialog) {

  this.loginForm =this.fb.group({
   username: ['',Validators.maxLength(10),Validators.required],
   password: ['',Validators.required]
  })
}

toggleModal() { //method toggles the visibility of the modal
  this.showModal = !this.showModal; }

ngOnInit(): void {}

clickEvent(event: MouseEvent) {
  this.hide.set(!this.hide());
  event.stopPropagation();
}
onSubmit() {
  this.userService.getUserDetails().subscribe({
    next: (data: any) => {
      let listofusers: any[] = [];
      for (let a = 0; a < data.length; a++) {
        listofusers.push(data[a].username, data[a].password);
      }
      (listofusers.includes(this.loginForm.controls['username'].value) && listofusers.includes(this.loginForm.controls['password'].value)) ?

        this.router.navigate(["/welcome"]) :
        this.alertMessage = "*User not found Please click on signup*"
        this.userService.setUsername(this.loginForm.controls['username'].value!)
    },
    error: (error: any) => { }
  })
}

  onSignup() {
    this.dialog.open(AddUserFormComponent);
}

onForgot() {
  alert("method not implemented");
}
  
    onLoginSuccess() {
      
      this.userService.setUsername(this.loginForm.controls['username'].value!);
    }
  









  //   showModal = false; //show model is control flag that control the model is visible or not
  


//  toggleModal() { //method toggles the visibility of the modal.
//   this.showModal = !this.showModal; }
 
//   hide = true;    //toggle visibility button in password
//   passwordControl = new FormControl('', [Validators.required]);
 
//   onSubmit() {
//     console.log(this.loginForm)
//     this.router.navigate(["/welcome"]);
//     this.userService.setUsername(this.loginForm.controls.username.value!)
//     }
 
//     onLoginSuccess() {
      
//       this.userService.setUsername(this.loginForm.controls.username.value!);
//     }
//     onSignup() {
// this.dialog.open(AddUserFormComponent)
//     }
 
}

