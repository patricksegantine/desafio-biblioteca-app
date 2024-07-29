import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { ApiResponse, Paginated } from '../models/api-response';
import { LivroDto } from '../models/livro-dto';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private apiUrl = `${environment.apiUrl}/livros`;

  constructor(private http: HttpClient) {}

  pesquisarLivros(titulo: string,
                  assunto: string,
                  autor: string,
                  editora: string,
                  anoPublicacao: string,
                  pageNumber: number,
                  pageSize: number): Observable<Paginated<LivroDto>> {
    let params = new HttpParams()
      .set('titulo', titulo)
      .set('assunto', assunto)
      .set('autor', autor)
      .set('editora', editora)
      .set('anoPublicacao', anoPublicacao)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

      return this.http.get<ApiResponse<Paginated<LivroDto>>>(this.apiUrl, { params }).pipe(
        tap(response => console.log('API Response:', response)),
        map(response => response.data as Paginated<LivroDto>)
      );
  }
}
