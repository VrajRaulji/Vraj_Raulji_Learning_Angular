import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book!: any; // Accepts book input from parent
  @Input() isEven!: boolean; // Accepts isEven input from parent
}

