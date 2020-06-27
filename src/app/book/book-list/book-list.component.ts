import { Component, OnInit } from '@angular/core';
import { ProductService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-product-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private service: ProductService) { }

  ngOnInit(): void {

    this.service.getBooks()
      .subscribe(books => this.books = books);
  }
}
