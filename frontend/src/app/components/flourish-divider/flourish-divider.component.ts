import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: 'flourish-divider',
    imports: [
        NgStyle
    ],
    templateUrl: './flourish-divider.component.html',
    styleUrl: './flourish-divider.component.scss'
})
export class FlourishDividerComponent {
    @Input() width: string = '200px';
    @Input() maxWidth: string = '100%';

    // TODO: need default width for mobile
    readonly defaultMaxWidth = '500px';
}
