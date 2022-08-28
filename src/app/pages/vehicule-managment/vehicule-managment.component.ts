import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alimentation } from 'app/models/alimentation';
import { Carosserie } from 'app/models/carosserie';
import { Marque } from 'app/models/marque';
import { Modele } from 'app/models/modele';
import { Puissance } from 'app/models/puissance';
import { User } from 'app/models/user.model';
import { Vehicule } from 'app/models/vehicule.model';
import { UserServiceService } from 'app/service/user-service.service';
import { VehiculeServiceService } from 'app/service/vehicule-service.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
///////////////////////////////////::
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-vehicule-managment',
  templateUrl: './vehicule-managment.component.html',
  styleUrls: ['./vehicule-managment.component.scss']
})
export class VehiculeManagmentComponent implements OnInit {

  public vehiculeform: FormGroup;
  listofvehicule:Vehicule[];
  vehicule:Vehicule;
  user:User;
  username:String;
  marque= Marque;
  modele =Modele;
  carosserie=Carosserie;
  puissance= Puissance;
  alimentation= Alimentation;
  counters = [100, 200, 10];
  displayedColumns = ['date_achat','date_mise_cir', 'marque', 'modele', 'carosserie', 'alimentation', 'puissance'];
  dataSource: MatTableDataSource<Vehicule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private us:UserServiceService,private vs:VehiculeServiceService,private formBuilder: FormBuilder,private router:Router,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.initForm()
    console.log(sessionStorage)
    this.username=sessionStorage.authenticatedUser;
    console.log(this.username)
    this.us.getuserbyusername(this.username).subscribe(
      data=>{
          this.user=data;
          console.log(data)
          this.vs.getvehiculesbyuser(data.userId).subscribe(
            res=>{
              console.log(res)
              this.listofvehicule=res;
              this.dataSource = new MatTableDataSource(res);
              this.dataSource._renderChangesSubscription;
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
           )
        
      }
   )
  
  }
  initForm() {
    this.vehiculeform = this.formBuilder.group({
      date_achat: ['', Validators.required],
      date_mise_cir: ['', Validators.required],
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      carosserie: ['', Validators.required],
      puissance: ['', Validators.required],
      alimentation: ['', Validators.required],

      
  });

  this.vehiculeform.valueChanges.subscribe(
    data=>{console.log(this.vehiculeform)}
  )
}
ajouter(){
  console.log(this.vehiculeform.value);
  this.vs.ajoutvehicule(this.vehiculeform.value,this.user.userId).subscribe(
  data=>{
    console.log('ssss',data)
    this.vehicule=data; 
    this.toastr.success('vehicule added Successfully ','vehicule added Successfully');
    let audio = new Audio()
    audio.src= "../assets/alert.mp3"
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
    this.vs.getvehiculesbyuser(this.user.userId).subscribe(
      res=>{
        this.listofvehicule=res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  } 
  );  
}
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}
