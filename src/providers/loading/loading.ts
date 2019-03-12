import { HttpClient } from '@angular/common/http';
import { Injectable ,HostListener } from '@angular/core';
import {LoadingController} from "ionic-angular";

@Injectable()
export class LoadingProvider {
  loader:any;
  timeOutInstance:any;
  constructor(public loading: LoadingController) {
    console.log('Hello LoadingProvider Provider');
  }

  LoadingNormal(Message?,SecondsToDismiss?,callback?){
    this.HideLoading();
    let template=Message;
    if(Message===undefined){
      template="";
    }
    clearTimeout(this.timeOutInstance);
    this.loader = this.loading.create({
      spinner: 'ios',
      cssClass:"background: transparent",
      content: template,
    });
    this.loader.present().then(() => {
      if(SecondsToDismiss===undefined){
      }else{
       setTimeout( ()=> {
          this.HideLoading();
          if(callback!==undefined){
            callback();
          }
        },SecondsToDismiss*1000)
      }
    });
  }

  HideLoading(SecondsToDismiss?,callback?){
    if(SecondsToDismiss===undefined){
      if(this.loader!==undefined){
        try{
          this.loader.dismiss();
          this.loader=undefined;
        }catch(e){
          console.log('err ',e);
        }
      }
    }else{
      this.timeOutInstance= setTimeout( ()=> {
        if(callback!==undefined){
          callback();
        }
        if(this.loader!==undefined){
          try{
            this.loader.dismiss();
            this.loader=undefined;
          }catch(e){
            console.log('err 1',e);
          }
        }
      },SecondsToDismiss*1000)
    }
  }

}