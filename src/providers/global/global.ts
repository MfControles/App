import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { NfcProvider } from '../nfc/nfc';

import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalProvider {
  public RestDefinitions:any;
  public Auth:any;
  public Url:any;
  public IsLoggin:boolean=false;
  public Id_Company;
  public Id_Site;
  public Exist:boolean=false;
  TokenData;
  AccessTypeData;
  TokenTypeData;
  PeopleGroupData;
  GroupTokenData;
  ProfileData;
  CompanyData;
  SitesData;
  Countries;
  Cities;
  ZonasData;
  TarifasData;
  ImpuestosData;
  PeopleData;
  Item;
  RatetypeData;
  GroupsandPlacesData;
  TarifaVacio=false;
  EnterpriceData;
  PerfilesData;
  Id_ProfileData;
  PosPerfilData;
  PerfilRuleData;
  ConveniosData;
  Dispositivo: string = "Tablet";
  AuthCard;
  idCardReference;
  DataNFC;
  cardData;
  public readObserver: any;
  public isInitialized:boolean = false;
  constructor(public http: HttpClient,
    private storage: Storage) {
    this.storage.get('IP').then((val) => {
      if(val==''||val==' '||val==null){
        this.Url='http://192.168.14.204:5000' 
      }else{
        this.Url=val;
      }
      console.log('Url',val)
    });
    console.log('Hello GlobalProvider Provider');
    this.Auth={
      User:"Camilo@ci24.com",
      Password:"Controles1"
    }
    this.RestDefinitions={
      Success:100
    }
    this.AuthCard = {
      Sector: 0,
      Block: 0,
      Key: "FFFFFFFFFFFF",
      IdTerminal: "",
      IdDevice: 0,
      keyCardReader: [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
    };
  }
  /*
  public SubscribeFunction() {
    console.log("Init subscribe");
      if (this.readObserver == null) {
        this.nfcService.ChangeState();
        console.log("Subscribing from observer");
        this.readObserver = this.nfcService.readSubject.subscribe((data) => {
          console.log("Read Card Data Process",data)
        });
      }

    }


  public UnsubscribeFunction() {
    console.log("Unsubscribing from observer!");

    if (this.readObserver != null) {
      this.readObserver.unsubscribe();
      this.readObserver = null;
    }
  }
  */
}


