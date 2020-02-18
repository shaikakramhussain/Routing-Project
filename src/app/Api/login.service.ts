import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  loginPost(req){
    this.http.post("http://192.168.1.55:3055/api/admin/login",req);
  }
  registerPost(req:any){
    this.http.post("http://192.168.1.55:3055/api/admin/register",req);
  }
}
