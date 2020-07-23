import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsDisconnectGuard implements CanActivate {

  private allow: boolean;

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    this.userService.isConnects().subscribe((isLogin) => {
      if (!isLogin) {
        this.allow = true;
      } else {
        this.allow = false;
        this.router.navigate(['/main']);
      }
    });
    return this.allow;
  }

}
