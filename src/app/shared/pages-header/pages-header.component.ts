import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss']
})
export class PagesHeaderComponent implements OnInit {
   backgroundImage:String;
   Discription:String;
   title:string;
   @Input('backgroundImage')
   public set background(v : string) {
     this.backgroundImage = v;
   }
  @Input("discription")
  public set value(v : string) {
    this.Discription = v;
  }
  @Input("title")
  public set titleMethod(v : string) {
    this.title = v;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
