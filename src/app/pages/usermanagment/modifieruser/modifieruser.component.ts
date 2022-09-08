import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentation } from 'app/models/alimentation';
import { Carosserie } from 'app/models/carosserie';
import { FileDB } from 'app/models/file-db.model';
import { Marque } from 'app/models/marque';
import { Modele } from 'app/models/modele';
import { Pack } from 'app/models/pack.model';
import { Puissance } from 'app/models/puissance';
import { User } from 'app/models/user.model';
import { Vehicule } from 'app/models/vehicule.model';
import { AssuranceServiceService } from 'app/service/assurance-service.service';
import { PackServiceService } from 'app/service/pack-service.service';
import { UserServiceService } from 'app/service/user-service.service';
import { VehiculeServiceService } from 'app/service/vehicule-service.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
////////////////////////////
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.scss']
})
export class ModifieruserComponent implements OnInit,AfterContentInit {

  user:User;
  public userform: FormGroup;
  public assuranceform: FormGroup;
  public vehiculeform: FormGroup;
  prix:Number;
  assurance:Pack;
  vehicule:Vehicule;
  marque= Marque;
  modele =Modele;
  carosserie=Carosserie;
  puissance= Puissance;
  alimentation= Alimentation;
  selectedFilesveh: FileList;;
  listfileveh:FileDB[];
  currentFileveh: File;
  fileInfosveh: Observable<any>;
  fileveh: FileDB;
  listofvehicule:Vehicule[];
  displayedColumns = ['date_achat','date_mise_cir', 'marque', 'modele', 'carosserie', 'alimentation', 'puissance'];
  dataSource: MatTableDataSource<Vehicule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private toastr : ToastrService,private us:UserServiceService,
    private router:ActivatedRoute,private route :Router,private formBuilder: FormBuilder,
    private assuranceservice:AssuranceServiceService,private vs:VehiculeServiceService,private packservice:PackServiceService ) { }
  ngAfterContentInit(): void {
   
  }

  ngOnInit(): void {
    this.get(this.router.snapshot.params.id);
    this.initForm(this.user);
    this.initFormassurance();
    this.initFormvehicule();
    this.vs.getvehiculesbyuser(this.router.snapshot.params.id).subscribe(
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
  initForm(data) {
    this.userform = this.formBuilder.group({
      userName: [data?.userName],
      firstName: [data?.firstName],
      lastName: [data?.lastName,],
      email: [data?.email],
      address: [data?.address,],
      city: [data?.city],
      code_postale: [data?.code_postale],
  })
  this.userform.valueChanges.subscribe(
    data=>{
      console.log(this.userform.value)
    }
   
  )
}
initFormassurance() {
  this.assuranceform = this.formBuilder.group({
    prix: [''],
    garantie_conducteur: [''],
    bris_de_glace: [''],
    vol: [''],
    assistance: [''],
    protection_juridique: [''],
    garentie_incendie: [''],
})
this.assuranceform.valueChanges.subscribe(
  data=>{
    console.log(this.assuranceform.value)

  }
 
)
}
get(id:Number){
  this.us.getuserbyid(id ).subscribe(
    data => {

      this.user = data;
    this.initForm(data);

    }
  );
}
modifier(){

  this.us.updateuser(this.userform.value,this.router.snapshot.params.id).subscribe(
    data=>{
      console.log(this.userform.value);

      this.user=data;
      this.toastr.success('user modified Successfully ','user modified Successfully');
      let audio = new Audio()
      audio.src= "../assets/alert.mp3"
      audio.src= "../assets/confirm2.mp3"
      audio.load();
      audio.play();

    }
    ); 
  }
  //////////////////////////////////////////////////////////////
  getprix(){
    this.assuranceservice.getprix(this.assuranceform.value).subscribe(
      res=>{
        console.log(res);
        this.assuranceform.controls['prix'].setValue(res);
        //this.prix=res;
      }
    )
  }
  ajouter(){

    this.packservice.ajoutAssurance(this.assuranceform.value).subscribe(
      data=>{
        console.log(this.assuranceform.value);
  
        this.assurance=data;
        this.toastr.success('assurance added Successfully ','assurance added Successfully');
        let audio = new Audio()
        audio.src= "../assets/alert.mp3"
        audio.src= "../assets/confirm2.mp3"
        audio.load();
        audio.play();
        
  
      }
      ); 
       
    }
    ///////////////////////////////////////////////////////////
    initFormvehicule() {
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
    ajoutervehicule(){
      console.log(this.vehiculeform.value);
      this.vs.ajoutvehicule(this.vehiculeform.value,this.user.userId).subscribe(
      data=>{
        console.log('ssss',data)
        console.log(this.assurance)
        this.vehicule=data; 
        this.vs.affecterfileveh(data.vehId,this.fileveh.id,data).subscribe(
          res1=> {
            this.vs.affectvehiculepack(this.assurance.assuId,data.vehId,data).subscribe(
              res=>{
                this.toastr.success('vehicule added Successfully ','vehicule added Successfully');
            let audio = new Audio()
            audio.src= "../assets/alert.mp3"
            audio.src= "../assets/confirm2.mp3"
            audio.load();
            audio.play();
              }
            )
    
          }
        )
    
        
      } 
      );  
    }
    selectFileveh(event) {
  this.selectedFilesveh = event.target.files;
  }
  ///*
  uploadveh() :FileDB{
    this.currentFileveh = this.selectedFilesveh.item(0);
    this.us.upload(this.currentFileveh).subscribe(
    
      event => {
          this.us.getFilesdetail(event).subscribe(
            data=>{
              this.fileveh=data;
              console.log('file',this.fileveh)
                     
              
            }
          );
    
        
      }
     );
    this.selectedFilesveh = undefined;
    return this.fileveh;
}
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}
