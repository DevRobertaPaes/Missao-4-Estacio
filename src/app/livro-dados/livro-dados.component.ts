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
  livro: Livro = new Livro(0, '', '', 0, []);
  opcoes: Editora[] = [];
  controleLivro: ControleLivro = new ControleLivro();
  controleEditora: ControleEditora = new ControleEditora();
  autores: string = '';
  codEditora: any;
  resumo: any;

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
  }

  tratarCombo(event: Event): void {
    this.livro.codEditora = parseInt(
      (event.target as HTMLSelectElement).value,
      10
    );
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}

/*import { Component, OnInit } from '@angular/core';
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
  controleLivros: ControleLivro = new ControleLivro();
  controleEditora: ControleEditora = new ControleEditora();
  resumo: string = '';
  codEditora: number = 0;
  autores: string = '';

  constructor(private controleLivro: ControleLivro) {}

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
    this.livro.codEditora = this.codEditora;
    this.livro.resumo = this.resumo;
    this.controleLivro.incluir(this.livro);
    console.log('Livro incluído:', this.livro);
    this.livro = new Livro(0, '', '', 0, []); // Resetar o formulário
    this.autores = '';
    this.resumo = '';
    this.codEditora = 0;
  }

  tratarCombo(event: Event): void {
    this.codEditora = Number((event.target as HTMLSelectElement).value);
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}

/*
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

/*import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.carregarEditoras();
  }

  carregarEditoras() {
    this.opcoes = this.controleEditora.getEditoras();
  }

  incluirLivro(event: Event): void {
    event.preventDefault();
    this.livro.autores = this.livro.autores
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
}*/
