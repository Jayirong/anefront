import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {
  private apiPacientesUrl= 'https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/pacientes'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({})
  };

  public getAllPacientes() {
    return this.http.get<Paciente[]>(this.apiPacientesUrl, this.httpOptions);
  }

  public addPaciente(paciente: Omit<Paciente, 'id_paciente' | 'reportes'>): Observable<any> {
    return this.http.post<any>(this.apiPacientesUrl, paciente);
  }

}
