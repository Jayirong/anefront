import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';

//vamo a ver si funciona la config de msal
export function MSALFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '1ec53a08-275a-45d7-9e68-d5e97ec990be',
      authority: 'https://login.microsoftonline.com/7d5be4db-7c52-4508-b95f-b8e8d3b2b3ec',
      redirectUri: 'http://localhost:4200'
    }
  });

}

export const appConfig: ApplicationConfig = {
  providers: [
    //Proveemos el SMAL_InSTAnce con su f[abrica]
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALFactory
    },
    MsalService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
