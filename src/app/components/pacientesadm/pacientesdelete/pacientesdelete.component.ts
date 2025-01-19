import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { Paciente } from '../../../interfaces/paciente';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pacientesdelete',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pacientesdelete.component.html',
  styleUrl: './pacientesdelete.component.scss'
})
export class PacientesdeleteComponent {
  //icons
  faTrash = faTrash;
  faTrashAlt = faTrashAlt;

  pacientes: Paciente[] = [];

  constructor(private backendService: DefaultBackendService) {}

  ngOnInit(): void {
    //nos suscribimos a los cambios en la lista de pacientes al iniciar
    this.backendService.getPacientesEnTiempoReal().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });

    //inicializamos la lista de pacientes
    this.backendService.actualizarPacientes();
  }

  deletePaciente(id: number): void {
    this.backendService.deletePacienteById(id).subscribe(() => {
      this.backendService.actualizarPacientes();
    });
  }

  deleteAllPacientes(): void {
    this.backendService.deleteAllPacientes().subscribe(() => {
      this.pacientes = [];
    });
  }

}
