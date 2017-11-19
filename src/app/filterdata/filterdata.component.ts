import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist.service";
import {IBlog} from "../blog.interface";


@Component({
  selector: 'app-filterdata',
  templateUrl: './filterdata.component.html',
  styleUrls: ['./filterdata.component.css']
})
export class FilterdataComponent implements OnInit {
  blogList:IBlog[];
  blogs:IBlog[]=[];

  tag=localStorage.getItem('filter');

  constructor(private bloglist:BloglistService ) { }

  ngOnInit() {

    this.bloglist.filterData(this.tag).subscribe((data)=> {

      this.blogList = data;
      this.blogList.forEach((item)=>{
        console.log(item);
        if(item.status==true)
        {
          this.blogs.push(item);
        }
      })
      console.log(this.blogs);
    })
  }


}
