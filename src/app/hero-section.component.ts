import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Learn from Industry Experts</h1>
          <p class="hero-subtitle">
            Développez vos compétences avec nos formations professionnelles
          </p>
          <button class="cta-button">Commencer maintenant</button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent { } 