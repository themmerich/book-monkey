import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book!: Book;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn') as string).subscribe(b => this.book = b);
  }

  getRating(num: number): number[] {
    const ratings: number[] = new Array(num);
    return ratings;
  }
  removeBook(): void {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn).subscribe(
        res => this.router.navigate(['../'], { relativeTo: this.route}));
    }
  }
}
