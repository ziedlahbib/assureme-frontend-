import { Component, OnInit } from '@angular/core';
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
export class AjouterAssuranceComponent implements OnInit {

  public assuranceform: FormGroup;
  assurance:Assurance;
  constructor(private as:AssuranceServiceService,private formBuilder: FormBuilder,private router:Router,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.assuranceform = this.formBuilder.group({
      description: ['', Validators.required],
      prix: ['', [Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
  });

  this.assuranceform.valueChanges.subscribe(
    data=>{console.log(this.assuranceform)}
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
