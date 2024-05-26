import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControleLivro } from '../controle/ControleLivros';
import { ControleEditora } from '../controle/ControleEditora';
import { Livro } from '../controle/modelo/Livro';
import { Editora } from '../controle/modelo/Editora';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livros: Livro[] = [];
  livro: Livro = new Livro();
  opcoes: Editora[] = [];
  controleLivro: ControleLivro = new ControleLivro();
  controleEditora: ControleEditora = new ControleEditora();
  resumo: string = '';
  codEditora: number = 0;
  autores: string = '';
  string: string = '';

  constructor() {}

  ngOnInit(): void {
    this.carregarEditoras();
  }

  carregarEditoras() {
    this.opcoes = this.controleEditora.getEditoras();
  }

  incluirLivro(event: Event): void {
    event.preventDefault();
    this.livro.autores = this.autores
      .split(',')
      .map((autor: string) => autor.trim());
    this.controleLivro.incluir(this.livro);
    console.log('Livro incluído:', this.livro);
    // Resetar o formulário ou redirecionar para outra página, se necessário
  }

  tratarCombo(event: Event): void {
    console.log(
      'Combo selecionado:',
      (event.target as HTMLSelectElement).value
    );
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}
