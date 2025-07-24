import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <h2>LearnDash Academy</h2>
          </div>
          <ul class="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { } 