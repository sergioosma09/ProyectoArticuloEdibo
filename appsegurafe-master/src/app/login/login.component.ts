import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;                     // {1}
  private formSubmitAttempt: boolean;  // {2}

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService // {4}
  ) { }


  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({     // {5}
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
