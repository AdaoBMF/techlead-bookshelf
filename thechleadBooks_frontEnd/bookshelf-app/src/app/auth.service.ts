import { Router } from '@angular/router';
import { UserService } from './user-service.service';
import { LoginCredentials } from './interface/loginCredentials';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  
  private authenticatedUser!: boolean;


  authLogin(loginCredentials: LoginCredentials){
    this.userService.authenticateUser(loginCredentials).subscribe(
      res => {
        this.authenticatedUser = res >= 1 && res <= 2;  
        switch(res){
          case 0:
            this.router.navigate(['/']);
            break;
          case 1:
            this.router.navigate([`/admin/${loginCredentials.mail}`]);
            break;
          case 2:
            this.router.navigate([`/user/${loginCredentials.mail}`]);
            break;
          case 3:
            this.router.navigate(['/']);
            break;
          default:
            this.router.navigate(['/']);
            break;    
        }
    
      },
      error => console.log('Erro na autenticação')
    );

  }

  public getAuthenticatedUser() {
    return this.authenticatedUser;
  }
  
}
