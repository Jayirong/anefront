import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {
  private apiPacientesUrl= 'https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/pacientes'
  private apiAlertasUrl= 'https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/alertas'
  private apiEstadosUrl= 'https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/estadovital'
  private pacientesSubject: BehaviorSubject<Paciente[]> = new BehaviorSubject<Paciente[]>([]);

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({})
  };

  //Pacientes
  public getAllPacientes() {
    return this.http.get<Paciente[]>(this.apiPacientesUrl, this.httpOptions);
  }

  //obtenemos una lista de pacientes en tiempo real con BehaviorSubject
  public getPacientesEnTiempoReal(): Observable<Paciente[]> {
    return this.pacientesSubject.asObservable();
  }

  public getPacienteById(id: string): Observable<Paciente> {
    const url = `${this.apiPacientesUrl}/${id}`;
    return this.http.get<Paciente>(url);
  }

  public addPaciente(paciente: Omit<Paciente, 'id_paciente' | 'alertas' | 'estadosVitales'>): Observable<any> {
    return this.http.post<any>(this.apiPacientesUrl, paciente);
  }

  public deletePacienteById(id: number): Observable<string> {
    return this.http.delete(`${this.apiPacientesUrl}/${id}`, { responseType: 'text' });
  }

  public deleteAllPacientes(): Observable<string> {
    return this.http.delete(this.apiPacientesUrl, { responseType: 'text' });
  }

  public updatePaciente(updatedpaciente: Paciente): Observable<any> {
    return this.http.put(`${this.apiPacientesUrl}/${updatedpaciente.id_paciente}`, updatedpaciente);
  }

  public actualizarPacientes(): void {
    this.getAllPacientes().subscribe((pacientes) => {
      this.pacientesSubject.next(pacientes);
    });
  }

  //Alertas
  

  //SignosVitales
  public getEstadosVitalesByPaciente(id_paciente: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiEstadosUrl);
  }

  public postEstadoVital(idPaciente: number, estadoVital: any) {
    return this.http.post(`${this.apiEstadosUrl}/paciente/${idPaciente}`, estadoVital);
  }

}
