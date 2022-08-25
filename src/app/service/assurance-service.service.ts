import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assurance } from 'app/models/assurance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssuranceServiceService {

  assuranceUrl="/api/Assurance/get-assurance";
  addassuranceUrl="/api/Assurance/ajout-asssurance";
  deleteassurancesUrl="/api/Assurance/delete-assurance";
  getAssuranceurl="/api/Assurance/get-assu";
  updateassurancepsUrl="/api/Assurance/update-assurance";

  constructor(private http : HttpClient) { }

  getAssurances() : Observable<Assurance[]> {
    return this.http.get<Assurance[]>(this.assuranceUrl);
    }
 ajoutAssurance(assurance :Assurance): Observable<Assurance>{
      return this.http.post<Assurance>(`${this.addassuranceUrl}`,assurance);
    }
    deleteassurance(id:number): any{
      return this.http.delete(`${this.deleteassurancesUrl}/${id}`);
    }
    getAssurance(id:number): Observable<Assurance>{
      return this.http.get<Assurance>(`${this.getAssuranceurl}/${id}`);
  
    }
  updateassurance(id:Number,assurance:Assurance): Observable<Assurance>{
    return this.http.put<Assurance>(`${this.updateassurancepsUrl}/${id}`,assurance);
  }
}
