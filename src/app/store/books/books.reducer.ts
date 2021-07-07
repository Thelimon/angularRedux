import { createReducer, on } from '@ngrx/store';
import { BookI, IBooksStore } from 'src/app/core/interfaces';
import { addBook, updateBook, updateName } from './books.action';

const INITIAL_STATE: IBooksStore = {
  books: [
    {
      name: 'Cien años de soledad',
      description:
        'El libro narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.',
      author: 'Gabriel García Marquez',
      editorial: 'Alfaguara',
      pages: 611,
      publicationDate: '2019',
      price: 65000,
      avalaible: true,
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
