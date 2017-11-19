import { Injectable } from '@angular/core';
import{Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const URL='http://localhost:3000/user';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getUserData() {
    return this.http.get(URL)
      .map(res => res.json())
  }

  postUserData(data)
  {
    return this.http.patch(URL+'/'+data.id,data,header);
  }
}
