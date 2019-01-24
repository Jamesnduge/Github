import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private Username: string;
  private clientid = '6e460ad9e44b7780d3cc';
  private clientsecret ='228c72c655c0cc54fc521b2fe0fba9b5873259f1';

  constructor(private http:Http) {
    console.log("service ready")
    this.username = "Jamesnduge";
  }
  getInfo(){
    return this.http.get("Https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res=> res.json());
  }

}
