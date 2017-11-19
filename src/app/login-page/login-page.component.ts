import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../user.interface";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  users: IUser[];

  constructor(private user: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user.getUserData()
      .subscribe((data) => {
        this.users = data;
        console.log(data);
      })
  }

  OnLogin(name, pwd) {
    let user = this.users.find(x => x.username == name && x.password == pwd);
    if(user)
    {
      this.OnStore(user);
    }
    else
    {
      alert('failure');
      console.log("failure");

    }
  }

  OnStore(user)
  {
    localStorage.setItem('user', JSON.stringify(user));
    location.href='/Home';
  }
}
