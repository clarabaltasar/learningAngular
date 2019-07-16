import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:string ="uxia";
  loginForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    })
  }

  login(e){
    e.preventDefault();
    console.log(this.loginForm);
    if(this.loginForm.valid){
      localStorage.setItem("user", JSON.stringify(this.loginForm.value));
      this.router.navigate(["home"]);
    }
  }

}
