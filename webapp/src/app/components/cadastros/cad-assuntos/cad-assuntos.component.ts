import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AssuntosService } from '../../../services/assuntos.service';
import { AssuntoDto } from '../../../models/assunto-dto';

@Component({
  selector: 'app-cad-assuntos',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, HttpClientModule],
  templateUrl: './cad-assuntos.component.html',
  styleUrl: './cad-assuntos.component.css'
})
export class CadAssuntosComponent {
  descricao: string = '';
  assuntos: AssuntoDto[] = [];

  constructor(private assuntosService: AssuntosService) {}

  pesquisarAssuntos() {
    this.assuntosService.getAssuntos(this.descricao).subscribe(response => {
      this.assuntos = response;
    });
  }
}
