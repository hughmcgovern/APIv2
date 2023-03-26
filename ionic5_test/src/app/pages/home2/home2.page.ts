import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page  {

  req_email:any;
  req_param:any;
  constructor(public router:Router) { 
  
  console.log("this is not a safe way to pass data!!!! Just an example");
  
  this.req_param = this.router.getCurrentNavigation()?.finalUrl;
  //this.req_param = this.router.getCurrentNavigation()?.finalUrl?.queryParams;
  this.req_email = this.req_param.login_email;
  }
}


