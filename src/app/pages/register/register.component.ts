import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'app/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'app/service/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userform: FormGroup;
  user:User;
  constructor(private us:UserServiceService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userform = this.formBuilder.group({
      userName: [''],
      email: [''],
      password: [''],
  });

  this.userform.valueChanges.subscribe(
    data=>{console.log(this.userform)}
  )
}
ajouter(){
  console.log(this.userform.value);
  this.us.registration(this.userform.value).subscribe(
  data=>{
    this.user=data; 
    this.router.navigate(["/assurance-management"])
  } 
  );  
}

}
