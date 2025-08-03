import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {IconComponent} from "../core/icon/icon.component";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'event-item',
    imports: [MatCardModule, MatButtonModule, MatChipsModule, IconComponent, MatIcon],
    templateUrl: './event-item.component.html',
    styleUrl: './event-item.component.scss'
})
export class EventItemComponent {

}
