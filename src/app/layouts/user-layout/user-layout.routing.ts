
import { Routes, RouterModule } from '@angular/router';
import { CherchermeilleurassuranceComponent } from 'app/pages/cherchermeilleurassurance/cherchermeilleurassurance.component';
import { VehiculeManagmentComponent } from 'app/pages/vehicule-managment/vehicule-managment.component';






export const UserLayoutRoutes: Routes = [

     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'Cherchermeilleurassurance',           component: CherchermeilleurassuranceComponent },
     { path: 'vehiculemanagement',           component: VehiculeManagmentComponent },

];
