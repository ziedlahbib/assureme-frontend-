import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
import { RoleName } from 'app/models/role-name';
import { AuthServiceService } from 'app/service/auth-service.service';








declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/', title: 'Home',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/vehiculemanagement', title: 'Gestion des Vehicule',  icon: 'ni-chart-bar-32 text-info', class: '' },
     { path: '/Cherchermeilleurassurance', title: 'meilleure pack ',  icon:'ni-tie-bow text-pink', class: '' },
     { path: '/user',          title: 'User Profile',      icon:'ni-tie-bow text-pink',  class: '' },
     { path: '/home', title: 'acceuil ',  icon:'ni-tie-bow text-pink', class: '' },
     //{ path: '/feedback-management-user', title: 'Feedbacks',  icon:'ni-laptop text-black', class: '' },
     //{ path: '/home', title: 'Forom',  icon:'ni-notification-70 text-blue', class: '' },
     //{ path: '/', title: 'Trip ',  icon:'ni-square-pin text-green', class: '' }
];



@Component({
    selector: 'app-navbar-front',
    templateUrl: './navbar-front.component.html',
    styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {
    user:User;
    role:String;
    isLoggedIn = false;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public menuItemsFRONT: any[];
  public isCollapsed = true;
    constructor(public location: Location, private element : ElementRef,private router: Router,private us:UserServiceService,private route: ActivatedRoute,
        private authenticationService: AuthServiceService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.menuItemsFRONT = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
       });

     this.us.getuserbyusername(sessionStorage.authenticatedUser).subscribe(
        data=>{
            this.user=data;
            this.role=data.role;
            console.log(data.role)
        }
     )
     this.isLoggedIn = this.authenticationService.isUserLoggedIn();
     console.log('menu ->' + this.isLoggedIn);
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    handleLogout() {
        this.authenticationService.logout();
      }
}
