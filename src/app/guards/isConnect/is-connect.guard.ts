import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectGuard implements CanActivate {

  private allow: boolean;

  constructor(private fireLogin: LoginService, private router: Router) { }

  canActivate(): boolean {
    this.fireLogin.isConnects().subscribe((isLogin) => {
      if (isLogin) {
        this.allow = true;
      } else {
        this.allow = false;
        this.router.navigate(['/login']);
      }
    });
    return this.allow;
  }

}
