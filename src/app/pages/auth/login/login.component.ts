import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    // 1 nhận dữ liệu từ form và call Api
    this.authService.login(this.loginForm.value).subscribe((data) => {
      //2. lưu thông tin user vào localstorage :setItem (teen key luu vao localstorate,du lieu string)
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      this.toastr.success('Login thành công chuyển trang sau 3s');
      setTimeout(() => {
        //3.di chuyển về màn admin/products
        this.router.navigateByUrl('/admin/products');
      }, 3000);
      //  localStorage.getItem('loggedInUser');
    });
  }
}
