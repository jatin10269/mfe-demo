import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  selector: 'mfe-demo-product-mfe-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'login';
}
