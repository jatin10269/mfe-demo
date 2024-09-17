import { Component, ElementRef } from '@angular/core';
import { LayoutService } from 'libs/theme/layout-config/src';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

