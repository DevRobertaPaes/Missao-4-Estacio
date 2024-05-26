import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent as CatalogoComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent as NovoComponent } from './livro-dados/livro-dados.component';
import { ControleLivro } from './controle/ControleLivros';

@NgModule({
  declarations: [AppComponent, CatalogoComponent, NovoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ControleLivro],
  bootstrap: [AppComponent],
})
export class AppModule {}
