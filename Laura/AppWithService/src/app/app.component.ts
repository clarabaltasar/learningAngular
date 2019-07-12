import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppWithService';
  products:any;
  
  constructor(private productsService: ProductsService){
    this.products = productsService.products.ProductCollection;
  }
}
