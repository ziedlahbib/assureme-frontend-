import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from 'app/models/vehicule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

  addvehiculeUrl="/api/vehicule/ajout-vehicule";
  vehiculebyuserurl="/api/vehicule/get-vehculeByUser";

  constructor(private http : HttpClient) { }
  ajoutvehicule(vehicule :Vehicule,id:Number): Observable<Vehicule>{
    return this.http.post<Vehicule>(`${this.addvehiculeUrl}/${id}`,vehicule);

  }
  getvehiculesbyuser(id:Number) :Observable<any> {
    return this.http.get(`${this.vehiculebyuserurl}/${id}`);
    }
    affectvehiculeassurance(ida:Number,idv :Number,vehicule :Vehicule): Observable<Vehicule>{
      return this.http.put<Vehicule>("/api/vehicule/affecter-vehicule-assurance/"+ida+"/"+idv,vehicule);
    }
    desaffectvehiculeassurance(idv:Number,vehicule :Vehicule): Observable<Vehicule>{
      return this.http.put<Vehicule>("/api/vehicule/desaaffecter-vehicule-assurance/"+idv,vehicule);
    }
}
