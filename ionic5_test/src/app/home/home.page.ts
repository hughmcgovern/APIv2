import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  login_password:any;
  login_email:any;
  constructor() {}
  loginForm(e:any){
    console.log("clicked",e.value);
  }

  ngOnInit(){}

}
