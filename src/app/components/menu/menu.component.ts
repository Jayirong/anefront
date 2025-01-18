import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { DefaultBackendService } from '../../services/default-backend.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  //iconos
  faUser = faUser;
  faHeartbeat = faHeartbeat;

  responseBackend: object = {};

  constructor(
    private authService: MsalService,
    private backendService: DefaultBackendService
  ) {}

  obtenerUsuario(): string | undefined {
    const account = this.authService.instance.getActiveAccount();
    if (account == null) {
      return undefined;
    }
    return account.name;
  }


}
