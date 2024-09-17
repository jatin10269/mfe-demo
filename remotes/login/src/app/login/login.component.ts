import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { LayoutService } from 'libs/theme/layout-config/src';

@Component({
    selector: 'login-mfe-main',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [
      CommonModule,
      ButtonModule,
      CheckboxModule,
      InputTextModule,
      FormsModule,
      PasswordModule,
      RouterModule
    ],
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) { }
}
