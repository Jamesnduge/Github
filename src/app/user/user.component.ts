import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GithubService } from '../github.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile:any;
  username:string;
  repo: any;

  constructor(private githubService: GithubService) {
    }

  getProfiles(){
    this.githubService.searchUser(this.username);
    this.githubService.getInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.githubService.getRepo().subscribe(repo => {
      console.log(repo);
      this.repo = repo;
    });
  }
  ngOnInit() {
  }

}
