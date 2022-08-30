import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Assurance } from 'app/models/assurance.model';
import { AssuranceServiceService } from 'app/service/assurance-service.service';


@Component({
  selector: 'app-meilleurpack',
  templateUrl: './meilleurpack.component.html',
  styleUrls: ['./meilleurpack.component.scss']
})
export class MeilleurpackComponent implements OnInit {

  public mpackform: FormGroup;
  listofassurance:Assurance[];
  listofassurancePagination:Assurance[];
  minimumprice:Number;
  start=0;
  end=6;
  sit_matrimoniale:String;
  conjointpermis:String;
  constructor(private as:AssuranceServiceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.mpackform = this.formBuilder.group({
      lieu_sattionnemnt: [''],
      salaire: [''],
      annepermis: [''],
      age: [''],
      ageauto: [''],
      puissance: [''],
      mode_financement: [''],
      sit_matrimoniale: [''],
      conjointpermis: [{value:'',disabled:true}],
      ageconjpermis: [{value:'',disabled:true}],
  });

  this.mpackform.valueChanges.subscribe(
    data=>{
      console.log(data)
      console.log(this.mpackform.value);
      this.conjointpermis=this.mpackform.controls['conjointpermis'].value;
      this.sit_matrimoniale=this.mpackform.controls['sit_matrimoniale'].value;
    }
  )
}
submit(){
  this.as.getmeilleurpack(this.mpackform.value).subscribe(
    res=>{
      console.log(res)
      this.listofassurance=res;
      this.listofassurancePagination=this.listofassurance.slice(this.start, this.end)
    }
  )
  this.as.getminimumprice(this.mpackform.value).subscribe(
    data=>{
      console.log(data)
      this.minimumprice=data;
    }
  )
}

paginate(event: PageEvent) {
  let startIndex = event.pageSize * event.pageIndex;
  this.start = startIndex;
  let endIndex = startIndex + event.pageSize;
  this.end = endIndex;
  if (endIndex > this.listofassurance.length) {
    endIndex = this.listofassurance.length;
  }
  this.listofassurancePagination = this.listofassurance.slice(startIndex, endIndex);
}
showorhideconjointpermis(){
  if(this.mpackform.controls['sit_matrimoniale'].value==='marié')
  {
    this.mpackform.controls['conjointpermis'].enable();

  }else{
    this.mpackform.controls['conjointpermis'].disable();
    this.mpackform.controls['conjointpermis'].setValue('');
  }
}
showorhideageconjpermis(){
  if(this.conjointpermis==='yes')
  {
    this.mpackform.controls['ageconjpermis'].enable();
  }else{
    this.mpackform.controls['ageconjpermis'].disable();
    this.mpackform.controls['ageconjpermis'].setValue('');
  }
}
}
