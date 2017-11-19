import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist.service"
import{IBlog} from "../blog.interface";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  blogList:IBlog[];
  user=JSON.parse(localStorage.getItem('user'));

  constructor(private bloglist:BloglistService) { }

  ngOnInit() {
    // this.bloglist.getData()
    //   .subscribe((data)=> {
    //     this.blogList = data;
    //     this.blogList.forEach((item)=>{
    //       if(item.status==true)
    //       {
    //         this.blogs.push(item);
    //       }
    //     })
    //   });
    console.log(this.user);
  }

}
