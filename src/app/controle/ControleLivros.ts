import { Injectable } from '@angular/core';
import { Livro } from './modelo/Livro';
import { root } from 'postcss';

@Injectable({
  providedIn: 'root',
})
export class ControleLivro {
  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 2588954,
      titulo: 'Vidas Secas',
      resumo:
        "'Vidas Secas' denuncia o descaso social e a exploração humana. O romance conta a história de uma família de retirantes do sertão brasileiro.",
      editora: 'Editora Andrade',
      autores: ['Graciliano Ramos'],
    },
    {
      codigo: 2,
      codEditora: 6156253,
      titulo: 'O Assassinato No Expresso Oriente',
      resumo:
        'Hercule Poirot, detetive particular e oficial aposentado da polícia belga, toma o Expresso Taurus para Istambul.',
      editora: 'CIA das Letras',
      autores: ['Agatha Christie'],
    },
    {
      codigo: 3,
      codEditora: 6156253,
      titulo: 'Morte no Nilo',
      resumo:
        'A tranquilidade de um cruzeiro de luxo pelo Nilo chega ao fim quando o corpo de Linnet Doyle, uma bela e jovem milionária, é descoberto em sua cabine.',
      editora: 'Pedras Pesadas',
      autores: ['Agatha Christie'],
    },
  ];
  constructor() {}

  excluir(codigo: number): void {
    this.livros = this.livros.filter((livro) => livro.codigo !== codigo);
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  getLivros(): Livro[] {
    return this.livros;
  }
}
