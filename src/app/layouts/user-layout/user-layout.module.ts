
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";

// import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
;
import { MatDialogModule } from '@angular/material/dialog';
import { CherchermeilleurassuranceComponent } from 'app/pages/cherchermeilleurassurance/cherchermeilleurassurance.component';
import { VehiculeManagmentComponent } from 'app/pages/vehicule-managment/vehicule-managment.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from 'app/pages/home/home.component';
import { UserComponent } from 'app/pages/user/user.component';
import { MeilleurpackComponent } from 'app/pages/meilleurpack/meilleurpack.component';
import { SouscriptionavecpersonaliseComponent } from 'app/pages/souscriptionavecpersonalise/souscriptionavecpersonalise.component';


// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatPaginatorModule,







  ],

  declarations: [
    CherchermeilleurassuranceComponent,
    VehiculeManagmentComponent,
    HomeComponent,
    UserComponent,
    MeilleurpackComponent,
    SouscriptionavecpersonaliseComponent,

  ]
  ,entryComponents: [],
  exports: [
    RouterModule
  ]



})

export class UserLayoutModule {}
