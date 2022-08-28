import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { AuthServiceService } from 'app/service/auth-service.service';
import { UserServiceService } from 'app/service/user-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit,AfterContentInit{

    public userform: FormGroup;
    user:User;
    constructor(private us:UserServiceService ,private formBuilder: FormBuilder,private router:Router,private toastr : ToastrService) { }
    ngAfterContentInit(): void {
        
    }
    ngOnInit(){
     console.log(sessionStorage.authenticatedUser)
     this.us.getuserbyusername(sessionStorage.authenticatedUser).subscribe(
        data=>{
            this.user=data;
            console.log(data);
            this.initForm(this.user);
        }
     )
    }
    initForm(data) {
        this.userform = this.formBuilder.group({
            userName: [data?.userName],
            email: [data?.email],
            firstName: [data?.firstName],
            lastName: [data?.lastName],
            address: [data?.address],
            city: [data?.city],
            code_postale: [data?.code_postale],
      });
    }
    modifier(){

        this.us.updateuser(this.userform.value,this.user.userId).subscribe(
          data=>{
            console.log(data)
 
            this.toastr.success(' modified Successfully ',' modified Successfully');
            let audio = new Audio()
            audio.src= "../assets/alert.mp3"
            audio.src= "../assets/confirm2.mp3"
            audio.load();
            audio.play();
    
          }
          ); 
        }
}
