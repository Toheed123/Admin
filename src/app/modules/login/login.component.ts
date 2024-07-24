import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup ;
  forgotPasswordForm : FormGroup;
  signUpForm : FormGroup;
  selectedTabIndex : number = 0;
  isLoading : boolean = false;
  tabContainer = {
    forgotPassword : {
      tabIndex : 1,
      tabName : "Forgot Password"
    },
    signUp : {
      tabIndex : 2,
      tabName : "Sing Up"
    }
}

  constructor(
    private formBuilder : FormBuilder,
    private authenticationService : AuthenticationService,
    private router : Router,
    private snackBarService : NotificationService
  ){
    this.loginForm = this.formBuilder.group({
      userName:[[],[Validators.required]],
      password: [[], [Validators.required]]
    })
    this.forgotPasswordForm = this.formBuilder.group({
      email:[[],[Validators.required, Validators.email]],
    })
    this.signUpForm = this.formBuilder.group({
      Email:[[],[Validators.required, Validators.email]],
      Name:[[],[Validators.required]],
      Password:[[],[Validators.required]],
      PhoneNo:[[],[Validators.required]],
      ISDCode:[[],[Validators.required]],
      ConfirmPassword:[[],[Validators.required]],
    })
  }
  ngOnInIt(){

  }

  get loginFormControls(){return this.loginForm.controls}

  get forgotPasswordFormControls(){return this.forgotPasswordForm.controls}

  get signUpFormControls(){return this.signUpForm.controls}


  changeTab(tabIndex : any){
    this.selectedTabIndex = tabIndex
  }

  cancel(){
    this.selectedTabIndex = 0
  }

  OnClick(){
    this.isLoading = true
    setTimeout(() => {
      this.authenticationService.isLogin.next(true)
    this.router.navigate(['dashboard'])
      this.isLoading = false
    }, 2000)
  }
}
