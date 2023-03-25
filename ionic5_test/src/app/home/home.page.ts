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
   // if(this.login_email="hugh@gmail.com" && this.login_password==1234)
    //{routerLink="/test"}
  }

  ngOnInit(){}

}
