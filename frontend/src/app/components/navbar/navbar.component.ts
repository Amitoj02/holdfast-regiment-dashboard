import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {NavbarMobileComponent} from './navbar-mobile/navbar-mobile.component';

@Component({
    selector: 'navbar',
    imports: [
        NgOptimizedImage,
        MatIconButton,
        MatIcon,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    isMobile: boolean = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private _bottomSheet: MatBottomSheet
    ) {
        this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
            this.isMobile = result.matches;
        });
    }

    openMobileNavbar(): void {
        this._bottomSheet.open(NavbarMobileComponent, {
            autoFocus: false,
        });
    }

}
