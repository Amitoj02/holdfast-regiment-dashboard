import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {GalleryItemComponent} from '../gallery-item/gallery-item.component';

@Component({
    selector: 'gallery-page',
    imports: [
        MatIconModule, GalleryItemComponent
    ],
    templateUrl: './gallery-page.component.html',
    styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {
}
