import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({})
  };

  public getAllPacientes() {
    return this.http.get('https://8r48b6gujh.execute-api.us-east-1.amazonaws.com/pacientes', this.httpOptions);
  }

}
