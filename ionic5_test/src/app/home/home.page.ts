import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  login_password:any;
  login_email:any;
  constructor(public router: Router) {}
  loginForm(e:any){
    console.log("clicked",e.value);
    this.router.navigateByUrl("/home2");
   // if(this.login_email="hugh@gmail.com" && this.login_password==1234)
    //{routerLink="/test"}
  }

  ngOnInit(){}

}
