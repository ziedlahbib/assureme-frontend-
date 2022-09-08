import { HttpEventType, HttpResponse } from '@angular/common/http';
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

@Component({
  selector: 'app-souscriptionavecpersonalise',
  templateUrl: './souscriptionavecpersonalise.component.html',
  styleUrls: ['./souscriptionavecpersonalise.component.scss']
})
export class SouscriptionavecpersonaliseComponent implements OnInit,AfterContentInit {

  public assuranceform: FormGroup;
  public userform:FormGroup;
  public vehiculeform: FormGroup;
  user:User;
  prix:Number;
  assurance:Pack;
  vehicule:Vehicule;
  marque= Marque;
  modele =Modele;
  carosserie=Carosserie;
  puissance= Puissance;
  alimentation= Alimentation;
  ///////////////////
  selectedFiles: FileList;;
  listfile:FileDB[];
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;
  /////////////////
  selectedFilesveh: FileList;;
  listfileveh:FileDB[];
  currentFileveh: File;
  fileInfosveh: Observable<any>;
  fileveh: FileDB;
  ////////////////////////////////
  constructor(private toastr : ToastrService,private assuranceservice:AssuranceServiceService,private router:ActivatedRoute,
    private route :Router,private formBuilder: FormBuilder,private packservice:PackServiceService,
    private userservice:UserServiceService,private us:UserServiceService,private vs:VehiculeServiceService ) { }
  ngAfterContentInit(): void {
   // this.get(this.router.snapshot.params.id);
    
  }

  ngOnInit(): void {
    this.get(this.router.snapshot.params.id);
    this.initForm(this.assurance)
    this.initFormuser();
    this.initFormvehicule();
  }
  initForm(data) {
    this.assuranceform = this.formBuilder.group({
      prix: [data?.prix],
      garantie_conducteur: [data?.garantie_conducteur, Validators.required],
      bris_de_glace: [data?.bris_de_glace, Validators.required],
      vol: [data?.vol, Validators.required],
      assistance: [data?.assistance, Validators.required],
      protection_juridique: [data?.protection_juridique, Validators.required],
      garentie_incendie: [data?.garentie_incendie, Validators.required],
  })
  this.assuranceform.valueChanges.subscribe(
    data=>{
      console.log(this.assuranceform.value)

    }
   
  )
}
initFormuser() {
  this.userform = this.formBuilder.group({
      userName: [''],
      email: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      code_postale: [''],
      file: [null, Validators.required],
});/*
this.userform.valueChanges.subscribe(
  data=>{console.log(this.userform)}
)*/
}
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
get(id:number){
  this.assuranceservice.getAssurance(id ).subscribe(
    data => {

      this.assurance = data;
    this.initForm(data);

    }
  );
}
getprix(){
  this.assuranceservice.getprix(this.assuranceform.value).subscribe(
    res=>{
      console.log(res);
      this.assuranceform.controls['prix'].setValue(res);
      //this.prix=res;
    }
  )
}
confirmer(){

  this.packservice.ajoutAssurance(this.assuranceform.value).subscribe(
    data=>{
      console.log(this.assuranceform.value);

      this.assurance=data;
      this.toastr.success('assurance modified Successfully ','assurance modified Successfully');
      let audio = new Audio()
      audio.src= "../assets/alert.mp3"
      audio.src= "../assets/confirm2.mp3"
      audio.load();
      audio.play();
      

    }
    ); 
     
  }
  ////////////////////////::user///////////////////////
  selectFile(event) {
    this.selectedFiles = event.target.files;
    }
    ///*
    upload() :FileDB{
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      console.log(this.selectedFiles)
      console.log(this.currentFile)
      this.userservice.upload(this.currentFile).subscribe(
      
        event => {
            this.userservice.getFilesdetail(event).subscribe(
              data=>{
                this.file=data;
                console.log('file',this.file)
                       
                
              }
            );
      
          
        }
       );
      this.selectedFiles = undefined;
      return this.file;
  }
//*/
 /*
 upload() :FileDB{
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      console.log(this.selectedFiles)
      console.log(this.currentFile)
      this.userservice.upload(this.currentFile).subscribe(
      
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.userservice.getFilesdetail(event.body).subscribe(
              data=>{
                this.file=data;
                console.log('file',this.file)
                       
                
              }
            );
      
          }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
      this.selectedFiles = undefined;
      return this.file;
  }
  */
ajouter(){
        console.log(this.userform.value);
        this.userservice.ajoutuser(this.userform.value).subscribe(
        data=>{
          console.log('ssss',data)
          this.user=data;
          this.userservice.affecterfileauuser(data.userId,this.file.id,this.user).subscribe(
            res=>{
             //this.listfile=res;
             this.toastr.success('user added Successfully ','user added Successfully');
             let audio = new Audio()
             audio.src= "../assets/alert.mp3"
             audio.src= "../assets/confirm2.mp3"
             audio.load();
             audio.play();
            }
         
        );
       }
      );
        
}
////////////////////////////////vehicule///////////////////////////////////
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
    this.progress = 0;
    this.currentFileveh = this.selectedFilesveh.item(0);
    this.userservice.upload(this.currentFileveh).subscribe(
    
      event => {
          this.userservice.getFilesdetail(event).subscribe(
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
}
