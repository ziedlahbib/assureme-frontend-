import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  registartionurlUrl="http://localhost:8081/registration";
  getbyusernameurl="/api/user/get-userbyusername";
  constructor(private http : HttpClient) { }
  registration(user :User): Observable<User>{
    return this.http.post<User>(`${this.registartionurlUrl}`,user);
  }
  getuserbyusername(username:String): Observable<User>{
    return this.http.get<User>(`${this.getbyusernameurl}/${username}`);

  }
}
