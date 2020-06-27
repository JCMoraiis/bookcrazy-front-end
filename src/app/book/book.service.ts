import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './Book';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Book[];

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(url + '/books');
  }
}
