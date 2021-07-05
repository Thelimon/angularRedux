import { Action, ActionReducerMap } from '@ngrx/store';
import { appStateI } from '../core/interfaces';
import { booksReducer } from './books/books.reducer';

export const rootReducer: ActionReducerMap<appStateI, Action> = {
  book: booksReducer,
};