import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacientedetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientedetail.component.html',
  styleUrl: './pacientedetail.component.scss'
})
export class PacientedetailComponent {

  paciente: any = {};

  constructor(private route: ActivatedRoute, private backendService: DefaultBackendService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerPacienteDetalle(id);
    }
  }

  obtenerPacienteDetalle(id: string): void {
    this.backendService.getPacienteById(id).subscribe(
      (data) => {
        this.paciente = data;
      },
      (error) => {
        console.error('Error al obtener el paciente: ', error)
      }
    );
  }

  editarPaciente(): void {
    console.log('Editar paciente', this.paciente);
  }

}
