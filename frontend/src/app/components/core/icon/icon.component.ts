import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-icon',
    imports: [
        NgStyle
    ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
    @Input() width: string = '18px';
    @Input() height: string = '18px';
    @Input() src: string = '';
    @Input() alt: string = '';
    @Input() type: 'svg' | 'png' = 'png';
}
