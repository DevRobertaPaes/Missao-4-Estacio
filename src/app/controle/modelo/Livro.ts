// Livro.ts

export class Livro {
  editora: any;
  constructor(
    public codigo: number = 0,
    public titulo: string = '',
    public resumo: string = '',
    public codEditora: number = 0,
    public autores: string[] = []
  ) {}
}
/*export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
/*
new Livro {
  codigo: number, 
  codEditora: number, 
  titulo: string, 
  resumo: string, 
  autores: string[]
} */
