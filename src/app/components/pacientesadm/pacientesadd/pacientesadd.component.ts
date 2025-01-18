import { Component } from '@angular/core';
import { Paciente } from '../../../interfaces/paciente';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientesadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientesadd.component.html',
  styleUrl: './pacientesadd.component.scss'
})
export class PacientesaddComponent {
  paciente: Omit<Paciente, 'id_paciente' | 'reportes'> = {
    nombre_paciente: '',
    apellido_paciente: '',
    rut_paciente: '',
    edad_paciente: null,
    telefono_paciente: ''
  };

  constructor(private backendService: DefaultBackendService, private router: Router) {}

  agregarpaciente() {
    this.backendService.addPaciente(this.paciente).subscribe({
      next: () => {
        alert('Paciente agregado con éxito');
        this.router.navigate(['/pacienteslist']);
      },
      error: (err) => {
        console.error('Error al agregar al paciente: ', err);
        alert('Shit happens, no me la pude, intenta relogeando');
      }
    });
  }

}
