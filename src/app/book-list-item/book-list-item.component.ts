import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book: any; // This will hold the book data passed from the parent component
}

