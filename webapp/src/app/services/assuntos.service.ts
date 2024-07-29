import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { ApiResponse } from '../models/api-response';
import { AssuntoDto } from '../models/assunto-dto';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {
  private apiUrl = `${environment.apiUrl}/assuntos`;

  constructor(private http: HttpClient) {}

  getAssuntos(descricao: string): Observable<AssuntoDto[]> {
    let params = new HttpParams().set('descricao', descricao);
    return this.http.get<ApiResponse<AssuntoDto[]>>(this.apiUrl, { params }).pipe(
      map(response => response.data as AssuntoDto[])
    );
  }
}
