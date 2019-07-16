import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
      localStorage.setItem("user", JSON.stringify(this.loginForm.value))
    }
  }

}
