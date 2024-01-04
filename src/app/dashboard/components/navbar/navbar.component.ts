// angular imports
import {ChangeDetectionStrategy, Component, EventEmitter, Output, Input} from '@angular/core';

// material import
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
// custom imports
import {AvatarComponent} from "../../../ui/avatar/avatar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AvatarComponent,
    MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styles: `
    .mat-toolbar-single-row  {
      height: auto;
      padding: 16px;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  @Input() opened: boolean = false;
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter(false);

  constructor() {
  }

  /*
  * @method toggleSidebar
   */
  open() {
    this.opened = !this.opened;
    this.openedChange.emit(this.opened);
    localStorage.setItem('opened',this.opened.toString());
  }

}
