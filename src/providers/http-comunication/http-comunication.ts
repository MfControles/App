import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable ,HostListener } from '@angular/core';
import {GlobalProvider} from "../global/global";
import { Storage } from '@ionic/storage';

@Injectable()
export class HttpComunicationProvider {
  public cmd:any;
  public message:any;
  public ControllersAPI:any;
  Url;
  constructor(public http: HttpClient,public Global:GlobalProvider,
    private storage: Storage) {
    this.storage.get('IP').then((val) => {
      if(val==''||val==' '||val==null){
        
      }else{
        this.Url=val;
      }
      this.ControllersAPI={
        Login:val+"/LoginController",
        UpdateIdConection:val+"/UpdateUserController",
        Prueba:val+"/Prueba",
        Company:val+"/Company",
        Sites:val+"/Sites",
        Zone:val+"/Zone",
        Rate:val+"/Rate",
        People:val+"/People",
        Token:val+"/Token",
        GroupsAndPlaces:val+"/GroupsAndPlaces",
        Enterprice:val+"/Enterprice",
        Optionality:val+"/Optionality",
        Profile:val+"/Profile",
        ProfileRules:val+"/ProfileRules",
        Agreement:val+"/Agreement",
        ReadCard:val+"/ReadCard"
      }
    });
    console.log('Hello HttpComunicationProvider Provider');
    
   
  }
      Login(data,callback){
        this.http.post(this.ControllersAPI.Login,data).subscribe(res => {
          callback(null,res)
        },(err) => {
          callback(err)
        });
      }

      UpdateIdConecction(data,callback){
        this.http.post(this.ControllersAPI.UpdateIdConection,data).subscribe(res => {
          callback(null,res)
        },(err) => {
          callback(err)
        });
      }

      Prueba(Query,callback){
        let data={
          Query: Query,
          };
        this.http.post(this.ControllersAPI.Prueba,data).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      Company(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Company,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      Sites(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Sites,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      Zone(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Zone,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      Optionality(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos)
        this.http.post(this.ControllersAPI.Optionality,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      
      Rate(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Rate,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      People(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.People,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      Token(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Token,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      GroupsAndPlaces(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.GroupsAndPlaces,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      Enterprice(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Enterprice,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
                },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      Profile(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Profile,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
      ProfileRules(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.ProfileRules,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      Agreement(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.Agreement,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }

      ReadCard(datos,callback){
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(headers)
        console.log(datos);
        this.http.post(this.ControllersAPI.ReadCard,datos,{headers:headers}).subscribe(res => {
          callback(null,res)
          console.log(res);
        },(err) => {
          callback(err)
          console.error(err); 
        });
      }
}
