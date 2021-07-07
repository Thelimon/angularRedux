import { createReducer, on } from '@ngrx/store';
import { BookI, IBooksStore } from 'src/app/core/interfaces';
import { addBook, updateBook, updateName } from './books.action';

const INITIAL_STATE: IBooksStore = {
  books: [],
};

export const booksReducer = createReducer(
  INITIAL_STATE,
  on(addBook, (state, action) => ({
    ...state,
    books: [...state.books, action.newBook],
  })),
  on(updateName, (state, { name }) => ({ ...state, name }))
);
