import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
declare var $: any;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 0;
  constructor(private store: Store<any>) {
    this.store.subscribe(data => this.count = data.counter.n);
  }


  increase() { this.store.dispatch({ type: 'increament' }) }

  decrease() {
    this.store.dispatch({ type: 'decreament' })
  }


  ngOnInit(): void { }


}
