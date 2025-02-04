import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { msalGuard } from './guards/msal.guard';
import { PacientesadmComponent } from './components/pacientesadm/pacientesadm.component';
import { PacienteslistComponent } from './components/pacientesadm/pacienteslist/pacienteslist.component';
import { PacientesaddComponent } from './components/pacientesadm/pacientesadd/pacientesadd.component';
import { PacientedetailComponent } from './components/pacientesadm/pacientedetail/pacientedetail.component';
import { PacientesdeleteComponent } from './components/pacientesadm/pacientesdelete/pacientesdelete.component';
import { PacienteeditComponent } from './components/pacientesadm/pacienteedit/pacienteedit.component';
import { EstadosyalertasadmComponent } from './components/estadosyalertasadm/estadosyalertasadm.component';
import { EstadosvitalesComponent } from './components/estadosyalertasadm/estadosvitales/estadosvitales.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: MenuComponent, canActivate: [msalGuard]},
    {path: 'pacientesadm', component: PacientesadmComponent, canActivate: [msalGuard]},
    {path: 'pacienteslist', component:PacienteslistComponent, canActivate: [msalGuard]},
    {path: 'pacientesadd', component:PacientesaddComponent, canActivate: [msalGuard]},
    {path: 'pacientes/:id', component:PacientedetailComponent, canActivate: [msalGuard]},
    {path: 'pacientesdelete', component:PacientesdeleteComponent, canActivate: [msalGuard]},
    {path: 'pacientes/:id/edit', component:PacienteeditComponent, canActivate: [msalGuard]},
    {path: 'estadosyalertasadm', component:EstadosyalertasadmComponent, canActivate: [msalGuard]},
    {path: 'pacientes/:id/estadosvitales', component:EstadosvitalesComponent, canActivate: [msalGuard]},
    {path: '**', redirectTo: ''},
];
