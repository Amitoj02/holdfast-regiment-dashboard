import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FlourishDividerComponent} from '../flourish-divider/flourish-divider.component';
import {NgStyle} from '@angular/common';

@Component({
    selector: 'home',
    imports: [
        MatButtonModule, FlourishDividerComponent, NgStyle
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
}
