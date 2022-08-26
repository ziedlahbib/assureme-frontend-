import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { HttpInterceptorService } from "./service/http-interceptor.service";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { NavigationComponent } from "./pages/navigation/navigation.component";
import { FooterFrontComponent } from "./shared/footer-front/footer-front.component";
import { NavbarFrontComponent } from "./shared/navbar-front/navbar-front.component";
import { CherchermeilleurassuranceComponent } from './pages/cherchermeilleurassurance/cherchermeilleurassurance.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    FooterFrontComponent,
    NavigationComponent,
    NavbarFrontComponent,


   
    
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
