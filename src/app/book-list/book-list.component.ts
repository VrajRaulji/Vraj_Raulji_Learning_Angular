import { Component } from '@angular/core';

interface BookItem {
  title: string;
  author: string;
  genre: string;
  review: string;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  // Define an array of book items
  bookList: BookItem[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', review: 'A masterpiece of 20th-century literature.' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Historical Fiction', review: 'A profound and powerful story.' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', review: 'A chilling depiction of a totalitarian society.' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', review: 'A witty and romantic classic.' }
  ];
}

