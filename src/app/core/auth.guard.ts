import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard: vérification de connexion');
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('isLoggedIn =', isLoggedIn);
    
    if (isLoggedIn) {
      return true;
    } else {
      console.log('Tentative de redirection vers /auth/login');
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
