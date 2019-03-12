
import { NfcProvider } from './../providers/nfc/nfc';
import { FontProvider } from './../providers/font/font';
import { AjustesVPage } from './../pages/ajustes-v/ajustes-v';

import { LoginPage } from './../pages/login/login';
import { GlobalProvider } from './../providers/global/global';
import { LoadingProvider } from './../providers/loading/loading';
import { AlertProvider } from './../providers/alert/alert';
import { Component, ViewChild ,HostListener } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  p1:any;
  p2:any;
  p3:any;
  p4:any;
  p5:any;
  p6:any;
  p7:any;
  p8:any;
  p9:any;
  p10:any;
  p11:any;
  Set=false;
  bann;
  selectedTheme: String;
  constructor(public Alert:AlertProvider,
    public Loading:LoadingProvider,
    public Global:GlobalProvider,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private settings: FontProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      this.Global.Item=10;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.bann=platform.is('android');
    console.log('Annnnnnnnnnnnnnnnnnnndrooooooooooooooooooooooooooooidddddddddddddddddddddddddddddddddddddddddddddddddddddd'+this.bann)
    this.p2= { title: 'Home', component: HomePage }
    this.p6= { title: 'Ajustes Visuales', component: AjustesVPage};
  }


  openPage(page) {
    this.Loading.LoadingNormal("Abriendo Página")
    setTimeout(()=>{this.nav.setRoot(page);}, 500)
  }

  CerrarSesion(){
    this.Loading.LoadingNormal("Cerrando Sesion")
    setTimeout(()=>{this.nav.setRoot(LoginPage);}, 1000)
  }
  
  toogleSettings(){
    if(this.Set==false){
      this.Set=true
    }else{
      this.Set=false
    }
  }
  
}

