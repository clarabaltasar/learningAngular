import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path:'home',  component: HomeComponent},
  {path:'about', component: AboutComponent},
  // En caso de que el usuario trate de acceder a una ruta que no existe
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
