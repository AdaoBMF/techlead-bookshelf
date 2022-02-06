import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book-service.service';
import { UserService } from './../../user-service.service';
import { User } from './../../interface/user';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  
  loggedUser!: User;
  today!: string;
  form!: FormGroup;
  successMsg!: string;
  submitted: boolean = false;
  isUpdate!: boolean;
  isSent!: boolean;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private userService: UserService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.route.snapshot.data['loggedUser'];    
    const book = this.route.snapshot.data['book'];

    this.isUpdate = book.id != 0;
    this.successMsg = this.isUpdate
      ? 'Livro editado com sucesso'
      : 'Livro enviado com sucesso'
    ;

    this.isSent = false;
    this.today = new Date().toJSON();

    this.form = this.fb.group({
      id: [this.isUpdate ? book.id : null],
      title: [
        this.isUpdate ? book.title : null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      author: [
        this.isUpdate ? book.author : null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      uploadDate: [this.isUpdate ? book.uploadDate : this.today],
      user: [this.isUpdate ? book.user : this.loggedUser],
    });
  }
  updateForm(book: any) {
    this.form.patchValue({
      id: book.id,
      title: book.title,
      author: book.author,
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid){
      this.bookService.save(this.form.value).subscribe(
        success => {
          this.isSent = true;
          setTimeout(() => this.location.back(), 3000);
        },
        error => console.log('Erro'),
      );        
    }
  }

  onCancel() {
    this.submitted=false;
    this.form.reset();
  }
  backPage() {
    this.location.back();
  }

}
