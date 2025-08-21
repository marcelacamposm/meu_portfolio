import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterModule,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  title = 'MEU_PORTFOLIO';
}