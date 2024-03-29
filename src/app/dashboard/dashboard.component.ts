import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  openedSideNav: boolean = true;
  constructor() {
  }

  ngOnInit() {

    this.openedSideNav = JSON.parse(localStorage.getItem('opened') ?? 'true');
  }
}
