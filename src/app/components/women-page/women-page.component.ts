import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.scss']
})
export class WomenPageComponent implements OnInit {

  public title = "For Women"
  public background = "https://previews.123rf.com/images/evaletova/evaletova1111/evaletova111100030/11514447-winter-clothes-for-women.jpg"
  constructor() { }


  ngOnInit(): void {
  }

}
