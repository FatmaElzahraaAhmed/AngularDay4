import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  regForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.min(20),Validators.max(40),Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email])
  })

  check() {
    if (this.regForm.valid) {
      alert("Success! All fields are valid.");
    } else {
      alert("Error! Please correct the following issues:");
      if (this.regForm.get('name')?.invalid) {
        if (this.regForm.get('name')?.errors?.['required']) {
          alert("Name is required.");
        }
        if (this.regForm.get('name')?.errors?.['minlength']) {
          alert("Name must be at least 3 characters long.");
        }
      }
      if (this.regForm.get('age')?.invalid) {
        if (this.regForm.get('age')?.errors?.['min']) {
          alert("Age must be at least 20.");
        }
        if (this.regForm.get('age')?.errors?.['max']) {
          alert("Age must be at most 40.");
        }
        if (this.regForm.get('age')?.errors?.['required']) {
          alert("Age is required.");
        }
      }
      if (this.regForm.get('email')?.invalid) {
        if (this.regForm.get('email')?.errors?.['required']) {
          alert("Email is required.");
        }
        if (this.regForm.get('email')?.errors?.['email']) {
          alert("Invalid email format.");
        }
      }
    }
  }
}