import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductEditComponent } from './pages/admin/admin-product/admin-product-edit/admin-product-edit.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CartClientComponent } from './pages/client/client-product/cart-client/cart-client.component';
import { ClientProductDetailComponent } from './pages/client/client-product/client-product-detail/client-product-detail.component';
import { HomClientComponent } from './pages/client/client-product/hom-client/hom-client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomClientComponent
      },
      {
        path:'products-detail/:id',
        component:ClientProductDetailComponent
      },
      {
        path:'cart',
        component:CartClientComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate:[CanAccessAdminGuard],//đưa vào để chặn nếu k login thì không vào đc 
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent,
          },
          {
            path: 'create',
            component: AdminProductFormComponent,
          },
          {
            path: 'edit/:id',
            component: AdminProductEditComponent,
          },
          {
            path: ':id',
            component: AdminProductDetailComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'signup',
        component:SignupComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CanAccessAdminGuard]//đưa vào để các router bên trên có thể sử dụng 
})
export class AppRoutingModule {}
