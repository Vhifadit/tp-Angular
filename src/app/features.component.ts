import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card.component';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <app-feature-card 
            *ngFor="let feature of features" 
            [feature]="feature">
          </app-feature-card>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: 'Actionable Training',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'training-icon'
    },
    {
      title: 'Interesting Quizzes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'quiz-icon'
    },
    {
      title: 'Premium Material',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'material-icon'
    }
  ];
} 