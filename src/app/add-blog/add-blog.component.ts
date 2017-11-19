import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from "../app.component";
import {BloglistService} from "../bloglist.service";
import {IBlog} from "../blog.interface";
import {Router} from '@angular/router';
import{routes} from "../app.router";

const user=JSON.parse(localStorage.getItem('user'));
let today=new Date();

@Component({
  selector: 'add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit {
   blog:{};
  constructor(private app : AppComponent,private request:BloglistService,private route:Router) { }

  ngOnInit() {

  }

  addBlog(title,description,tag)
  {
    this.blog={
        'title':title,
        'status':true,
        'content':description,
        'tags':tag,
        'userName':user.username,
        'authorName':user.name,
        'createdOn':today.getDate()+'/'+(today.getMonth()+1) +'/'+today.getFullYear()
    };

    this.request.createData(this.blog).subscribe();
    location.reload();
    this.route.navigate(['Myblogs']);
  }
}
