import { Component ,OnInit} from '@angular/core';
import {CryptoServiceService  } from "../../services/crypto-service.service";
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  record =[];
  errorMsg ="No data to display";
  showErrorMsg =false;
  constructor(private service:CryptoServiceService,private loadingController:LoadingController,
    public router: Router, private plt:Platform,public sqlite:SQLite) {
      this.plt.ready().then(() => {
        this.sqlite.create({
          name: 'scheduler.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
            this.database = db;
            this.createTables();
        }); 
    });
  }
  createTables(){
    this.database.executeSql('CREATE TABLE IF NOT EXISTS CryptoData  (id INTEGER PRIMARY KEY, data TEXT, status TEXT)', [])
    .then(() => {
      console.log("CryptoData Table Created successfull");
    })
    .catch(e => console.log(e));


   }

   ngOnInit(){
   this.startProcess(event);
  }
  startProcess(event){
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: "scheduler.db",
        location: "default",
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.service.syncDataFlag.subscribe( _data => {
          if(_data == true){
            this.syncData(true);
            event != undefined ?event.target.complete():'';
          }
            else{
            this.syncData(false);
            event != undefined ?event.target.complete():'';
          }
        });
     
      }).catch((err) => {
        console.log(err);
      });
    
    });
  }
  async syncData(from){
    if(from ==true){
      /*loading Data from local DB  start*/
      const loading = await this.loadingController.create({
        spinner:'dots',
        duration: 5000,
        message: 'Loading data from local DB',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      });
      await loading.present();
      this.database.executeSql("SELECT * FROM CryptoData", []).then((res) => {
        let data = [];
        for(let i=0,len = res.rows.length; i<len; i++) {
          data.push(res.rows.item(i));
        }
        this.record = data.length >0 ?JSON.parse(data[0].data):[];
        this.showErrorMsg = data.length > 0 ? false : true;
        loading.dismiss();
      })
      .catch((e) => {
        console.log(e);
      });
       /*loading Data from local DB  end*/
    }else{
      const loading = await this.loadingController.create({
        spinner:'dots',
        duration: 5000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      });
      await loading.present();
      this.service.getCall("https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20").subscribe((res) => {
      this.record =res.data.length >0?res.data:[];
      this.showErrorMsg = res.data.length > 0 ? false : true;
       /** Delete existing Records */
       this.database.executeSql("delete from CryptoData",[]).then(() => {
        console.log("Data Cleared successfully");
      })
      .catch((e) => {
        console.log(e);
      });
       /** Delete existing Records */
  
        /** Insert new Records */
  
      let insertCacheQuery = "INSERT INTO CryptoData (data, status) VALUES (?,?);";
      this.database.executeSql(insertCacheQuery, [ JSON.stringify(this.record), JSON.stringify(res.status)]).then((resData) => {
        console.log("cacheddata:", resData);
      }).catch((err) => {
        console.log(err);
      });
       /** Insert new Records */
      loading.dismiss();
      },
      (error)=>{
        loading.dismiss();
        alert("No record Found");
      });
    };
  
    

  }
  navigateToDetails(name){
    this.router.navigate(["details",name]);
    var data = this.record.filter((ele)=>{ return ele.name == name;});
    this.service.setCryptoData(data);
  }

}
