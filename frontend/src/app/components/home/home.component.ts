import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FlourishDividerComponent} from '../flourish-divider/flourish-divider.component';

@Component({
    selector: 'home',
    imports: [
        MatButtonModule, FlourishDividerComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
