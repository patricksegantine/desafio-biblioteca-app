import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AutoresService } from '../../../services/autores.service';
import { AutorDto } from '../../../models/autor-dto';

@Component({
  selector: 'app-cad-autores',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, HttpClientModule],
  templateUrl: './cad-autores.component.html',
  styleUrls: ['./cad-autores.component.css']
})
export class CadAutoresComponent {
  nome: string = '';
  autores: AutorDto[] = [];

  constructor(private autoresService: AutoresService) {}

  pesquisarAutores() {
    this.autoresService.getAutores(this.nome).subscribe(response => {
      this.autores = response;
    });
  }
}
