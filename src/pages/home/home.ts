import { LoginPage } from './../login/login';
import { FontProvider } from './../../providers/font/font';
import { GlobalProvider } from './../../providers/global/global';
import { LoadingProvider } from './../../providers/loading/loading';
import { AlertProvider } from './../../providers/alert/alert';
import { HttpComunicationProvider } from './../../providers/http-comunication/http-comunication';
import { HttpClient } from '@angular/common/http';
import { Component ,HostListener } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {SignalrProvider} from "../../providers/signalr/signalr";
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { NfcProvider } from '../../providers/nfc/nfc';
import { isArray } from 'ionic-angular/umd/util/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannn;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public signalR:SignalrProvider,
    public httpClient: HttpClient,
    public Post:HttpComunicationProvider,
    public Alert:AlertProvider,
    public Loading:LoadingProvider,
    public Global:GlobalProvider,
    public db :DatabaseProvider,
    private storage: Storage,
    private settings: FontProvider,
    platform: Platform,
    public menuCtrl: MenuController,
    
    private nfcService: NfcProvider
  ) {
    this.bannn=platform.is('android')
    this.menuCtrl.enable(true, 'leftMenu');
    platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(LoginPage)
    },1); 
    
    this.db.GetTokenType((err,data2)=>{
      console.warn('Consultando API')
      if(err==null){
        console.log(data2) 
        this.Global.TokenTypeData=(data2);
      }else{
        console.error("ERR   =>   "+err); 
      }
    });      
    this.storage.get('ITEM').then((val) => {
    if(val==''||val==' '||val==null){
      this.Global.Item=10;
      this.storage.set('ITEM',10);
    }else{
      this.Global.Item=val;
    }
    console.log('ITEM',val);
  });
  this.storage.get('LETTER').then((val) => {
    if(val==''||val==' '||val==null){
      this.settings.setActiveTheme('dark-theme');
      this.storage.set('LETTER','dark-theme');
    }else{
      this.settings.setActiveTheme(val);
    }
    console.log('LETTER',val);

  });
    this.db.GetCompany((err,data)=>{
       
      console.warn('Consultando API')
      if(err==null){
        console.log(data) 
        this.Global.CompanyData=(data);
        if(data.length==0){
          this.Global.Exist=false;console.log('this.Global.Exist=false') 
        }else{
          this.Global.Exist=true;console.log('this.Global.Exist=true') 
        }
        this.Global.Id_Company=data.Id_Company;
      }else{
        console.error("ERR   =>   "+err); 
      }
    });
  }





  ionViewDidLoad() {
    console.log("Initializing MF Reading!");
    this.nfcService.Listen((err, data)=> {
      if(err){
        console.log(err);
      }
      else{
        console.log(data);
      }
    });
  

    console.log('Home Page')
    this.db.GetCountry((err,data)=>{
       
      console.warn('Consultando API')
      if(err==null){
        console.log(data) 
        this.Global.Countries=(data);
        this.db.GetCity((err,data)=>{
           
          console.warn('Consultando API')
          if(err==null){
            console.log(data) 
            this.Global.Cities=(data);
            this.db.GetNFCSettings((err,data)=>{
              console.warn('Consultando API')
              if(err==null){
                console.log(data) 
                this.Global.DataNFC=(data);
                for (let i = 0; i < this.Global.DataNFC.length; i++) {
                  if (this.Global.DataNFC[i].Field === "ReaderKey") {
                    this.Global.AuthCard.Key = this.Global.DataNFC[i].Value;
                    let stringKey = this.Global.DataNFC[i].Value;
                    this.Global.AuthCard.keyCardReader = ["0x" + stringKey[0] + stringKey[1], "0x" + stringKey[2] + stringKey[3], "0x" + stringKey[4] + stringKey[5], "0x" + stringKey[6] + stringKey[7], "0x" + stringKey[8] + stringKey[9], "0x" + stringKey[10] + stringKey[11]];
                  }
            
                  if (this.Global.DataNFC[i].Field === "ReaderAddress") {
                    this.Global.AuthCard.Block = Number(this.Global.DataNFC[i].Value);
                  }
                  if (this.Global.DataNFC[i].Field === "ReaderSector") {
                    this.Global.AuthCard.Sector = Number(this.Global.DataNFC[i].Value);
                  }
                }
                this.Loading.HideLoading();
              }else{
                console.error("ERR   =>   "+err); 
              }
            });
          }else{
            console.error("ERR   =>   "+err); 
          }
        });
      }else{
        console.error("ERR   =>   "+err); 
      }
    });
  }




  
}
