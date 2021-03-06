import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private HardcodedAuthenticationService: HardcodedAuthenticationService,
    private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.HardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false
    }

  }
}
