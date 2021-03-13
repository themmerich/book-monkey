import { Component } from '@angular/core';
import {Book} from './shared/book';

type ViewState = 'list' | 'details';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book!: Book;
  viewState: ViewState = 'list';
  showList(): void {
    this.viewState = 'list';
  }
  showDetails(book: Book): void {
    this.book = book;
    this.viewState = 'details';
  }
}
