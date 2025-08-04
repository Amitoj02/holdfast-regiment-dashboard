import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'join-form',
    imports: [MatFormFieldModule, MatIconModule, MatInput, MatRadioModule],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss'
})
export class JoinFormComponent {

}
