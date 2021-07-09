import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookI } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})

// !If you wanna a normal use here, you should use this cmd: json-server --watch src/db/books.json
export class bookService {
  private urlAPI = "http://localhost:3000/books"
  
  constructor(private http: HttpClient) { }

  getAllBooks():Observable<BookI[]>{
    return this.http.get<BookI[]>(this.urlAPI);
  }
  
}