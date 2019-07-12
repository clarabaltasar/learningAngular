import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
    /*This is were we can connect data from other technologies
  We just have to store data in some temporaly arrays structures.*/
  booksArray: Book[] = [
    {id:1, title: "title 1", author: "author1", url: "site1"},
    {id:2, title: "title 2", author: "author2", url: "site2"},
    {id:3, title: "title 3", author: "author3", url: "site3"},
  ];

  selectedItem: Book = new Book();

  openForEdit(book: Book){
    this.selectedItem=book;

  }
  addOrEdit(){
    if(this.selectedItem.id == 0){
      this.selectedItem.id = this.booksArray.length +1;
      this.booksArray.push(this.selectedItem);
    }
    
    this.selectedItem = new Book()
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.booksArray = this.booksArray.filter(x => x ! = this.selectedItem);
    this.selectedItem = new Book()
    }
  }


}
