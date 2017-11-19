import { Component, OnInit } from '@angular/core';
import {BloglistService} from "../bloglist.service"
import {IBlog} from "../blog.interface";
import {forEach} from "@angular/router/src/utils/collection";
import{routes} from "../app.router"
import{Router} from "@angular/router"
import{NgForm} from "@angular/forms";

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
  blogList :IBlog[];
  blogs:IBlog[]=[];
  user=JSON.parse(localStorage.getItem('user'));
  constructor(private bloglist:BloglistService ,private router:Router) { }

  title1:string='';
  description1:string='';
  tag:string='';

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

  deleteblog(item)
  {
    item.status=false;
    this.bloglist.deleteData(item).subscribe();
   location.reload();
  }

  editblog(id)
  {
    let data={
      'id':id,
      'title':this.title1,
      'content':this.description1,
      'tags':this.tag
    }

    this.bloglist.editData(data).subscribe();
  }
}
