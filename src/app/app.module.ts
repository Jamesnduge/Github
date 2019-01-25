import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//import { AppRoutingModule, routingComponents } from './app-routing.module'

import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    //routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
