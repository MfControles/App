import { GlobalProvider } from './../global/global';
import { AlertProvider } from './../alert/alert';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


import { NFC } from '@ionic-native/nfc';
import { LoadingProvider } from "../loading/loading";

import { Events, } from "ionic-angular";
import { Observable,Subject } from 'rxjs';
import { errorHandler } from '@angular/platform-browser/src/browser';

import { DatabaseProvider } from '../database/database';


@Injectable()
export class NfcProvider {
    public firsttime;boolean=false
    public Interval:any=null;
    public tagDiscoveryPromise: any;
    public writeReadPromise: any;
    public readSubject: Subject<any> = new Subject<any>();
    readObserver:any=null;
    private writeValidation: boolean = false;
    private intervalCheckingCard: any = null;
    public readyToNewEvent: boolean = true;

    constructor(
      public nfc: NFC,
      public Alert:AlertProvider,
      public Loading:LoadingProvider,
      public Global:GlobalProvider,
      private DataBaseService:DatabaseProvider
    ) {


      this.writeReadPromise = null;
    }

///// News Functions
        public InitCardReader() {
          console.log("Init Reader");
          if (this.Global.Dispositivo == "Tablet") {
            console.log('Ignoring checking reader');
          }else if(this.Global.Dispositivo=="Emulador") {
              /*
              this.sdk.CheckReader((err) => {
                console.log("Chequeando Lectora");
                if (err) {
                  this.AlertService.AlertOneButton("Error", "Parece que la lectora SL025 no está conectada al equipo. Por favor conectar y reiniciar.");
                } else {
                  console.log("CheckDevice reader OK");
                }
              });
              */
            }
          }



          public CardReaderListener(callback?) {
              /*
            try{
              this.sdk.SendGetIdCard((err, data) => {
                if (err != null) {
                  callback(err)
                } else if(err==null){
                  console.log("Card Reader in Emulator!");
                  callback(err)
                }
              });
            }catch (e) {
              console.log(e)
            }
*/
          }



          public ListenAndReadMF() {
            if (this.Global.Dispositivo == "Tablet") {
              console.log("Init Read Nfc");
              this.readObserver = new Subject();
              this.Listen().subscribe(() => {
                this.ReadMF(this.nfc, JSON.stringify(this.Global.AuthCard), (readData) => {
                  this.readObserver.next(readData);
                });
              });
              return this.readObserver;
            }
          }



        private ReadFromCardReaderEmulator(callback) {
          let dataToSend =  {
            sector: this.Global.AuthCard.Sector,
            block: this.Global.AuthCard.Block,
            key: this.Global.AuthCard.keyCardReader,
            numBlocks: 1
          };
          console.log(JSON.stringify(dataToSend));
          /*
          this.sdk.ReadCard(dataToSend, (err, success) => {
            console.log(err);
            if (err) {
              callback(err);
            } else {
              console.log("ReadCard", success);
              callback(null, {
                TagData: this.toHexString(success.data),
                Id: this.decIdToHex(success.idCard),
                Token:success.idCard
              });
            }
          });
          */
        }
/*
        public ReadMifareCard (callback:Function) {
          if(this.Global.Dispositivo=="Emulador") {
            console.log('Reading card from reader in Emulador');
            let message=""
            this.ReadFromCardReaderEmulator((err, cardData)=> {
              if (err) {

                switch (err){
                  case 4:
                    console.log("NO_CARD");
                    message="NO_CARD";
                    break;
                  case 5:
                    console.log("LOGIN FAIL");
                    message="LOGIN FAIL";
                    break;
                  default:
                    console.log(err);
                    message="UNDEFINED ERROR";
                    break;
                }
                this.LoadingService.LoadingNormal("Error Lectura  " +message,2);
                callback(err);
              } else {
                console.log("cardData", JSON.stringify(cardData));
                callback(null, cardData);
              }
            });
          }

        }

          private WriteCardEmulator(dataToWrite, callback) {
            let deviceData={
              sector: this.settings.auth.Sector,
              block: this.settings.auth.Block,
              key: this.settings.auth.keyCardReader,
              data: dataToWrite.DataReaderCard
            };
            this.sdk.Write(deviceData, (err,data)=>{
              if(err)
              {
                callback(err);
              }
              else{
                console.log("Success Write ",JSON.stringify(data));
                this.writeValidation = false;
                callback(null);
              }
            });
          }
*/
    /// End New Functions
        public NFCHAndler(success){
            this.nfc.enabled().then(()=>{
                success();
            },error=>{
                this.Alert.AlertTowButtons("NFC","Nfc desactivado, Desea activarlo?","Sí",()=>{
                    this.nfc.showSettings().then(()=>console.log("Abriendo Settings"),err=>console.log(err));
                })

            })
        }


    public Listen(callback?) {
        return Observable.create(observer => {
                this.nfc.enabled().then(success => {
                    this.tagDiscoveryPromise = this.nfc.addTagDiscoveredListener((success) => {
                        if (callback !== undefined) {
                            callback();
                        }
                        console.log("LISTENING");
                    }, err => {
                        this.Alert.AlertOneButton("NFC", "Parece ser que el NFC esta deshabilitado en el equipo");
                    }).subscribe(event => {
                      //  this.LoadingService.LoadingNormal("leyendo tarjeta");
                        console.log('event',event);
                        if (this.readyToNewEvent) {
                            this.readyToNewEvent = false;
                            console.log("CARD DETECTED");
                            observer.next();
                        }
                        setTimeout(() => {
                            this.readyToNewEvent = true;
                        }, 2000);
                    });

                }, error => {
                    this.Alert.AlertOneButton("NFC", "Parece ser que el NFC esta deshabilitado en el equipo");
                }).catch(
                    catch_e => console.log("NFC catch error => ", catch_e)
                );

        });
    }

