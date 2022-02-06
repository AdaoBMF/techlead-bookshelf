import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interface/user';
import { AuthService } from './../../auth.service';
import { UserService } from './../../user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginOrRegister!: boolean;
  user!: User;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  loginSubmitted!: boolean;
  loginFail!: boolean;
  registerFail!: boolean;
  registerSubmitted!: boolean;
  isRegistered!: boolean;
  failMessage!: string;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }
    
  ngOnInit(): void {

    this.loginOrRegister = true;
    this.loginSubmitted = false;
    this.loginFail = false;
    this.registerFail = false;
    this.registerSubmitted = false;


    this.loginForm = this.fb.group({
      mail:[null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(250)
        ]
      ],
      password:[
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(250)
        ]
      ]
    });

    this.registerForm = this.fb.group({
      id: [null],
      userName:[null,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9._-]){1,250}$"),
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
      ],
      mail:[null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(250)
        ]
      ],
      password:[null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(250)
        ]
      ],
      admin:[0],

    });
  }

  hasLoginError(field: string) {
    return this.loginForm.get(field)?.errors;
  }

  hasRegisterError(field: string) {
    return this.registerForm.get(field)?.errors;
  }

  isLoginOrRegister() {
    this.loginOrRegister = !this.loginOrRegister;
  }

  onLogin(){
    this.loginSubmitted = true;
    if(this.loginForm.valid) {
      this.authService.authLogin(this.loginForm.value);
      this.loginFail = true;
      setTimeout(() => {
        this.loginSubmitted = false;
        this.loginForm.reset();
      }, 3000);
    }
  }

  onRegister() {
    this.registerSubmitted = true;
    if(this.registerForm.valid) {
      this.userService.save(this.registerForm.value).subscribe(
        success => {
          this.isRegistered = true;
          setTimeout(() => {
            this.loginOrRegister = !this.loginOrRegister;
            this.resetRegisterForm();
          }, 3000);
        },
        fail => {
          this.failMessage = fail.error.message;
          this.registerFail = true;
          setTimeout(()=>{
            this.resetRegisterForm();
          },3000)
        },
      );
    }
  }

  resetRegisterForm(){
    this.registerForm.reset();
    this.registerSubmitted = false;
    this.isRegistered = false;
    this.registerFail = false;
  }  

}
