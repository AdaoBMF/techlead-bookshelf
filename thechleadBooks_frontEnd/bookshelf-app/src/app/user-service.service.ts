import { take } from 'rxjs';
import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { User } from './interface/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from './interface/loginCredentials';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User> {

  constructor(protected override http: HttpClient) {
    super(http, environment.API, "users");
  }

  public authenticateUser(loginCredentials: LoginCredentials) {
    return this.http.post<number>(`${this.API_URL}authentication`,loginCredentials)
    .pipe(take(1));
  }

  public getUserByMail(mail: string) {
    return this.http.get<User>(`${this.API_URL}authentication/${mail}`)
    .pipe(take(1));
  }

}
