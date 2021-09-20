import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs';
import { NetworkService, ConnectionStatus } from '../app/services/network.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  constructor(private http:Http) { }

  private syncDataSubject = new BehaviorSubject(false);
  syncDataFlag = this.syncDataSubject.asObservable();
  setSyncDataFlag(_val){
    this.syncDataSubject.next(_val);
  }



  getCall(url?) {
    let headers = new Headers(),
      _url;
    headers.append("Content-Type", "application/json,text/plain, */*");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Origin", "*");
    headers.append("Access-Control-Allow-Credentials","true");
    headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    headers.append("X-CMC_PRO_API_KEY", "aecb3c1d-c059-44b4-8366-5842fb6db263");
     _url = url;
    return this.http.get(_url, { headers: headers }).pipe(map((res) => { return res.json(); }));
  }
 /* Setter & Getter for cryptoData*/
 cryptoData: any;

 setCryptoData(_data) {
   this.cryptoData = _data;
 }
 getCryptoData() {
   return this.cryptoData;
 }
 /* Setter & Getter cryptoData Ends*/



}
