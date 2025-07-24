import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  template: `
    <section class="partners-section">
      <div class="container">
        <h2 class="section-title">Industry Partners</h2>
        <div class="partners-grid">
          <!-- Logos des partenaires seront ajoutés ici -->
          <div class="partner-logo" *ngFor="let partner of partners">
            <img [src]="partner.logo" [alt]="partner.name">
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partners = [
    { name: 'Partner 1', logo: 'assets/images/partner1.png' },
    { name: 'Partner 2', logo: 'assets/images/partner2.png' },
    { name: 'Partner 3', logo: 'assets/images/partner3.png' }
  ];
} 