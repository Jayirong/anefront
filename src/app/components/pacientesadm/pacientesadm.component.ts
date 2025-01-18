import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faUserSlash, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pacientesadm',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './pacientesadm.component.html',
  styleUrl: './pacientesadm.component.scss'
})
export class PacientesadmComponent {
  //iconos
  faPlusCircle = faPlusCircle;
  faUserSlash = faUserSlash;
  faListAlt = faListAlt;

}
