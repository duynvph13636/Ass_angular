import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css'],
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router, // cung cấp naviagte điều hướng
    private activateRoute: ActivatedRoute // lấy ra các thâm sô trong url
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.onValidateNameHasProduct,
      ]),
      price: new FormControl(1, Validators.required),
      sale_price: new FormControl(1, Validators.required),
      img: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });
    this.productId = '0';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe((data) => {
        // gán giá trị cho form .patchValue sẽ nhận đầy đủ thuộc tính của form
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          desc: data.desc,
          sale_price: data.sale_price,
          img: data.img,
        });
      });
    }
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    //  console.log(control);
    const { value } = control;
    if (!value.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit() {
    console.log(this.productForm.value);
    // 1 . lấy dữ liệu tù form
    const submitData = this.productForm.value;
    return this.productService.createProduct(submitData).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('admin/products');
    });

    //2. call api (cần định nghĩa service và router diều hướng )
  }
}
