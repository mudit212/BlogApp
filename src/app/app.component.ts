import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     constructor(){
     }

   checklogin()
   {
     let user=JSON.parse(localStorage.getItem('user'));
     if(user!=null)
     {

       return true;

     }
     else
     {

       return false;
     }
   }

}
