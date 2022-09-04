import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'app/models/file-db.model';
import { Pack } from 'app/models/pack.model';
import { User } from 'app/models/user.model';
import { AssuranceServiceService } from 'app/service/assurance-service.service';
import { PackServiceService } from 'app/service/pack-service.service';
import { UserServiceService } from 'app/service/user-service.service';
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
  user:User;
  assurance:Pack;
  ///////////////////
  selectedFiles: FileList;
  public articleform: FormGroup;
  listfile:FileDB[];
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;

  ////////////////////////////////
  constructor(private toastr : ToastrService,private assuranceservice:AssuranceServiceService,private router:ActivatedRoute,
    private route :Router,private formBuilder: FormBuilder,private packservice:PackServiceService,
    private userservice:UserServiceService,private us:UserServiceService ) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.initForm(this.assurance)
    this.initFormuser();
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
      this.assuranceservice.getprix(this.assuranceform.value).subscribe(
        res=>{
          console.log(res);
          this.assuranceform.controls['prix'].setValue(res);
        }
      )
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
});
this.userform.valueChanges.subscribe(
  data=>{console.log(this.userform)}
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
        console.log(this.articleform.value);
        this.userservice.ajoutuser(this.articleform.value).subscribe(
        data=>{
          console.log('ssss',data)
          this.user=data;
          this.userservice.affecterfileauuser(this.user.userId,this.file.id,this.user).subscribe(
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
}
