import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css'],
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=data;
    });
  }
  onDelete(id:string){
// confirm 
const confirmDelete = confirm('Bạn có muốn xóa không?');

if(confirmDelete&&id){
  //nếu có id thì xóa -> thực hiện call api
  this.productService.deleteProduct(id).subscribe((data)=>{
    console.log(data);
    //cập nhật lại dữ liệu 
    this.onGetList();
  })
}

  }
}
