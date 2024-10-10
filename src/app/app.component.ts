import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BookListComponent } from './book-list/book-list.component'; 
import { BookService } from './book.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BookListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vraj_Raulji_Learning_Angular';
  selectedBook: any; 
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookById(1).subscribe((book) => {
      this.selectedBook = book;
    });
  }
}
