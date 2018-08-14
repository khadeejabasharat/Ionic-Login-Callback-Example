import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uname:string="deeju"
  password:string="sample"

  constructor(public navCtrl: NavController,
  private loginService:LoginServiceProvider,
  ) {}

  loginCheck( data:any ):void{
    this.uname=data.uname;
    this.password=data.pass;
    this.loginService.login(this.uname,this.password);
    
  }


}
