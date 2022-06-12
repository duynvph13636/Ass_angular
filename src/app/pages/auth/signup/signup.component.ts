import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm : FormGroup;
  constructor(
    private authService : AuthService,
    private router :Router,
    private activateRoute : ActivatedRoute,
    private toastr: ToastrService
  ) { 
    this.authForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const FormData= this.authForm.value;
    this.authService.CreateAuth(FormData).subscribe((data)=>{
      this.toastr.success('signup thanh cong, chuyen trang sau 3s')
      setTimeout(() => {
         this.router.navigateByUrl('/auth/login');
      },3000);
     
    })
  }

}
