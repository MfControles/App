import { FontProvider } from './../../providers/font/font';
import { DatabaseProvider } from './../../providers/database/database';
import { LoadingProvider } from './../../providers/loading/loading';
import { GlobalProvider } from './../../providers/global/global';
import { Component, ChangeDetectorRef ,HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-ajustes-v',
  templateUrl: 'ajustes-v.html',
})
export class AjustesVPage {
  selectedTheme: String;
  Tam:number;
  Item:number;
  constructor(private settings: FontProvider,public navCtrl: NavController,private storage: Storage,public Loadingservice:LoadingProvider, public navParams: NavParams,public db: DatabaseProvider,private alertCtrl: AlertController,public cdr: ChangeDetectorRef,public global: GlobalProvider,private toastCtrl: ToastController) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.Item=this.global.Item;
    if(this.selectedTheme=='light-theme'){
    this.Tam=1000
    }else if(this.selectedTheme=='dark-theme'){
      this.Tam=1500
    }else if(this.selectedTheme=='blue-theme'){
      this.Tam=2000
    }
    
  }

  ionViewDidLoad() {
    this.Loadingservice.HideLoading();
    console.log('ionViewDidLoad VistaPage');
  }
  toggleAppTheme() {
    if (this.Tam==1000) {
      this.settings.setActiveTheme('light-theme');
      this.storage.set('LETTER','light-theme');
      console.log("Pequeña");
    } else if (this.Tam==1500) {
      this.settings.setActiveTheme('dark-theme');
      this.storage.set('LETTER','dark-theme');
      console.log("Mediana")
 
    }else if (this.Tam==2000) {
      this.settings.setActiveTheme('blue-theme');
      this.storage.set('LETTER','blue-theme');
      console.log("Grande")
    }
  }
  ActItems(){
  this.global.Item=this.Item;
  console.log('ITEM '+this.Item)
  this.storage.set('ITEM',this.Item);
  }
}