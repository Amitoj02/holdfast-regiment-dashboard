import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {EventsPageComponent} from './components/events-page/events-page.component';
import {GalleryPageComponent} from './components/gallery-page/gallery-page.component';
import {JoinPageComponent} from './components/join-page/join-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'events',
        component: EventsPageComponent
    },
    {
        path: 'gallery',
        component: GalleryPageComponent
    },
    {
        path: 'join',
        component: JoinPageComponent
    }
];
