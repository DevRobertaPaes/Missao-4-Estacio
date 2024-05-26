import { Component, OnInit } from '@angular/core';
import { Livro } from '../controle/modelo/Livro';
import { ControleLivro } from '../controle/ControleLivros';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  getNomeEditora(arg0: number) {
    throw new Error('Method not implemented.');
  }
  livros: Livro[] = [];

  constructor(private controleLivro: ControleLivro) {}

  ngOnInit(): void {
    this.livros = this.controleLivro.getLivros();
  }

  excluirLivro(codigo: number): void {
    this.controleLivro.excluir(codigo);
    this.livros = this.controleLivro.getLivros(); // Atualiza a lista após excluir
  }
}
