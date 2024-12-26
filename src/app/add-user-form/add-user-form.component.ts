
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-user-form',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent {
  @Output() close = new EventEmitter<void>();       //emitter is used to produce an event to close the modal.

  onSubmit(form: any) {                             //handles the form submission and produce the close event to close the modal.
    console.log('Form Submitted:', form.value);
    this.close.emit();                              // Close the modal after form submission
  }
}
