import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  // Define an array of books
  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', review: 'A great read!' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Historical Fiction', review: 'Powerful storytelling.' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', review: 'A chilling vision of the future.' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Literary Fiction', review: 'A thought-provoking novel.' }
  ];
}

