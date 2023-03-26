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
    console.log("requested data:",e.value);
    console.log("this is not a safe way to pass data!!!!");
    let url="/home2";
    let url_withparameter="/home2?email="
        +e.value.login_email+"&password="
        +e.value.login_password;
    this.router.navigateByUrl(url_withparameter);
  }

  ngOnInit(){}

}
