import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/products';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit() 
  {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null)
      this.productService.insertProduct(productForm.value);
    else
      this.productService.updateProduct(productForm.value);
    this.resetForm(productForm);
    this.toastr.success('Succesfull operation', 'Succesfull operation');
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null){
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
