import {Component, inject} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'navbar-mobile',
    imports: [MatListModule, MatIcon],
    templateUrl: './navbar-mobile.component.html',
    styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {

    private _bottomSheetRef = inject<MatBottomSheetRef<NavbarMobileComponent>>(MatBottomSheetRef);

    constructor() {

    }

    close(): void {
        this._bottomSheetRef.dismiss();
    }
}
