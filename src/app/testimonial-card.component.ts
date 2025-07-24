import { Component, Input } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  position?: string;
}

@Component({
  selector: 'app-testimonial-card',
  template: `
    <div class="testimonial-card">
      <div class="testimonial-image">
        <img [src]="testimonial.image" [alt]="testimonial.name">
      </div>
      <div class="testimonial-content">
        <p>"{{ testimonial.content }}"</p>
        <div class="testimonial-author">
          <h4>{{ testimonial.name }}</h4>
          <span *ngIf="testimonial.position">{{ testimonial.position }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
} 