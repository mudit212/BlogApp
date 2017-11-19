import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {BloglistService} from "./bloglist.service";
import { BloglistComponent } from './bloglist/bloglist.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {UserService} from "./user.service";
import { LoginavbarComponent } from './loginavbar/loginavbar.component';
import { BasicnavbarComponent } from './basicnavbar/basicnavbar.component'
import {FormsModule} from "@angular/forms";
import { MyblogsComponent } from './myblogs/myblogs.component';
import { FilterdataComponent } from './filterdata/filterdata.component';
import { FavouriteComponent } from './favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    BloglistComponent,
    LoginPageComponent,
    LoginavbarComponent,
    BasicnavbarComponent,
    MyblogsComponent,
    FilterdataComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule
  ],
  providers: [BloglistService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
