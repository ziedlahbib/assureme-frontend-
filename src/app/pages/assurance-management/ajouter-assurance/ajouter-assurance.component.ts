import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssuranceServiceService } from 'app/service/assurance-service.service';
import { Router } from '@angular/router';
import { Assurance } from 'app/models/assurance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-assurance',
  templateUrl: './ajouter-assurance.component.html',
  styleUrls: ['./ajouter-assurance.component.scss']
})
export class AjouterAssuranceComponent implements OnInit,AfterContentInit {

  public assuranceform: FormGroup;
  assurance:Assurance;
  prix:Number;
  constructor(private as:AssuranceServiceService,private formBuilder: FormBuilder,private router:Router,private toastr : ToastrService) { }
  ngAfterContentInit(): void {
  

  }

  ngOnInit(): void {
   
    this.initForm();  

  }
  initForm() {
    this.assuranceform = this.formBuilder.group({
      garantie_conducteur: ['no', Validators.required],
      bris_de_glace: ['no', Validators.required],
      vol: ['no', Validators.required],
      assistance: ['no', Validators.required],
      protection_juridique: ['no', Validators.required],
      garentie_incendie: ['no', Validators.required],
      prix: [this.prix],
  });

  this.assuranceform.valueChanges.subscribe(
    data=>{
      console.log(this.assuranceform.value);
      this.as.getprix(this.assuranceform.value).subscribe(
        res=>{
          console.log(res);
          this.prix=res;
        }
      )
    }
  )
}
ajouter(){
  console.log(this.assuranceform.value);
  this.as.ajoutAssurance(this.assuranceform.value).subscribe(
  data=>{
    console.log('ssss',data)
    this.assurance=data; 
    this.router.navigate(["/assurance-management"])
    this.toastr.success('assurance added Successfully ','assurance added Successfully');
    let audio = new Audio()
    audio.src= "../assets/alert.mp3"
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
  } 
  );  
}

}
