import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { DefaultBackendService } from '../../../services/default-backend.service';
import { Paciente } from '../../../interfaces/paciente';

@Component({
  selector: 'app-pacienteedit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './pacienteedit.component.html',
  styleUrl: './pacienteedit.component.scss'
})
export class PacienteeditComponent implements OnInit {
  //icon
  faSave = faSave;
  pacienteForm!: FormGroup;
  pacienteId: string | null = null;
  paciente: Paciente | null = null;

  constructor(
    private backendService: DefaultBackendService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      //sacamos la id_paciente de la url
      this.route.paramMap.subscribe(params => {
        this.pacienteId = params.get('id')!;
        this.obtenerPacienteDetalle();
      });

      //inicializamos el form
      this.pacienteForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        rut: ['', Validators.required],
        edad: ['', [Validators.required, Validators.min(0)]],
        telefono: ['', Validators.required],
      });
  }

  obtenerPacienteDetalle(): void {
    //obtenemos los datos del paciente para prellenar el form
    if (this.pacienteId){
      this.backendService.getPacienteById(this.pacienteId).subscribe((data) => {
        this.paciente = data;
        this.pacienteForm.patchValue({
          nombre: this.paciente.nombre_paciente,
          apellido: this.paciente.apellido_paciente,
          rut: this.paciente.rut_paciente,
          edad: this.paciente.edad_paciente,
          telefono: this.paciente.telefono_paciente,
        });
      });
    }    
  }

  //func para enviar la data
  onSubmit(): void {
    if (this.pacienteForm.valid && this.pacienteId) {
      const updatedPaciente: Paciente = {
        id_paciente: Number(this.pacienteId),
        nombre_paciente: this.pacienteForm .value.nombre,
        apellido_paciente: this.pacienteForm.value.apellido,
        rut_paciente: this.pacienteForm.value.rut,
        edad_paciente: this.pacienteForm.value.edad,
        telefono_paciente: this.pacienteForm.value.telefono || '',
        alertas: this.paciente?.alertas || [],
        estadosVitales: this.paciente?.estadosVitales || []
      };
      console.log("ID Paciente:", this.pacienteId); // Verifica que el ID esté bien definido
      console.log("Paciente para actualizar:", updatedPaciente);
  
      this.backendService.updatePaciente(updatedPaciente).subscribe(() => {
        this.router.navigate(['/pacienteslist']);
      });
    } else {
      console.error('ID de paciente no disponible:', this.pacienteId);
    }
  }



}
