import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  constructor() {}

  bookForm = new FormGroup({
    bookId: new FormControl('', [
      Validators.required, 
      Validators.minLength(1), 
      Validators.maxLength(9)
    ]),
    bookTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(25),
    ]),
    bookDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    bookPages: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    bookYear: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ])
  });

  ngOnInit(): void {}

  get id() {
    return this.bookForm.get('bookId');
  }

  onResetForm() {
    this.bookForm.reset();
  }

  onSaveForm() {
    if (this.bookForm.valid) {
      console.log('No válido');
    } else {
      console.log('Válido');
    }
  }
}
