import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import {sidebarOptions} from './const'
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  protected readonly sidebarOptions = sidebarOptions;

  constructor() {
  }

}

