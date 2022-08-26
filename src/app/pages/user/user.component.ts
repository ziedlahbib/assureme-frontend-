import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'app/service/auth-service.service';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    username:String;
    ngOnInit(){
        this.username=sessionStorage.getItem("userName");
      console.log(this.username);
    }
}
