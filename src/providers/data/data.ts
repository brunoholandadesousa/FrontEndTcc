import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise' 

@Injectable()
export class DataProvider {

  constructor(public http: Http) {

  }

  async getRemoteData() {
    //http://localhost:5000/cliente/listarTodos
    let pro = this.http.get('https://ghastly-vampire-21887.herokuapp.com/cliente/listarTodos')
      .map(res => res.json())
      .toPromise();

    let result = await pro
    console.log(result[0]);
    return result[0];
  }  
 












}
