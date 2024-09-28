import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BookListItemComponent } from '../book-list-item/book-list-item.component'; // Import BookListItemComponent

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent], // Include CommonModule and BookListItemComponent
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', review: 'A great read!' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Historical Fiction', review: 'Powerful storytelling.' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 5, review: 'A chilling vision of the future.' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Literary Fiction', review: 'A thought-provoking novel.' }
  ];
}

