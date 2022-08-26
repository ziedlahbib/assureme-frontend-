
import { Routes, RouterModule } from '@angular/router';
import { CherchermeilleurassuranceComponent } from 'app/pages/cherchermeilleurassurance/cherchermeilleurassurance.component';






export const UserLayoutRoutes: Routes = [

     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'Cherchermeilleurassurance',           component: CherchermeilleurassuranceComponent },

];
