import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BookService } from '../book.service'; // Import the BookService

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}