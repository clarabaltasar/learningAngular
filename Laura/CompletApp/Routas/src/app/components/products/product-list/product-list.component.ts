import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import { Product } from 'src/app/models/products';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() 
  {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item =>{
      this.productList = [];
      item.forEach(element =>{
        //variable de almacenamiento local
        let x=element.payload.toJSON();
        x["$key"]= element.key;
        this.productList.push(x as Product);
      })
    })
  }

  onEdit(product: Product)
  {
    /*Object.assign nos rompe el doble enlace de datos del formulario
     de esta forma, logramos mejorar el rendimiento en apps grandes*/
    this.productService.selectedProduct = Object.assign({}, product);

  }

  onDelete($key: string)
  {
    if (confirm('Are you sure you want to delete it?')){
      this.productService.deleteProduct($key);
      this.toastr.success('Sucessfull Operation', 'Product Deleted');
    }
  }
}
