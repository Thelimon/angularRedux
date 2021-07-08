import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"books", component:BooksComponent},
  {path:"add-book", component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
