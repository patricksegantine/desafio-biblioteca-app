import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LivrosService } from '../../../services/livros.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroDto } from '../../../models/livro-dto';

@Component({
  selector: 'app-cad-livros',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, HttpClientModule],
  templateUrl: './cad-livros.component.html',
  styleUrl: './cad-livros.component.css'
})
export class CadLivrosComponent {
  titulo: string = '';
  assunto: string = '';
  autor: string = '';
  editora: string = '';
  anoPublicacao: string = '';
  pageNumber: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;

  livros: LivroDto[] = [];

  constructor(private livrosService: LivrosService) {}

  pesquisarLivros() {
    this.livrosService
      .pesquisarLivros(this.titulo, this.assunto, this.autor, this.editora, this.anoPublicacao, this.pageNumber, this.pageSize)
      .subscribe(response => {
        this.livros = response.items;
        this.totalRecords = response.total;
      });
  }

  cadastrarLivro(){
    //
  }
}
