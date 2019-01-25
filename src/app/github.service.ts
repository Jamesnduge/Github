import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private clientid = '6e460ad9e44b7780d3cc';
  private clientsecret ='228c72c655c0cc54fc521b2fe0fba9b5873259f1';

  constructor(private http : HttpClient) {
    console.log("service ready");
    this.username = "Jamesnduge";
  }
    getInfo(){
      return (this.http.get("Https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .pipe(map(res=> res)));
    }
    getRepo(){
      return (this.http.get("Https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .pipe(map(res=> res)));
    }
    searchUser(username: string){
      this.username = username;
    }
   OnInit(){
     
   }

}
