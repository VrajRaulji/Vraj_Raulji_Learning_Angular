import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './models/book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vraj_Raulji_Learning_Angular';

  // Adding two new variables

  name: string = 'Vraj Raulji';
  age: number = 22;

  // Initializing an array with 6 instances of book
  books: Book[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', review: 'A great read!' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Historical Fiction', review: 'Powerful storytelling.' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 5, review: 'A chilling vision of the future.' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Literary Fiction', review: 'A thought-provoking novel.' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', rating: 4, review: 'A delightful classic.' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', review: 'An amazing adventure.' }
  ];
}
