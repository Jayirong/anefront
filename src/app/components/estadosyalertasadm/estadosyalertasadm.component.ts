import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeartbeat, faExclamationTriangle, faRandom } from '@fortawesome/free-solid-svg-icons';
import { DefaultBackendService } from '../../services/default-backend.service';

@Component({
  selector: 'app-estadosyalertasadm',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './estadosyalertasadm.component.html',
  styleUrl: './estadosyalertasadm.component.scss'
})
export class EstadosyalertasadmComponent {
  idPaciente: number = 0;
  //Icons
  faHeartbeat = faHeartbeat;
  faExclamationTriangle = faExclamationTriangle;
  faRandom = faRandom;

  constructor(private backendService: DefaultBackendService) {}

  verEstadosVitales() {
    console.log("lol");
  }

  verAlertas() {
    console.log("lol2");
  }

  //func auxiliar para obtener un numero aleatorio de un rango especific
  randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  //generamos un estado vital para ser asignado a un paciente random cuando sea llamdo, se busca deseablemente que se genere un mal estado vital
  generarEstadoVitalAleatorio() {
    const probabilidadNormal = Math.random() < 0.2; // el 20% quiere decir que es la probabilidad de que salga un rango de estados "normales", dejando un 80% a estados alterados, asi forzamos a que las cosas salgan mal

    return {
      frecuencia_cardiaca: probabilidadNormal ? this.randomInRange(60, 100) : this.randomInRange(40, 130),
      presion_arterial_sis: probabilidadNormal ? this.randomInRange(90, 120) : this.randomInRange(70, 180),
      presion_arterial_dias: probabilidadNormal ? this.randomInRange(60, 80) : this.randomInRange(40, 110),
      saturacion_oxigeno: probabilidadNormal ? this.randomInRange(0.95, 1) : this.randomInRange(0.7, 94),
      fecha_registro_ev: new Date().toISOString().split('T')[0], //fecha actual en formato yyyy/mm/dd
      hora_registro_ev: new Date().toLocaleTimeString() //hora acrtual
    }
  }

  //asignamos el estado vital generado a un paciente random
  generarEstadosVitalesAleatorios():void {
    //instanciamos la lista de pacientes y verificamos que exista minimo uno
    this.backendService.getAllPacientes().subscribe(
      (pacientes) => {
        if (pacientes.length === 0) {
          alert('No hay pacientes en la base de datos.');
          return;
        }

        //seleccionamos un paciente al azar
        const pacienteAleatorio = pacientes[Math.floor(Math.random() * pacientes.length)];
        this.idPaciente = pacienteAleatorio.id_paciente;

        //generamos los estados vitales aleatorios
        const nuevoEstadoVital = this.generarEstadoVitalAleatorio();

        //enviamos al back
        this.backendService.postEstadoVital(this.idPaciente, nuevoEstadoVital).subscribe(
          () => {
            alert(`Estado vital generado exitosamente para el paciente ${this.idPaciente}`);
          },
          (error) => {
            console.error('Error al generar estados vitales:', error);
            alert('Hubo un error al generar los estados vitales.');
          }
        );
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
        alert('Hubo un error al obtener los pacientes.');
      }
    )
  }

}
