import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private urlGetUsersList = 'http://localhost:3000/users/list';
  private urlUsersCreate = 'http://localhost:3000/users/create';
  private urlDeleteUsers = "http://localhost:3000/users/delete/";
  private urlUpdateUsers = "http://localhost:3000/users/update/";
  private urlUpdateUsers2;


  private httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

  constructor( private  httpClient: HttpClient) { }

  getUsersList(): Observable<any>{
 
    return this.httpClient.get(this.urlGetUsersList, this.httpOptions);
  }
  createUserItem(user):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlUsersCreate,user,{headers:headers})
     }
  deleteUser(id){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.urlDeleteUsers+id, {headers:headers});
  }
  setUserItemSelected(user):Observable<any>{
    const headers = new HttpHeaders;
    headers.set('Content-Type','application/json');
    this.urlUpdateUsers2=this.urlUpdateUsers + user.newData.id;
    console.log(this.urlUpdateUsers2);
    console.log(user.newData);
    return this.httpClient.patch(this.urlUpdateUsers2,user.newData, {headers:headers});
  }
}
