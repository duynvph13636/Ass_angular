import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-client-product-detail',
  templateUrl: './client-product-detail.component.html',
  styleUrls: ['./client-product-detail.component.css'],
})
export class ClientProductDetailComponent implements OnInit {
  id: string;
  product: Product;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    (this.product = {
      _id: '0',
      name: '',
      price: 0,
      sale_price: 0,
      img: '',
      desc: '',
    }),
      (this.id = '');
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product=data;
    })
  }
}
