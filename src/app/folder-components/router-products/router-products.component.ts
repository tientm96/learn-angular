import { Component, OnInit } from '@angular/core';

import { Product } from './../../folder-models/product';
import { ProductService } from './../../folder-services/product.service';



@Component({
  selector: 'app-router-products',
  templateUrl: './router-products.component.html',
  styleUrls: ['./router-products.component.css']
})
export class RouterProductsComponent implements OnInit {

  public products : Product[] = [];

  constructor(private productService : ProductService ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
