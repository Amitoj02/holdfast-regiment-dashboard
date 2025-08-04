import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatList, MatListItem} from '@angular/material/list';
import {IconComponent} from '../core/icon/icon.component';

@Component({
  selector: 'current-servers',
    imports: [MatCardModule, MatButtonModule, MatListItem, MatList, IconComponent],
  templateUrl: './current-servers.component.html',
  styleUrl: './current-servers.component.scss'
})
export class CurrentServersComponent {

}
