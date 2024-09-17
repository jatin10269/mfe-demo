import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    AppLayoutModule,
    CommonModule
  ],
  selector: 'mfe-demo-layout-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout';
}
