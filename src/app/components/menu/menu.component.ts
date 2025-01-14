import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { DefaultBackendService } from '../../services/default-backend.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

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
