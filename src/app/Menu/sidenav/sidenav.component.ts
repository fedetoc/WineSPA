import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnDestroy {
  @Input() opened = true;
  mediaMatch: MediaQueryList;
  constructor(private media: MediaMatcher) {
    this.mediaMatch = this.media.matchMedia('(max-width: 60em)');
  }

  ngOnDestroy(): void {}
}
