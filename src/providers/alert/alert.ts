import { HttpClient } from '@angular/common/http';
import { Injectable ,HostListener } from '@angular/core';
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertProvider {

  constructor(
    public http: HttpClient,
    public Alert:AlertController) {
    console.log('Hello AlertProvider Provider');
  }

  AlertOnebutton(tittle:string,message:string,textbutton?:string){
    if(textbutton==undefined){
      textbutton="Aceptar"
    }
    let Popup=this.Alert.create();
    Popup.setTitle(tittle);
    Popup.setMessage(message);
    Popup.addButton({
      text:textbutton,
      handler:()=>{
        Popup.dismiss()
      }})
    Popup.present();
  }
 
  AlertTwobutton(tittle:string,message:string,textbutton?:string,textbutton1?:string){
    if(textbutton==undefined){
      textbutton="Cancelar"
    }
    if(textbutton1==undefined){
      textbutton1="Aceptar"
    }
    let Popup=this.Alert.create();
    Popup.setTitle(tittle);
    Popup.setMessage(message);
    Popup.addButton({
      text:textbutton,
      role: 'cancel',
      handler:()=>{
        Popup.dismiss()
      }});
    Popup.addButton({
      text:textbutton1,
      role: 'cancel',
      handler:()=>{
        Popup.dismiss()
      }});
    Popup.present();
  }

  AlertOneButton(title, template, buttonText?, callback?) {
    let textButton = "OK";
    if (buttonText != undefined) { textButton = buttonText }
    let alert = this.Alert.create({
        enableBackdropDismiss: false,
        title: title,
        subTitle: template,
        buttons: [{
            text: textButton,
            role: 'cancel',
            handler: () => {
                if (callback !== undefined) {
                    callback();
                }
            }
        }]
    });
    alert.present();
}

AlertTowButtons(title,template,buttonText,callback,fail?) {
  let alert = this.Alert.create({
   title: title,
   message: template,
   enableBackdropDismiss:false,
   buttons: [
     {
       text: 'Cancelar',
       role: 'cancel',
       handler: () => {
        if(fail!==undefined){
          fail();
        }
       }
     },
     {
       text: buttonText,
       handler: () => {
        callback();
       }
     }
   ]
 });
 alert.present();
}
}