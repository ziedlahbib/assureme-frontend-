import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  registartionurlUrl="/api/registration";
  getbyusernameurl="/api/user/get-userbyusername";
  updateuserUrl="/api/user/update-utilisateur";
  constructor(private http : HttpClient) { }
  registration(user :User): Observable<User>{
    return this.http.post<User>(`${this.registartionurlUrl}`,user);
  }
  getuserbyusername(username:String): Observable<User>{
    return this.http.get<User>(`${this.getbyusernameurl}/${username}`);

  }
  updateuser(user:User,id:Number): Observable<User>{
    return this.http.put<User>(`${this.updateuserUrl}/${id}`,user);

  }
}
