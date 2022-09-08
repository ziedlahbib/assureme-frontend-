import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileDB } from 'app/models/file-db.model';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  registartionurlUrl="/api/registration";
  getbyusernameurl="/api/user/get-userbyusername";
  updateuserUrl="/api/user/update-utilisateur";
  ajoutuserUrl="/api/user/inscription";
  uploadfilef="/api/File/uploadf";
  getfiledetail="/api/File/filesdetail";
  getusersUrl="/api/user/get-users";
  getuserbyidUrl="/api/user/get-user"
  constructor(private http : HttpClient) { }
  registration(user :User): Observable<User>{
    return this.http.post<User>(`${this.registartionurlUrl}`,user);
  }
  ajoutuser(user :User): Observable<User>{
    return this.http.post<User>(`${this.ajoutuserUrl}`,user);
  }
  getuserbyusername(username:String): Observable<User>{
    return this.http.get<User>(`${this.getbyusernameurl}/${username}`);

  }
  getuserbyid(id:Number): Observable<User>{
    return this.http.get<User>(`${this.getuserbyidUrl}/${id}`);

  }
  updateuser(user:User,id:Number): Observable<User>{
    return this.http.put<User>(`${this.updateuserUrl}/${id}`,user);

  }
 // /*
  upload(file :File): Observable<Number>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Number>(`${this.uploadfilef}`,formData,{
      headers : { 'Content-Type':'multipart/form-data' },
    });
  }
 //*/
  /*
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.uploadfilef}`, formData, {
      //headers : new HttpHeaders({ 'Content-Type':'multipart/form-data' }),
      reportProgress: true,
      responseType: 'json'
    },);
   
    return this.http.request(req);   
  }
*/
  /*
    upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.uploadfilef}`, formData, {
      headers:headers ,
      reportProgress: true,
      responseType: 'json',
     
    },);
   
    return this.http.request(req);   
  }
   */
  getFilesdetail(id:Number): Observable<FileDB> {
    return this.http.get<FileDB>(`${this.getfiledetail}/${id}`);
  }
  affecterfileauuser(id:Number,idf:Number,user :User):Observable<User>{
    return this.http.put<User>("api\\user\\affecter-file-utilisateur\\"+id+"\\"+idf,user);
  }
  getuser():Observable<User[]>{
    return this.http.get<User[]>(`${this.getusersUrl}`);
  }
}
