import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AddUser } from './../models/addUser';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddUserService {

  // private uri = 'https://wildseve-node.appspot.com/';
  //private uri = 'http://192.168.0.128/';
  //private uri = './assets/dbjson.json';
  private uri = 'http://192.168.0.128/';


  constructor(private http: HttpClient) {
  }


  createUser(Firstname, LastName, UserName,RoleName)
  {
    const add_user  = {
      Firstname: Firstname,
      LastName: LastName,
      UserName: UserName,
      RoleName: RoleName
      
     // roleid: roleid
    };
      return this.http.post(this.uri + 'createuser', add_user);

  }


  // updateUser(firstname, lastname, username, phone, email, password)
  // {
  //   const update_user  = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     username: username,
  //     phone: phone,
  //     email: email,
  //     password: password,
  //   };
  //     return this.http.post(this.uri + 'updateuser', update_user);
  // }

  getUser(): Observable<any> {
    return this.http.get(this.uri + 'api/UserTbls/GetUserTbls');
  }

  deleteUser(id): Observable<any> {
    return this.http.get(this.uri + `deleteuser/${id}`);
  }

}
