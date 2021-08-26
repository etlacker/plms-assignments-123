import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularMaterialImportsModule } from './angular-material-imports/angular-material-imports.module';
import { LoansComponent } from './loans/loans.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppliedLoansComponent } from './applied-loans/applied-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoansComponent,
    RegisterComponent,
    LoginComponent,
    AppliedLoansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialImportsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
