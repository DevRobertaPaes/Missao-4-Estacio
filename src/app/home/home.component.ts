import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.carregarHomeComponent();
  }

  carregarHomeComponent() {
    console.log('Home component carregado');
    // Se houver lógica adicional, adicione aqui
  }
}
