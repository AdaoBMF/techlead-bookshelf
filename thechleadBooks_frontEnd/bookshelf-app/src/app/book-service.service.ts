import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Book } from './interface/book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService extends CrudService<Book> {

  constructor(protected override http: HttpClient) {
    super(http, environment.API, "books");
  }
}
