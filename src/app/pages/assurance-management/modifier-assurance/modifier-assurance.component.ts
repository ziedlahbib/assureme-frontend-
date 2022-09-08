import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AssuranceServiceService } from 'app/service/assurance-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,Validators } from '@angular/forms';
import { Assurance } from 'app/models/assurance.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifier-assurance',
  templateUrl: './modifier-assurance.component.html',
  styleUrls: ['./modifier-assurance.component.scss']
})
export class ModifierAssuranceComponent implements OnInit,AfterContentInit {

  assurance:Assurance;
  public assuranceform: FormGroup;
  constructor(private toastr : ToastrService,private assuranceservice:AssuranceServiceService,private router:ActivatedRoute,private route :Router,private formBuilder: FormBuilder) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id);

  }

  ngOnInit(): void {
    this.initForm(this.assurance)
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
getprix(){
  this.assuranceservice.getprix(this.assuranceform.value).subscribe(
    res=>{
      console.log(res);
      this.assuranceform.controls['prix'].setValue(res);
    }
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
  modifier(){

    this.assuranceservice.updateassurance(this.router.snapshot.params.id,this.assuranceform.value).subscribe(
      data=>{
        console.log(this.assuranceform.value);

        this.assurance=data;
        this.toastr.success('assurance modified Successfully ','assurance modified Successfully');
        let audio = new Audio()
        audio.src= "../assets/alert.mp3"
        audio.src= "../assets/confirm2.mp3"
        audio.load();
        audio.play();
        this.route.navigate(["/assurance-management"])

      }
      ); 
    }
}
