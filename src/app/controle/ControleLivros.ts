import { Livro } from './modelo/Livro';

const livros: Livro[] = [
  {
    codigo: 1,
    codEditora: 2588954,
    titulo: 'Vidas Secas',
    resumo:
      "'Vidas Secas' denuncia o descaso social e a exploração humana. O romance conta a história de uma família de retirantes do sertão brasileiro.",
    autores: ['Graciliano Ramos'],
  },
  {
    codigo: 2,
    codEditora: 6156253,
    titulo: 'O Assassinato No Expresso Oriente',
    resumo:
      'Hercule Poirot, detetive particular e oficial aposentado da polícia belga, toma o Expresso Taurus para Istambul.',
    autores: ['Agatha Christie'],
  },
  {
    codigo: 3,
    codEditora: 6156253,
    titulo: 'Morte no Nilo',
    resumo:
      'A tranquilidade de um cruzeiro de luxo pelo Nilo chega ao fim quando o corpo de Linnet Doyle, uma bela e jovem milionária, é descoberto em sua cabine.',
    autores: ['Agatha Christie'],
  },
];
export class ControleLivro {
  excluir(codigo: number) {
    throw new Error('Method not implemented.');
  }
  private livros: Livro[] = [];
  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  getLivros(): Livro[] {
    return this.livros;
  }
}
/*export class ControleLivro {
  incluir(livro: Livro): void {
    livros.push(livro);
  }
  getLivros(): Livro[] {
    return this.livros;
  }

  obterLivros(): Livro[] {
    return livros;
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}*/
