import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { msalGuard } from './guards/msal.guard';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: MenuComponent, canActivate: [msalGuard]},
    {path: '**', redirectTo: ''},
];
