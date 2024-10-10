import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_CONTENT } from './data/mock-content';

@Injectable({

  providedIn: 'root'

})
export class BookService {
  getBooks(): Observable<any> {

    return of(MOCK_CONTENT);

  }

}


