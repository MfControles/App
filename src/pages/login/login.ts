import { SettingsPage } from './../settings/settings';
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
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public Auth:any;
  key;
  public idconexion:any;
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
    public viewCtrl: ViewController,) {
      this.Auth={
        User:'',
        Password:''
      }
      this.storage.get('IP').then((val) => {
        if(val==''||val==' '||val==null){
          
        }else{
          this.global.Url=val;
        }
        console.log('Url',val)
      });
      this.storage.get('Usuario').then((val) => {
        if(val==''||val==' '||val==null){
          
        }else{
          this.Auth.User=val;
        }
        console.log('User',val)
      });
      this.storage.get('Contraseña').then((val) => {
        if(val==''||val==' '||val==null){
          
        }else{
          this.Auth.Password=val;
        }
        console.log('Pass',val)
      });
    this.menuCtrl.enable(false, 'leftMenu');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.Loading.HideLoading();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.key = event.key;
    console.log(this.key)
    if(this.key=='Enter'){
      this.Login();
    }
  }

  public Login(){
    if(this.global.Url==''||this.global.Url==' '||this.global.Url==null||this.global.Url==undefined){
      this.Loading.LoadingNormal("Dirigase al Boton de Ajustes para configurar la Url del servidor",4);
    }else{
      if(this.Auth.Password!="" && this.Auth.User!=""){
        this.Loading.LoadingNormal("Autenticando");
        let data={
            idConnection: 1,
            userName: this.Auth.User,
            password:this.Auth.Password
          };
          this.Post.Login(data,(err,data)=>{
            console.log(data) ;
            if(err==null){
              if(data.status==1){
                if(data.message==this.global.RestDefinitions.Success){
                  this.global.Auth.User=this.Auth.User;
                  this.global.Auth.Password=this.Auth.Password;
                  this.storage.set('Usuario',this.Auth.User);
                  this.storage.set('Contraseña',this.Auth.Password);
                  this.Loading.LoadingNormal("Autenticacion Exitosa",2);
                  this.global.IsLoggin=true;
                  this.navCtrl.push(HomePage);
                }else{
                  this.Loading.LoadingNormal("Error en la Autenticacion",2)
                }
              }else{
                if(data.message==900){
                  this.Loading.LoadingNormal("Contraseña Incorrecta",2)
                  console.error('Contraseña Incorrecta');
                }else if(data.message==700){
                  this.Loading.LoadingNormal("Usuario No Existe",2)
                  console.error('Usuario No Existe');
                }else{
                  this.Loading.LoadingNormal("Error de Conexion",2)
                }
              }
            }else{
              this.Loading.HideLoading();
              this.Alert.AlertOnebutton('Error',JSON.stringify(err.message));
            }
          })
       }else{
        this.Loading.LoadingNormal("Error se encuentran campos vacios",2);
      }
    }
    

    

  }



  Pushhh(){
    this.navCtrl.push(HomePage);
  }
  Settings(){
    this.navCtrl.push(SettingsPage);
  }
}
