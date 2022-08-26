import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthServiceService } from 'app/service/auth-service.service';
import { UserServiceService } from 'app/service/user-service.service';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    user:User;
    constructor(private us:UserServiceService) { }
    ngOnInit(){
     console.log(sessionStorage.authenticatedUser)
     this.us.getuserbyusername(sessionStorage.authenticatedUser).subscribe(
        data=>{
            this.user=data;
            console.log(data);
        }
     )
    }
}
