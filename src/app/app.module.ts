import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleLivro } from './controle/ControleLivros';

@NgModule({
  declarations: [AppComponent, HomeComponent, LivroListaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ControleLivro],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivroListaComponent as CatalogoComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent as NovoComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [AppComponent, CatalogoComponent, NovoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}*/
