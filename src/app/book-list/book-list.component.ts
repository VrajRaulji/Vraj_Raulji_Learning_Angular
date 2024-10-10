import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BookListItemComponent } from '../book-list-item/book-list-item.component'; // Import BookListItemComponent
import { MOCK_CONTENT } from '../data/mock-content';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent], // Include CommonModule and BookListItemComponent
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = MOCK_CONTENT;
}

