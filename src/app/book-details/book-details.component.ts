import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book!: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book = this.bs.getSingle(params.get('isbn') as string);
  }

  getRating(num: number): number[] {
    const ratings: number[] = new Array(num);
    return ratings;
  }
}
