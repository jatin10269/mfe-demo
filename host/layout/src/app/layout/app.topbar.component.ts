import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectCartList } from 'libs/data/ngrx-cart/src';
import { LayoutService } from 'libs/theme/layout-config/src';
import { MenuItem } from 'primeng/api';
import { tap } from 'rxjs';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    cartItemsCount = 0;

    store: Store = inject(Store);

    constructor(public layoutService: LayoutService) {
      this.store.select(SelectCartList).pipe(
        tap(products => {
          this.cartItemsCount = products.length ?? 0;
        })
      ).subscribe();
    }
}
