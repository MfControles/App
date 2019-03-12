import { HttpClient } from '@angular/common/http';
import { Injectable ,HostListener } from '@angular/core';
import {AlertController} from "ionic-angular";
import * as signalR from "@aspnet/signalr";
import {GlobalProvider} from "../global/global";
import {HttpComunicationProvider} from "../http-comunication/http-comunication";
import {LoadingProvider} from "../loading/loading";
import { Storage } from '@ionic/storage';
@Injectable()
export class SignalrProvider {
  public idconnection: any;
  public connection: any;

  constructor(
    public http: HttpClient,
    public PopUp: AlertController,
    public Global: GlobalProvider,
    public Post:HttpComunicationProvider,
    public Loading:LoadingProvider,
    private storage: Storage) {
    console.log('Hello SignalrProvider Provider');
    
  }


}
