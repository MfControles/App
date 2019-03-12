import { NgxPaginationModule } from 'ngx-pagination';
import { AjustesVPageModule } from './../pages/ajustes-v/ajustes-v.module';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpComunicationProvider } from '../providers/http-comunication/http-comunication';
import { LoadingProvider } from '../providers/loading/loading';
import { AlertProvider } from '../providers/alert/alert';
import { HttpClientModule } from '@angular/common/http';
import { GlobalProvider } from '../providers/global/global';
import { DatabaseProvider } from '../providers/database/database';
import { FontProvider } from '../providers/font/font';
import { Vibration } from '@ionic-native/vibration';
import { SignalrProvider } from '../providers/signalr/signalr';
import { NfcProvider } from '../providers/nfc/nfc';
import { NFC } from '@ionic-native/nfc';
import { SettingsPageModule } from '../pages/settings/settings.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    LoginPageModule,
    IonicStorageModule.forRoot(),
    AjustesVPageModule,
    SettingsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider,
    GlobalProvider,
    AlertProvider,
    HttpComunicationProvider,
    DatabaseProvider,
    FontProvider,
    Vibration,
    SignalrProvider,
    NfcProvider,
    NFC
  ],exports: [
    NgxPaginationModule,
  ]
})
export class AppModule {}
