import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'add-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, NgFor],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent implements OnInit {


  signUpForm!: FormGroup;
  options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
  ];

  constructor(private fb: FormBuilder, private user: UserService, private dialogRef: MatDialogRef<AddUserFormComponent>) {
    this.signUpForm = this.fb.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required],
      reentter_password: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  ngOnInit(): void { }


  close() {
    this.dialogRef.close();
  }
  addUser(form: any) {
    this.user.addNewUser(this.signUpForm.value).subscribe({
      next: (data: any) => {
        console.log(data),
          console.log('Form Submitted:', form.value);
        this.dialogRef.close();
      }

    })
  }
}



//   onSubmit(form: any) {                             //handles the form submission and produce the close event to close the modal.
//     console.log('Form Submitted:', form.value);
//     this.dialogRef.close();
//                                 // Close the modal after form submission
//   }


