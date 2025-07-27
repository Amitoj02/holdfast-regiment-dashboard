import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {REGIMENT_TITLE} from './constants/regiment-details';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = REGIMENT_TITLE;
}
