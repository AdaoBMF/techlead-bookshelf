import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf.service';
import { Book } from './../interface/book';

@Injectable({
  providedIn: 'root',
})
export class BookResolverGuard implements Resolve<Book> {
  constructor(private service: BookshelfService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    if (route.params && route.params['id']) {
      return this.service.loadBookById(route.params['id']);
    }
    return of({
      id: 0,
      title: '',
      author: '',
      uploadDate: new Date()
        .toJSON()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/'),
      user: {id:0,userName:'',mail:'',password:'',admin:0} 
    });
  }
}
