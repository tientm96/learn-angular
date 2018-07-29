import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      //nếu biến toàn cục localStorage với key là user mà difined thì true: các path sd Guard này sẽ đc phép truy cập. 
      if(localStorage.getItem('user')){
        return true;
      }
      // else{
      //   this.router.navigate(['']);
      //   return false;
      // }

      //cũng như else thôi. localStorage undifined thì chuyển về đường dẫn mặc định, là về index - home.
      //dùng navigate để định dạng lại đường link.
      this.router.navigate(['']);
      return false; //và trả về false để ko cho phép các path sd Guard này truy cập.
    }

}
