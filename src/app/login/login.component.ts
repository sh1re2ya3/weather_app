import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,CommonModule, ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,MatError]
})
export class LoginComponent {
  isLoginMode = true; // Toggles between login and signup forms
  loginForm: FormGroup;
  signupForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username!, password!)) {
        this.router.navigate(['/current-weather']);
      } else {
        this.loginError = true;
      }
    }
  }

  onSignupSubmit() {
    if (this.signupForm.valid) {
      const { password, confirmPassword } = this.signupForm.value;
      if (password === confirmPassword) {
        console.log('Signup Successful');
        //signup api call
      } else {
        console.error('Passwords do not match');
      }
    }
  }
}
