import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangingPageComponent } from './home/langing-page/langing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{path:"signup",component:SignupComponent},
	{path:"login",component:LoginComponent},
	{path:"",component:LangingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
