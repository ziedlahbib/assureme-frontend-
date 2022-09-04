import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pack } from 'app/models/pack.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackServiceService {

  addassuranceUrl="/api/pack/ajout-pack";
  constructor(private http : HttpClient) { }

  ajoutAssurance(assurance :Pack): Observable<Pack>{
    return this.http.post<Pack>(`${this.addassuranceUrl}`,assurance);
  }
}
