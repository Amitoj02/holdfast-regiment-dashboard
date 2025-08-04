import { Component } from '@angular/core';
import {JoinFormComponent} from '../forms/join-form/join-form.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'join-page',
    imports: [
        JoinFormComponent,
        MatButtonModule
    ],
  templateUrl: './join-page.component.html',
  styleUrl: './join-page.component.scss'
})
export class JoinPageComponent {

}
