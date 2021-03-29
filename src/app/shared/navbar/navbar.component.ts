import { Component, OnInit } from '@angular/core';
import {faFilm} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  constructor() { }

  filmIcon = faFilm
  ngOnInit(): void {
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
