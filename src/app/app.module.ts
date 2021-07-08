import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BooksFacade, rootReducer } from './store';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, AddBookComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer)],
  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
