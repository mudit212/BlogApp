import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginavbarComponent} from "./loginavbar/loginavbar.component"

import { AddBlogComponent } from './add-blog/add-blog.component';
import {BloglistComponent} from "./bloglist/bloglist.component"
import {MyblogsComponent} from "./myblogs/myblogs.component";
import{FilterdataComponent} from "./filterdata/filterdata.component";
import {FavouriteComponent} from "./favourite/favourite.component"
export const router:Routes=[
  {path:'Home',component:BloglistComponent},
  {path:'App',component:AppComponent},
  {path:'Add',component:AddBlogComponent},
  {path:'Login',component:LoginPageComponent},
  {path:'AfterLogin',component:LoginavbarComponent},
  {path:'*',redirectTo:'all',pathMatch:'full'},
  {path:'Myblogs',component:MyblogsComponent},
  {path:'Filterdata',component:FilterdataComponent},
  {path:'Favourite',component:FavouriteComponent}
]


export const routes:ModuleWithProviders=RouterModule.forRoot(router);
