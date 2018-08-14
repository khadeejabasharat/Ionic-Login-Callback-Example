import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { unwrapResolvedMetadata } from '../../../node_modules/@angular/compiler';
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  uname:string = "khadeeja"     //Correct user
  password:string ="123456"

  alertTitle:string ="Alert Title"
  alertSub:string = "Alert Content or subtitle"

  constructor( private alertController: AlertController) {
  }
  success(): void {
    this.alertTitle="Success";
    this.alertSub="You have logged in."
   }

   failure(): void {
    this.alertTitle="Failure";
    this.alertSub="Wrong username or password. Enter correct information again."
   }
  showAlert() {     //Basically show login success and failure
    let alert = this.alertController.create({
        title: this.alertTitle,
        subTitle: this.alertSub,
        buttons: ['OK']
    });
    alert.present();
}
login ( uname:string , password:string  ):void{     //Login done using call backs
  this.authenticateUser(uname,password,
    (value) => this.success(),
    (value) => this.failure(),(value)=>this.showAlert());
    
}
authenticateUser( uname:string , password:string , success, failure, show ):void{
 ( uname==this.uname && password==this.password )?success():failure();
 show();
}
// login ( uname:string , password:string ) :void{    //Simply authentication user without callbacks
//   if ( this.authenticateUser(uname,password) )
//   {    
//     this.success();
//   }
//   else{
//     this.failure();
//   }
  
//   this.showAlert();
// }

// authenticateUser( uname:string , password:string ):boolean{    //Without using callback authentiacte function
//   return( uname==this.uname && password==this.password );
//  }

}
