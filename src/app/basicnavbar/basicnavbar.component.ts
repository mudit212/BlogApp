import { Component, OnInit,Input } from '@angular/core';
import{Router} from "@angular/router";

@Component({
  selector: 'app-basicnavbar',
  templateUrl: './basicnavbar.component.html',
  styleUrls: ['./basicnavbar.component.css']
})
export class BasicnavbarComponent implements OnInit {
  blogsname :string[]= ['Space',"Technology","Science","Sports","Food"];

  constructor(private route:Router) { }

  ngOnInit() {

  }

  filterdata(name)
  {
    localStorage.setItem('filter',name);
    location.href='/Filterdata';
    //this.route.navigate(['/Filterdata']);
  }

}
