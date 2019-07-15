import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

//FireBase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2'
import {environment} from '../environments/environment';

//FontAwesome
//import {} from '@fortawesome/angular-fontawesome';

//Component
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './component/products/product/product.component'

//Services
import {ProductService} from './services/product.service';

import {Routes, RouterModule} from '@angular/router';
import { ProductsGuard } from './guards/products.guard';

const routes:Routes=[
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent, canActivate:[ProductsGuard]},
  {path:'products-list', component:ProductListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    //RouterModule.forRoot(routes)
 ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
