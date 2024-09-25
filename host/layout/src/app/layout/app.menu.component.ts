import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from 'libs/theme/layout-config/src';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      // {
      //   label: 'Home',
      //   items: [
      //     { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      //   ],
      // },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Product List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/products'],
            id: 'PRODUCTS__menu'
          },
          {
            label: 'Cart',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/cart'],
            id: 'CART__menu'
          },
        ],
      },
    ];
  }
}
