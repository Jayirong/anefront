import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeartbeat, faTint, faLungs, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-estadosvitales',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './estadosvitales.component.html',
  styleUrl: './estadosvitales.component.scss'
})
export class EstadosvitalesComponent implements OnInit{
  idPaciente: string = '';
  estadosVitales: any[] = [];
  //icons
  heartbeatIcon = faHeartbeat;
  tintIcon = faTint;
  lungsIcon = faLungs;
  calendarIcon = faCalendar;
  clockIcon = faClock;

  constructor(private route: ActivatedRoute, private backendService: DefaultBackendService) {}

  ngOnInit(): void {
      this.idPaciente = this.route.snapshot.paramMap.get('id') || '';
      this.obtenerEstadosVitales();
  }

  obtenerEstadosVitales(): void {
    this.backendService.getEstadosVitalesByPaciente(this.idPaciente).subscribe(
      (data) => {
        console.log(data);
        this.estadosVitales = data;
      },
      (error) => {
        console.error('Error al obtener los estados vitales, lol: ', error);
      }
    );
  }
}
