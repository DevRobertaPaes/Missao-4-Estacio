import { Component, OnInit } from '@angular/core';
import { ControleLivro } from '../controle/ControleLivros';
import { ControleEditora } from '../controle/ControleEditora';
import { Livro } from '../controle/modelo/Livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  /*controleLivros: ControleLivro = new ControleLivro();
  controleEditora: ControleEditora = new ControleEditora();*/

  constructor(private controleLivro: ControleLivro) {}
  ngOnInit(): void {
    this.livros = this.controleLivro.getLivros();
  }

  getNomeEditora(codEditora: number): string {
    return 'Nome da Editora';
  }
  excluirLivro(codigo: number): void {
    this.controleLivro.excluir(codigo);
    this.obterLivros(); // Atualiza a lista após excluir
  }
  obterLivros() {
    throw new Error('Method not implemented.');
  }
}
/* ngOnInit(): void {
    this.obterLivros();
  }

  obterLivros(): void {
    this.livros = this.controleLivro.obterLivros();
    this.livros = this.controleLivro.getLivros();
  }

  excluirLivro(codigo: number): void {
    this.controleLivro.excluir(codigo);
    this.obterLivros(); // Atualiza a lista após excluir
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}*/
