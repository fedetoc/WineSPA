import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  public menuClicked = false;
  constructor() {}

  ngOnInit(): void {}

  openCloseMenu(): void {
    this.menuClicked = !this.menuClicked;
  }
}
