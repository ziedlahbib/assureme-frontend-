import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssuranceManagementComponent } from 'app/pages/assurance-management/assurance-management.component';
///////////////////////////////
import {MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AjouterAssuranceComponent } from 'app/pages/assurance-management/ajouter-assurance/ajouter-assurance.component';
import { ModifierAssuranceComponent } from 'app/pages/assurance-management/modifier-assurance/modifier-assurance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [
    DashboardComponent,
    
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AssuranceManagementComponent,
    AjouterAssuranceComponent,
    ModifierAssuranceComponent,
  ]
})

export class AdminLayoutModule {}
