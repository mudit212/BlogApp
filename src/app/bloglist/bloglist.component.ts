import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist.service";
import {IBlog} from "../blog.interface";
import {UserService} from "../user.service";
import {IUser} from "../user.interface";

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
   blogList:IBlog[];
   blogs:IBlog[]=[];
   name:string;
  // user:IUser[];
  user=JSON.parse(localStorage.getItem('user'))

  constructor(private bloglist:BloglistService,private userlist:UserService) { }
  ngOnInit() {
    this.bloglist.getData()
      .subscribe((data)=> {
           this.blogList = data;
           this.blogList.forEach((item)=>{
             if(item.status==true)
             {
               this.blogs.push(item);
             }
           })
    });
  }
  checklogin()
  {
    const user=JSON.parse(localStorage.getItem('user'));
    if(user!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  favourite(item)
  {
    console.log(item);
    console.log(this.user);
    this.user.favourite.push(item);
    this.userlist.postUserData(this.user).subscribe();
  }
}
