import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
const URL='http://localhost:3000/blogs';
const Url_filter="http://localhost:3000/blogs?tags=";

const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class BloglistService {

  constructor(private http : Http) { }

  getData() {
    return this.http.get(URL)
      .map(res => res.json())
  }

  deleteData(data){
    return this.http.patch(URL+'/'+data.id,data,header);
  }

  createData(data)
  {
    return this.http.post(URL,data,header);
  }

  editData(data)
  {
      return this.http.patch(URL+'/'+data.id,data,header);
  }

  filterData(data)
  {
      return this.http.get(Url_filter+data)
        .map(res=>res.json());
  }


}
