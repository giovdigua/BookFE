import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] =[
    { id: 1, title: "Book one", author: "Author one" }, 
    { id: 2, title: "Book two", author: "Author two" }, 
    { id: 3, title: "Book three", author: "Author three" }, 
  ];
}
