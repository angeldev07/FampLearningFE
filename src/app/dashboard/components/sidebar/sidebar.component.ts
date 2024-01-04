import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { sidebarOptions } from './const'
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  protected readonly sidebarOptions = sidebarOptions;
}

