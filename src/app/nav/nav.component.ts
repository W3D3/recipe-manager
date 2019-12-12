import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  name: 'Recipe Manager';
  @Output() routeChanged = new EventEmitter<string>();
  openNav = false;

  navigateToRoute(route: string, event: Event) {
    this.routeChanged.emit(route);
    // todo set nav to active
  }

}
