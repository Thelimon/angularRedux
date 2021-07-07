import { createAction, props } from '@ngrx/store';
import { BookI } from 'src/app/core/interfaces';

export const addBook = createAction(
  '[User] Add book',
  props<{ newBook: BookI }>()
);

export const updateBook = createAction('[User] Update book', props<BookI>());

export const updateName = createAction(
  '[User] Update Name',
  props<{ name: string }>()
);
