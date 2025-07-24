import { Component, Input } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-feature-card',
  template: `
    <div class="feature-card">
      <div class="feature-icon">
        <i [class]="feature.icon"></i>
      </div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  `,
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
} 