    public decIdToHex(number) {
    //    console.log("decimal",number, typeof number);
        let hex = number.toString(16);
      //  console.log("hexa",hex, typeof hex);

        var prueba="";
        switch (hex.length){
          case 7:
            prueba=  hex[5] + hex[6] + hex[3] + hex[4] + hex[1] + hex[2] + "0" + hex[0];
            break;
          case 8:
            prueba= hex[6] + hex[7] + hex[4] + hex[5] + hex[2] + hex[3] + hex[0] + hex[1];
            break;
          case 9:
            prueba=hex[7] + hex[8] + hex[5] + hex[6] + hex[3] + hex[4] + hex[1] + hex[2] + "0" + hex[0];
          case 6:
            prueba=hex[4] + hex[5] + hex[2] + hex[3] + hex[0] + hex[1]+"0"+"0";
          default:
        }
    //    console.log(prueba);
        return prueba;

    }

    private toHexString(byteArray) {
        return Array.from(byteArray, (byte: any) => {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('')
    }




    public ListenAndWrite(dataToWrite,callback) {
      if(this.Global.Dispositivo=="Emulador"){
          /*
        this.ReadMifareCard((err, dataEvent)=> {
          if (err) {
            this.LoadingService.LoadingNormal(err, 2, _=> {
              this.LoadingService.LoadingNormal("Error de lectura",2)
              this.ListenAndWrite(dataToWrite, callback);
            });
          } else {
            let idCard = dataEvent.Id;
            let data = dataEvent.TagData;
            let originalId = dataToWrite.Id;

            console.log("NEW idCard: ", idCard);
            console.log("OLD idCard: ", originalId);

            if (idCard != originalId) {
              let err = "La tarjeta no corresponde a la lectura inicial";
              this.LoadingService.LoadingNormal(err, 2, _=> {
                this.ListenAndWrite(dataToWrite, callback);
              });
            } else {
              this.WriteCard(dataToWrite,(err)=>{
                if(err==null){
                  callback(null);
                }else{
                  this.LoadingService.LoadingNormal("Error en la escritura de la tarjeta", 2, _=> {
                    this.ListenAndWrite(dataToWrite, callback);
                  });
                }
              });
            }
          }
        });
*/
      }else if(this.Global.Dispositivo=="Tablet"){console.log('Listeninggggggggggg Tablet');
        return Observable.create( observer => {
          this.Listen( () => {console.log('Listeninggggggggggg'); 
          this.Loading.LoadingNormal("Acerque la tarjeta para finalizar la transacción")})
            .subscribe(id => {
              console.log(id);
              this.WriteCardMF(dataToWrite, () => observer.next());

            });
        });
      }

    }


    public WriteCard(datatoWrite,cb){
      console.log(this.Global.Dispositivo);
      switch(this.Global.Dispositivo){
        case"Emulador":
        /*
          this.WriteCardEmulator(datatoWrite,(err,data)=>{
            console.log(err + "+++++++++++++++++++++")
            if(err===null){
              cb(err)
            }else{
              this.ListenAndWrite(datatoWrite,()=>{
              }).subscribe(() => {
                cb(null)
              })
            }
          });
          */
          break;
        case "Tablet":
          this.WriteCardMF(datatoWrite, () => {
            cb(null)
          }, () => {
            this.ListenAndWrite(datatoWrite,()=>{
            }).subscribe(() => {
              cb(null)
            })
          });
          break;
        default:
          break;
      }

    }


    public hexStringToByte(str) {
        let a = [];
        for (let i = 0, len = str.length; i < len; i += 2) {
            a.push(parseInt(str.substr(i, 2), 16));
        }

        return new Array(a);
    }


    public removeTagDiscovery() {
        if (this.tagDiscoveryPromise !== null) {
             // this.nfc.removeTagDiscoveredListener();
            /*  document.removeEventListener("tag",this.listener1,false);
              document.removeEventListener("tag",this.listener2,false);
              this.tagDiscoveryPromise.remove(this.writeReadPromise);*/
            this.tagDiscoveryPromise.unsubscribe();
            this.tagDiscoveryPromise = null;
            this.writeReadPromise = null;

            console.log("TAG IS REMOVED");
        }
    }

    public WriteCardMF(cardData, callback, fail?) {
        console.log("TRYING TO WRITE ",cardData);
        this.nfc.writeMF(JSON.stringify(cardData)).then((data) => {
            console.log("WRITING CARD", cardData);
            this.removeTagDiscovery();
           callback();
        }, () => {
            if (fail != undefined) { fail(); } else {
                this.Loading.LoadingNormal("Error en tarjeta vuelva a intentarlo",2 );

            }
        });
    }

    /**
     * Try login in the card
     * @param nfc
     * @param auth
     * @param callback
     */
    private ReadMF(nfc, auth, callback): void {
        console.log(nfc,auth)
        this.writeReadPromise = nfc.readMF(auth, success => {
            console.log("READ ON MF", success);
            if (success.tag.TagData != "" && success.tag.Id != "" && success.tag.TagData != "Login Fail") {
                callback(success.tag);
            } else if (success.tag.TagData == "Login Fail") {
                this.Loading.HideLoading();
                this.Alert.AlertOneButton("Error Nfc", "Settings de lectura de tarjeta Incorrectos.");
            }
            else {
                this.Loading.LoadingNormal("Lectura incorrecta vuelva a intentarlo", 2);
            }
        }, win => {
            console.log("_loginCard _win {win} => " + JSON.stringify(win, null, 1))
        }, failReason => {
                this.Alert.AlertOneButton("NFC", JSON.stringify(failReason, null, 1));
            }
        )
    }
}
