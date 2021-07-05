import { createAction, props } from '@ngrx/store';
import { BookI } from 'src/app/core/interfaces';

export const updateBook = createAction('[User] Update User', props<BookI>());
export const updateName = createAction(
  '[User] Update Name',
  props<{ name: string }>()
);