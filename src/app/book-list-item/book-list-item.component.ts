import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss'] // Ensure this is 'styleUrls' not 'styleUrl'
})
export class BookListItemComponent {
  @Input() book: any;  // Assuming 'book' is an object with your content
  @Input() isEven!: boolean; // New property to accept whether the item is even

  get backgroundColor() {
    return this.isEven ? 'pink' : 'teal'; // Set color based on even/odd
  }
}

