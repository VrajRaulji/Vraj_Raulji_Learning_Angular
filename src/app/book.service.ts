import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_CONTENT } from './data/mock-content'; // Import the mock content

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Method to get all books
  getBooks(): Observable<any> {
    return of(MOCK_CONTENT);
  }

  // Method to get a book by ID
  getBookById(id: number): Observable<any> {
    const book = MOCK_CONTENT.find((b) => b.id === id);
    return of(book);
  }

  // Method to add a new book
  addBook(newBook: any): Observable<any[]> {
    MOCK_CONTENT.push(newBook);
    return of(MOCK_CONTENT);
  }

  // Method to update an existing book by ID
  updateBook(updatedBook: any): Observable<any[]> {
    const index = MOCK_CONTENT.findIndex((b) => b.id === updatedBook.id);
    if (index !== -1) {
      MOCK_CONTENT[index] = updatedBook;
    }
    return of(MOCK_CONTENT);
  }

  // Method to delete a book by ID
  deleteBook(id: number): Observable<any> {
    const index = MOCK_CONTENT.findIndex((b) => b.id === id);
    let deletedBook = null;
    if (index !== -1) {
      deletedBook = MOCK_CONTENT.splice(index, 1)[0];
    }
    return of(deletedBook);
  }
}