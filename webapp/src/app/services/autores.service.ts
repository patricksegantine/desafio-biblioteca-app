import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { ApiResponse } from '../models/api-response';
import { AutorDto } from '../models/autor-dto';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private apiUrl = `${environment.apiUrl}/autores`;

  constructor(private http: HttpClient) {}

  getAutores(nome: string): Observable<AutorDto[]> {
    console.log(`${environment.apiUrl}/autores`);
    let params = new HttpParams().set('nome', nome);
    return this.http.get<ApiResponse<AutorDto[]>>(this.apiUrl, { params }).pipe(
      tap(response => console.log('API Response:', response)),
      map(response => response.data as AutorDto[])
    );
  }
}
