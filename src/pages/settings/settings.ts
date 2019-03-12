import { LoginPage } from './../login/login';

import { GlobalProvider } from './../../providers/global/global';
import { HomePage } from './../home/home';
import { AlertProvider } from './../../providers/alert/alert';
import { LoadingProvider } from './../../providers/loading/loading';
import { HttpComunicationProvider } from './../../providers/http-comunication/http-comunication';
import { HttpClient } from '@angular/common/http';
import { Component ,HostListener } from '@angular/core';
import {SignalrProvider} from "../../providers/signalr/signalr";
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
Url;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public Post:HttpComunicationProvider,
    public Alert:AlertProvider,
    public Loading:LoadingProvider,
    public signalR:SignalrProvider,
    public global:GlobalProvider,
    private storage: Storage,
    public viewCtrl: ViewController) {
      this.storage.get('IP').then((val) => {
        if(val==''||val==' '||val==null){
          
        }else{
          this.global.Url=val;
          this.Url=val;
        }
        console.log('Url',val)
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  Guardar(){
      if(this.Url==''||this.Url==' '||this.Url==null||this.Url==undefined){
        this.Loading.LoadingNormal("Error, se encuentran campos vacios",2);
    }else{
      this.storage.set('IP',this.Url);
      this.global.Url=this.Url;
      this.Loading.LoadingNormal("Cambios Guardados");
      this.navCtrl.setRoot(LoginPage);
    }
  }

  Cancel(){
    this.navCtrl.setRoot(LoginPage);
  }
}
