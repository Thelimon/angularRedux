import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStateI } from 'src/app/core/interfaces';
import { booksSelector } from './books.selector';

@Injectable({
  providedIn: 'root'
})
export class BooksFacade {

public readonly books$ = this._store.select(booksSelector)
constructor(private readonly _store: Store<appStateI>) { }

}
