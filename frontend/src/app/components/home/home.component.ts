import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'home',
    imports: [
        NgOptimizedImage, MatButtonModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
