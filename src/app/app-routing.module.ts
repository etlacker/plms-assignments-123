import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedLoansComponent } from './applied-loans/applied-loans.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'applied', component: AppliedLoansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
