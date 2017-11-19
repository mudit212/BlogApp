import { Component, OnInit } from '@angular/core';
import {routes} from "../app.router";
import {Router} from "@angular/router";
@Component({
  selector: 'app-loginavbar',
  templateUrl: './loginavbar.component.html',
  styleUrls: ['./loginavbar.component.css']
})

export class LoginavbarComponent implements OnInit {
  user=JSON.parse(localStorage.getItem('user'));
  blogsname :string[]= ['Space',"Technology","Science","Sports","Food"];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
      localStorage.removeItem('user');
      this.router.navigate(['Home']);
  }
  filterdata(name)
  {
    localStorage.setItem('filter',name);
    location.href='/Filterdata';
    //this.route.navigate(['/Filterdata']);
  }

}
