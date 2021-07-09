import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BooksFacade, rootReducer } from './store';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, BooksComponent, AddBookComponent, NavbarComponent],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    AppRoutingModule, 
    StoreModule.forRoot(rootReducer)],
  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
