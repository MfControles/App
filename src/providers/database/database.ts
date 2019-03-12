import { HttpComunicationProvider } from './../http-comunication/http-comunication';
import { Injectable ,HostListener } from '@angular/core';
import { GlobalProvider } from '../global/global';

@Injectable()
export class DatabaseProvider {
  public query:any;
  constructor(public Post:HttpComunicationProvider,public Global:GlobalProvider) {
    console.log('Hello DatabaseProvider Provider');
  }


  public GetCompany(cb:Function){
    console.log("Get Company");
    let Option={
    Option:'Select',
    Name:null
    ,OID:null
    ,Address:null
    ,Phone:null
    ,Email:null
    ,Note:null
    ,Id_Country:null
    ,Id_City:null
    ,IsDelete:null
  };
    this.Post.Company(Option,(err,data)=>{
      if(err==null){
        console.log(data.data)
        console.log("Compañias",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data)[0])
      }else{
        console.log(err);
        cb(err)
      }
    })
  }
  public SetCompany(obj,cb:Function){
    console.log("Set Company")
    this.Post.Company(obj,(err,data)=>{
      if(err==null){
        console.log(data.data);
        console.log("Compañias",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data)[0])
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetSites(cb:Function){
    console.log("Get Sites")
    let Option={
      Option:'Select',
      Name:null
      ,Id_Company:null
      ,Address:null
      ,Phone:null
      ,Email:null
      ,Note:null
      ,Id_Country:null
      ,Id_City:null
      ,IsDelete:null,
      Id_Site:null
    };
      this.Post.Sites(Option,(err,data)=>{
        if(err==null){
          console.log(data.data);
          console.log("Sitios",JSON.stringify(data.data))
          cb(null,JSON.parse(data.data))
        }else{
          console.log(err); 
          cb(err)
        }
      })
  }
  public GetAgreementatri(ID,cb:Function){
    console.log("Get Sites")
    let Option={
      Option:'SelectAgreementsAttribute',
      Id_Agreement:ID,
    };
      this.Post.Agreement(Option,(err,data)=>{
        if(err==null){
          console.log(data.data);
          console.log("Sitios",JSON.stringify(data.data))
          cb(null,JSON.parse(data.data))
        }else{
          console.log(err); 
          cb(err)
        }
      })
  }
  public GetAtributes(cb:Function){
    console.log("Get Atributes")
    let Option={
      Option:'SelectAgreementsAttributeAll',
    };
      this.Post.Agreement(Option,(err,data)=>{
        if(err==null){
          console.log(data.data);
          console.log("Atributes",JSON.stringify(data.data))
          cb(null,JSON.parse(data.data))
        }else{
          console.log(err); 
          cb(err)
        }
      })
  }
  public SetSite(obj,cb:Function){
    console.log("Set Site")
    this.Post.Sites(obj,(err,data)=>{
      if(err==null){
        console.log(data.data)
        console.log("SitiosT",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetRelation(obj,cb:Function){
    console.log("Set Relation")
    this.Post.Agreement(obj,(err,data)=>{
      if(err==null){
        console.log(data.data)
        console.log("SitiosT",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetAtribute(obj,cb:Function){
    console.log("Set Atribute")
    this.Post.Agreement(obj,(err,data)=>{
      if(err==null){
        console.log(data.data)
        console.log("Atribute",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetAgreement(obj,cb:Function){
    console.log("Set Agreement")
    this.Post.Agreement(obj,(err,data)=>{
      if(err==null){
        console.log(data.data)
        console.log("Agreement: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  
  public GetCountry(cb:Function){
    console.log("Get Country")
    let Option={
      Options:'Country',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Paises",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetCity(cb:Function){
    console.log("Get City")
    let Option={
      Options:'City',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Ciudades: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetNFCSettings(cb:Function){
    console.log("Get NFCSettings")
    let Option={
      Options:'FirstCompanySettings',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("NFCSettings: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public GetPeopleGroup(cb:Function){
    console.log("Get People Group")
    let Option={
      Options:'PeopleGroup',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Groups: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetGroupToken(cb:Function){
    console.log("Get Group Token")
    let Option={
      Options:'GroupToken',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Empresa: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetProfile(cb:Function){
    console.log("Get Profile")
    let Option={
      Options:'Profile',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Perfiles: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetAgreementType(cb:Function){
    console.log("Get AgreementType")
    let Option={
      Options:'AgreementType',
    }
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("AgreementType: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetZones(Id_site,cb:Function){
    console.log("Get Zones")
    let Option={
      Option:'Select',
      Name:null
      ,Description:null
      ,Id_Zone:null
      ,IsDelete:null,
      Id_Site:Id_site
    };
    this.Post.Zone(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Zonas",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetZones(Option,cb:Function){
    console.log("Set Zones")
    this.Post.Zone(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Zonas",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetEnterprice(Option,cb:Function){
    console.log("Set Enterprice")
    this.Post.Enterprice(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Enterprice",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public SetPerfiles(Option,cb:Function){
    console.log("Set Perfiles")
    this.Post.Profile(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Perfiles",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetRules(Option,cb:Function){
    console.log("Set Rules")
    this.Post.ProfileRules(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("RUles",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetPerfilesRules(Option,cb:Function){
    console.log("Set Perfiles Rules")
    this.Post.ProfileRules(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Perfiles Rules",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  
  public GetTarifas(Id_site,cb:Function){
    console.log("Get Rate")
    let Option={
      Option:'Select',
      Id_Site:Id_site
};
    this.Post.Rate(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Tarifas: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetAgreement(Id_site,cb:Function){
    console.log("Get Agreement")
    let Option={
      Option:'Select',
      Id_Site:Id_site
};
    this.Post.Agreement(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Tarifas: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetAgreement2(cb:Function){
    console.log("Get Agreement2")
    let Option={
      Option:'Select2',
};
    this.Post.Agreement(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Agreement: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetTokens(cb:Function){
    console.log("Get Tokens")
    let Option={
      Option:'Select',
};
    this.Post.Token(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Token: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetRate(Option,cb:Function){
    console.log("Set Rate")
    this.Post.Rate(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Tarifas",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  
  public DescargarTarjeta(Option,cb:Function){
    console.log("DescargarTarjeta")
    this.Post.ReadCard(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Tarjeta",JSON.stringify(data.data))
        cb(null,data.data)
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetRateType(cb:Function){
    console.log("Get RateType")
    let Option={
      Options:'RateType',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("RateTypes: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetTokenNull(cb:Function){
    console.log("Get TokenNull")
    let Option={
      Options:'TokenNull',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("TokenNull: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }



  public GetTokenType(cb:Function){
    console.log("Get TokenType")
    let Option={
      Options:'TokenType',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("TokenTypes: ",JSON.stringify(data.data))
         cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public GetSiteGroup(cb:Function){
    console.log("SiteGroup")
    let Option={
      Options:'Site',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("SiteGroup: ",JSON.stringify(data.data));
                cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetRateGroup(cb:Function){
    console.log("RateGroup")
    let Option={
      Options:'Rate',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("RateGroup: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetAgreementGroup(cb:Function){
    console.log("AgreementGroup")
    let Option={
      Options:'Agreement',
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("AgreementGroup: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetGroupAndPlacePeople(Id_P,cb:Function){
    console.log("Get GroupAndPlacePeople")
    let Option={
      Option:'SelectGroupAndPlace',
      Id_People:Id_P,
    };
    this.Post.People(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlacePeople: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetGroupAndPlace(cb:Function){
    console.log("Get GroupAndPlace")
    let Option={
      Option:'Select'
    };
    this.Post.GroupsAndPlaces(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlace: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetEnterprice(cb:Function){
    console.log("Get Enterprice")
    let Option={
      Option:'Select'
    };
    this.Post.Enterprice(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Enterprice: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetProfiles(cb:Function){
    console.log("Get Profiles")
    let Option={
      Option:'Select'
    };
    this.Post.Profile(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("Profiles: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetGroupAndPlacePeopleNull(cb:Function){
    console.log("Get GroupAndPlacePeopleNull")
    let Option={
      Option:'Relation'
    };
    this.Post.GroupsAndPlaces(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlacePeopleNull: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public GetGroupAndPlacePeopleData(Id,cb:Function){
    console.log("Get GroupAndPlacePeopleData")
    let Option={
      Option:'SelectRelation'
      ,Id_GroupsAndPlaces:Id
    };
    this.Post.GroupsAndPlaces(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlacePeopleData: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public SetGroupAndPlacePeople(Option,cb:Function){
    console.log("Get GroupAndPlacePeopleNull")
    this.Post.GroupsAndPlaces(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlacePeopleNull: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetGroupAndPlace(Option,cb:Function){
    console.log("Get GroupAndPlace")
        this.Post.GroupsAndPlaces(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data)
        console.log("GroupAndPlace: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetTax(cb:Function){
    console.log("Get Tax")
    this.query="SELECT [Id_Tax],[Id_Site],(SELECT [Name] FROM [dbo].[Tb_Site] a where a.Id_Site=b.Id_Site) as Sitio,[TaxName],[Value] FROM [dbo].[Tb_Tax] b"
    this.Post.Prueba(this.query,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Impuestos: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetTaxDetail(Id_Tax,cb:Function){
    console.log("Get Tax Detail")

    this.query="SELECT [Id_RateTax],[Id_Rate],(SELECT [RateName] FROM [dbo].[Tb_Rate] a where a.Id_Rate=b.Id_Rate) as RateName,[Id_Tax],(SELECT [TaxName] FROM [dbo].[Tb_Tax] c where c.Id_Tax=b.Id_Tax) as TaxName FROM [dbo].[Tb_RateTax] b where Id_Tax="+Id_Tax

    this.Post.Prueba(this.query,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Detalle Impuestos: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetRateDetail(Id_Rate,cb:Function){
    console.log("Get Rate Detail")

    this.query="SELECT [Id_RateTax],[Id_Rate],(SELECT [RateName] FROM [dbo].[Tb_Rate] a where a.Id_Rate=b.Id_Rate) as RateName,[Id_Tax],(SELECT [TaxName] FROM [dbo].[Tb_Tax] c where c.Id_Tax=b.Id_Tax) as TaxName FROM [dbo].[Tb_RateTax] b where Id_Rate="+Id_Rate

    this.Post.Prueba(this.query,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Detalle Tarifas: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetRuleDetail(Id_Rate,cb:Function){
    console.log("Get Rule Detail")

    this.query="SELECT [Id_RateTax],[Id_Rate],(SELECT [RateName] FROM [dbo].[Tb_Rate] a where a.Id_Rate=b.Id_Rate) as RateName,[Id_Tax],(SELECT [TaxName] FROM [dbo].[Tb_Tax] c where c.Id_Tax=b.Id_Tax) as TaxName FROM [dbo].[Tb_RateTax] b where Id_Rate="+Id_Rate

    this.Post.Prueba(this.query,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Detalle Reglas: ",JSON.stringify(data.data))
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetPeople(cb:Function){
    console.log("Get People")

     let Option={
      Option:'Select',
    };
    this.Post.People(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Personas: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetHistory(Token,cb:Function){
    console.log("Get History")
     let Option={
      Option:'History',
      Token:Token
    };
    this.Post.ReadCard(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("History: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public SetPeople(Option,cb:Function){
    console.log("Get People")
 
    this.Post.People(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Personas: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

public AsociateToken(Option,cb:Function){
    console.log("AsociateToken")
    this.Post.Token(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("AsociateToken: ",JSON.stringify(data.data))
        if(data.data=='Token ya Asociado'){
          console.log('Ya esta asociado no chingue')
          cb(err,data.data)
        }else{
          console.log('NO esta asociado no chingue')
          cb(null,JSON.parse(data.data))
        }
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public DeleteToken(Option,cb:Function){
    console.log("DeleteToken")

    this.Post.Token(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Token: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }


  public GetPeopleToken(Id_P,cb:Function){
    console.log("Get People")

     let Option={
      Option:'SelectToken',
      Id_People:Id_P
    };
    this.Post.People(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Token: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetPeopleType(cb:Function){
    console.log("Get PeopleType")

     let Option={
      Options:'PeopleType'
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("PeopleType: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }

  public GetZoneOpt(cb:Function){
    console.log("Get Zone")
     let Option={
      Options:'Zone'
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Zones: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
  public GetReglas(cb:Function){
    console.log("Get Zone")
     let Option={
      Options:'ProfileRules'
    };
    this.Post.Optionality(Option,(err,data)=>{
      if(err==null){  
        console.log(data.data);
        console.log("Zones: ",JSON.stringify(data.data));
        cb(null,JSON.parse(data.data))
      }else{
        console.log(err); 
        cb(err)
      }
    })
  }
}
