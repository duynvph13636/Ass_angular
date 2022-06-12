import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //1. lấy ra thông tin người dùng đã đăng nhập
    const loggedInUser = localStorage.getItem('loggedInUser');
    //2.kiểm tra nếu có thì cho đăng nhập
    if (loggedInUser) {
      return true;
    }
    //3. nếu không thì đăng nhập lại
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
