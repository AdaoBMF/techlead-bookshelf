import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './interface/book';
import { User } from './interface/user';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  private readonly API = environment.API;
  constructor(private http: HttpClient) {}

  listBooks() {
    return this.http.get<Book[]>(`${this.API}books`).pipe(tap(console.log));
  }

  listUsers() {
    return this.http
      .get<User[]>(`${this.API}users`)
      .pipe(delay(2000), tap(console.log));
  }

  loadBookById(id: number) {
    return this.http.get<Book>(`${this.API}books/${id}`).pipe(take(1));
  }
  loadUserById(id: number) {
    return this.http.get<User>(`${this.API}books/${id}`).pipe(take(1));
  }

  private addBook<Book>(book: Book) {
    return this.http.post<Book>(`${this.API}books`, book).pipe(take(1));
  }

  private updateBook(book: Book) {
    return this.http.put(`${this.API}books/${book.id}`, book).pipe(take(1));
  }

  saveBook(book: Book){
    if(book.id){
      return this.updateBook(book);
    }
    return this.addBook(book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.API}books/${id}`).pipe(take(1));
  }
}
