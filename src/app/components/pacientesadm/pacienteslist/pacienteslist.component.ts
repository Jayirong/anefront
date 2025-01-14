import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DefaultBackendService } from '../../../services/default-backend.service';

@Component({
  selector: 'app-pacienteslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacienteslist.component.html',
  styleUrl: './pacienteslist.component.scss'
})
export class PacienteslistComponent implements OnInit{

  pacientes: any[] = [];

  constructor(private backendService: DefaultBackendService) {}

  ngOnInit(): void {
      this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.backendService.getAllPacientes().subscribe(
      (data) => {
        this.pacientes = data;
      },
      (error) => {
        console.error('Error al obtener los pacientes:', error)
      }
    );
  }

  verDetalle(paciente: any): void{
    console.log('Ver detalle del paciente: ', paciente);
  }

}
