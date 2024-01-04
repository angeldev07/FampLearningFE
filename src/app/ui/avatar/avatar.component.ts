import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Shape, Size} from './avatar'
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {

    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() image: string = '';
    @Input() size: Size = 'normal';
    @Input() shape: Shape = 'circle';

    constructor() {
    }

    sizePx() {
        switch (this.size) {
            case 'normal':
                return 'w-[2rem] h-[2rem] text-[1rem]';
            case 'large':
                return 'w-[3rem] h-[3rem] text-[21px]';
            case 'xlarge':
                return 'w-[4rem] h-[54rem] text-[28px] ';
            default:
                return 'w-[2rem] h-[2rem] text-[1rem]';
        }
    }
    shapePx() {
        switch (this.shape) {
            case 'circle':
                return 'rounded-full';
            case 'square':
                return 'rounded-md';
            default:
                return 'rounded-full';
        }
    }
}
