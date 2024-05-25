import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class MenuComponent {
  [x: string]: any;
  hoverHome: boolean = false;
  hoverLivroLista: boolean = false;
  hoverLivroDados: boolean = false;

  setHoverHome(state: boolean) {
    this.hoverHome = state;
  }

  setHoverLivroLista(state: boolean) {
    this.hoverLivroLista = state;
  }

  setHoverLivroDados(state: boolean) {
    this.hoverLivroDados = state;
  }
}
