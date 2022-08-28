
import { Routes, RouterModule } from '@angular/router';
import { CherchermeilleurassuranceComponent } from 'app/pages/cherchermeilleurassurance/cherchermeilleurassurance.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { VehiculeManagmentComponent } from 'app/pages/vehicule-managment/vehicule-managment.component';






export const UserLayoutRoutes: Routes = [

     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'Cherchermeilleurassurance',           component: CherchermeilleurassuranceComponent },
     { path: 'vehiculemanagement',           component: VehiculeManagmentComponent },
     { path: 'home',           component: HomeComponent },

];
