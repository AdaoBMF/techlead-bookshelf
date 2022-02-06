import { User } from './../interface/user';
import { UserService } from './../user-service.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginCredentials } from './../interface/loginCredentials';

@Injectable({
  providedIn: 'root',
})
export class LoginResolverGuard implements Resolve<LoginCredentials> {
  
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const mail = route.params['mail'];
    return this.userService.getUserByMail(mail);
  }
}
