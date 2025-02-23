import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pacientedetail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pacientedetail.component.html',
  styleUrl: './pacientedetail.component.scss'
})
export class PacientedetailComponent {
  //icons
  faEdit = faEdit;

  paciente: any = {};

  constructor(private route: ActivatedRoute, private backendService: DefaultBackendService, private router: Router) {}

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
    this.router.navigate([`/pacientes/${this.paciente.id_paciente}/edit`]);
  }

}
