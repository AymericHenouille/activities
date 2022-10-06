import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  public canActivate(): Observable<boolean | UrlTree> {
    return this.userService.user$.pipe<boolean | UrlTree>(
      map(user => !!user || this.router.parseUrl('/auth'))
    );
  }

}
