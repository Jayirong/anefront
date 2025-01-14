import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({})
  };

  public getAllPacientes() {
    return this.http.get<Paciente[]>('https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/pacientes', this.httpOptions);
  }

}
