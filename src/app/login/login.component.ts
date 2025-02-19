import { Component, Inject, OnInit, signal, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
import { UserService } from '../service/user.service';

import { ChatbotService } from '../service/chatbot.service';
import { ChatbotComponent } from "../chatbot/chatbot.component";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatIconModule,
    MatButtonModule, MatDividerModule, MatCardModule, FooterComponent, ChatbotComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  
})

export class LoginComponent implements OnInit {

  

  loginForm!: FormGroup;
  alertMessage: any;
  showModal = false; //show model is control flag that control the model is visible or not

  constructor(private fb: FormBuilder, private userService: UserService,
     private router: Router, 
     private dialog: MatDialog,@Inject(DOCUMENT) private document: Document) {

    const container = document.getElementById("container");
 const registerBtn = document.getElementById("register");
 const loginBtn = document.getElementById("login");

 if (container && registerBtn && loginBtn) {
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}

    this.loginForm = this.fb.group({
      username: ['', [Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  toggleModal() { //method toggles the visibility of the modal
    this.showModal = !this.showModal;
  }

  ngOnInit(): void { }

 
  onSubmit() {
    this.userService.getUserDetails().subscribe({
      next: (data: any) => {
        let listofusers: any[] = [];
        for (let a = 0; a < data.length; a++) {
          listofusers.push(data[a].username, data[a].password);
        }
        if (listofusers.includes(this.loginForm.controls['username'].value) &&
          listofusers.includes(this.loginForm.controls['password'].value)) {
          this.userService.setUsername(this.loginForm.controls['username'].value!)
          this.router.navigate(["/welcome"])
        }
        else {
          this.alertMessage = "*User not found Please click on signup*"
        }

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

 
  
  
}

