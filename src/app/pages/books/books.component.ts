import { Component, OnInit } from '@angular/core';
import { BookI } from 'src/app/core/interfaces';
import { BooksFacade } from '../../store';
import { bookService } from './books.service.ts.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books$ = this._booksFacade.books$;
  public book:BookI[] = [];

  constructor(
    private readonly _booksFacade: BooksFacade, 
    private booksData:bookService) { }

  ngOnInit(): void {
    this.booksData.getAllBooks().subscribe(data => (this.book = data));
  }

}
