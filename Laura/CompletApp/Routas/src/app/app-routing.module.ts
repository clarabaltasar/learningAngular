import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {GuardaHomeGuard} from "./guards/guarda-home.guard"
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  {
    path:"login", component: LoginComponent
  },
  {
    path:"home", component: HomeComponent, canActivate: [GuardaHomeGuard]
  },
  {
    path:"enterProduct", component: ProductComponent, canActivate: [GuardaHomeGuard]
  },
  {
    path:"showProducts", component: ProductListComponent, canActivate: [GuardaHomeGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
