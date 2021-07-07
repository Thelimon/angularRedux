import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appStateI, IBooksStore } from 'src/app/core/interfaces';

export const booksStateSelector = createFeatureSelector<appStateI, IBooksStore>(
  'booksState'
);

export const booksSelector = createSelector(booksStateSelector, bookState => bookState.books);
