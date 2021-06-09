import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men-page',
  templateUrl: './men-page.component.html',
  styleUrls: ['./men-page.component.scss']
})
export class MenPageComponent implements OnInit {


  public title = "For men";
  public background = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-lead-1576249557.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
