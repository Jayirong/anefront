import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

export const msalGuard: CanActivateFn = (route, state) => {

  const msalService = inject(MsalService);
  const router = inject(Router);

  if (msalService.instance.getActiveAccount() == null ) {
    //si no hay cuenta activa, hacemos la 1314 y redirigimos
    router.navigate(['/']);
    return false;
  }

  return true;
};
