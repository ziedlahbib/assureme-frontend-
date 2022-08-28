import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AssuranceManagementComponent } from 'app/pages/assurance-management/assurance-management.component';
import { AjouterAssuranceComponent } from 'app/pages/assurance-management/ajouter-assurance/ajouter-assurance.component';
import { ModifierAssuranceComponent } from 'app/pages/assurance-management/modifier-assurance/modifier-assurance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'assurance-management',        component: AssuranceManagementComponent }, 
    { path: 'ajouter-assurance',        component: AjouterAssuranceComponent }, 
    { path: 'assurance-management/modifier/:id',           component: ModifierAssuranceComponent, },
];
