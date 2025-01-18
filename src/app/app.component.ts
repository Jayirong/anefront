import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MsalService } from '@azure/msal-angular'
import { AuthenticationResult } from '@azure/msal-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignInAlt, faSignOutAlt, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //icons
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  faArrowLeft = faArrowLeft;
  

  title = 'anefront';

  constructor(private msalService: MsalService, private router: Router, private location: Location) {}

  usuarioEstaConectado(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  iniciarSesion(): void {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);

      this.msalService.acquireTokenSilent({ scopes: [] }).subscribe({
        next: (tokenResponse) => {
          localStorage.setItem('jwt', tokenResponse.idToken);

          //redirigimos al menu luego del login
          this.router.navigate(['/menu']);
        },
      });
    });
  }

  cerrarSesion(): void {
    this.msalService.logoutPopup({
      mainWindowRedirectUri: "/"
    });
  }

  irMenu(): void {
    this.router.navigate(['/menu']);
  }

  volverAtras(): void {
    this.location.back();
  }

}
