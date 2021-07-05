import { createReducer, on } from "@ngrx/store";
import { BookI } from "src/app/core/interfaces";
import { updateBook, updateName } from ".";

const INITIAL_STATE: BookI = {
    name: '',
    author: ''
  };
  
  export const booksReducer = createReducer(
    INITIAL_STATE,
    on(updateBook, (state, { name, author }) => ({ name, author })),
    on(updateName, (state, { name }) => ({ ...state, name }))
  );