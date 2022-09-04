
import { Routes, RouterModule } from '@angular/router';
import { CherchermeilleurassuranceComponent } from 'app/pages/cherchermeilleurassurance/cherchermeilleurassurance.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { MeilleurpackComponent } from 'app/pages/meilleurpack/meilleurpack.component';
import { SouscriptionavecpersonaliseComponent } from 'app/pages/souscriptionavecpersonalise/souscriptionavecpersonalise.component';
import { UserComponent } from 'app/pages/user/user.component';
import { VehiculeManagmentComponent } from 'app/pages/vehicule-managment/vehicule-managment.component';






export const UserLayoutRoutes: Routes = [

     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'Cherchermeilleurassurance',           component: CherchermeilleurassuranceComponent },
     { path: 'vehiculemanagement',           component: VehiculeManagmentComponent },
     { path: 'home',           component: HomeComponent },
     { path: 'user',           component: UserComponent },
     { path: 'meilleurpack',           component: MeilleurpackComponent },
     { path: 'souscription/modifier/:id',           component: SouscriptionavecpersonaliseComponent, },

];
