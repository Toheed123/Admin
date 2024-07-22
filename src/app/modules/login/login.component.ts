import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup ;
  forgotPasswordForm : FormGroup;
  selectedTabIndex : number;
  tabContainer = {
    forgotPassword : {
      tabIndex : 1,
      tabName : "Forgot Password"
    },
    signIn : {
      tabIndex : 2,
      tabName : "Sing In"
    }
}

  constructor(
    private formBuilder : FormBuilder,
  ){
    this.loginForm = this.formBuilder.group({
      userName:[[],[Validators.required]],
      password: [[], [Validators.required]]
    })
    this.forgotPasswordForm = this.formBuilder.group({
      email:[[],[Validators.required, Validators.email]],
    })
  }
  ngOnInIt(){

  }

  get loginFormControls(){return this.loginForm.controls}

  get forgotPasswordFormControls(){return this.forgotPasswordForm.controls}

  changeTab(tabIndex : any){
    this.selectedTabIndex = tabIndex
  }

  cancel(){
    this.selectedTabIndex = 0
  }
}
