import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {EventItemComponent} from '../event-item/event-item.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'events-page',
    imports: [MatCardModule, MatButtonModule, EventItemComponent, MatIcon],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

}
