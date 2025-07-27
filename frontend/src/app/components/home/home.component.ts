import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FlourishDividerComponent} from '../flourish-divider/flourish-divider.component';
import {NgStyle} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {REGIMENT_TITLE} from '../../constants/regiment-details';
import {MatRipple} from '@angular/material/core';

@Component({
    selector: 'home',
    imports: [
        MatButtonModule, FlourishDividerComponent, NgStyle, NavbarComponent, MatRipple
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    protected readonly REGIMENT_TITLE = REGIMENT_TITLE;
}
