import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { Book } from '../../interface/book';
import { User } from '../../interface/user';
import { BookService } from './../../book-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  
  loggedUser!: User;
  books$: Observable<Book[]> | undefined;
  error$ = new Subject<boolean>();
  targetBook!: Book;
  sortParam: any; 

  @Input() allBooks: boolean = true;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService    
  ) { }

  ngOnInit(): void {
    this.sortParam = this.compareTitle;
    this.onRefresh();
  }

  onRefresh(){
    this.loggedUser = this.route.snapshot.data['loggedUser'];
    
    this.books$ = this.bookService.list()
    .pipe(
      tap( (books: Book[]) => books.sort(this.sortParam)
      ),
      catchError( e => {
        console.log(e);
        this.error$.next(true);
        return of();
      })
    );
    
    
  }

  onEdit(id: number) {
    this.router.navigate(['upload',this.loggedUser.mail,id]);
  }

  onDelete(book: Book) {
    this.targetBook = book;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.bookService.delete(this.targetBook.id)
    .subscribe(
      success => this.onRefresh(),
      error => console.log(error),
    );
    this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  showAll() {
    this.allBooks = !this.allBooks;
  }

  onUpload() {
    this.router.navigate(['upload',this.loggedUser.mail]);
  }

  userBook(bookUserId: number, loggedUserId: number): boolean {
    return bookUserId === loggedUserId;
  }

  logout() {
    this.router.navigate(['/']);
  }

  orderByTitle() {
    this.sortParam = this.compareTitle;
    this.onRefresh();
  }
  
  orderByAuthor() {
    this.sortParam = this.compareAuthor;
    this.onRefresh();
  }

  orderByUserName() {
    this.sortParam = this.compareUserName;
    this.onRefresh();
  }

  orderByUploadDate() {
    this.sortParam = this.compareUploadDate;
    this.onRefresh();
  }

  compareTitle = ( a: Book, b: Book ) => {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  
  compareAuthor = ( a: Book, b: Book ) => {
    if ( a.author < b.author ){
      return -1;
    }
    if ( a.author > b.author ){
      return 1;
    }
    return 0;
  }
  
  compareUserName = ( a: Book, b: Book ) => {
    if ( a.user.userName < b.user.userName ){
      return -1;
    }
    if ( a.user.userName > b.user.userName ){
      return 1;
    }
    return 0;
  }
  
  compareUploadDate = ( a: Book, b: Book ) => {
    if ( a.uploadDate < b.uploadDate ){
      return -1;
    }
    if ( a.uploadDate > b.uploadDate ){
      return 1;
    }
    return 0;
  }

}
