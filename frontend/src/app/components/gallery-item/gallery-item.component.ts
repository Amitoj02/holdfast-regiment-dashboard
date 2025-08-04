import {Component} from '@angular/core';
import {IconComponent} from '../core/icon/icon.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

@Component({
    selector: 'gallery-item',
    imports: [
        IconComponent,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule
    ],
    templateUrl: './gallery-item.component.html',
    styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent {

}
