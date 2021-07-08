import { createReducer, on } from '@ngrx/store';
import { BookI, IBooksStore } from 'src/app/core/interfaces';
import { addBook, updateBook, updateName } from './books.action';

const INITIAL_STATE: IBooksStore = {
  books: [
    {
      id:0,
      name:"Dónde están los paraguas",
      description: "Lorem piscldddslfnsdlfksndfksndfñslfnañfknñdngñdlgknsñ",
      pages: 540,
      publicationDate: "2012"
    },
  ],
};

export const booksReducer = createReducer(
  INITIAL_STATE,
  on(addBook, (state, action) => ({
    ...state,
    books: [...state.books, action.newBook],
  })),
  on(updateName, (state, { name }) => ({ ...state, name }))
);
