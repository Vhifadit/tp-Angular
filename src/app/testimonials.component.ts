import { Component } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  position?: string;
}

@Component({
  selector: 'app-testimonials',
  template: `
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Students Have to Say</h2>
        <div class="testimonials-grid">
          <app-testimonial-card 
            *ngFor="let testimonial of testimonials" 
            [testimonial]="testimonial">
          </app-testimonial-card>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      content: 'Amazing courses! Really helped me advance my career.',
      image: 'assets/images/testimonial1.jpg',
      position: 'Marketing Manager'
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'The best online learning platform I have used.',
      image: 'assets/images/testimonial2.jpg',
      position: 'Digital Specialist'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      content: 'Excellent content and professional instructors.',
      image: 'assets/images/testimonial3.jpg',
      position: 'Content Creator'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      content: 'Highly recommend for anyone looking to upskill.',
      image: 'assets/images/testimonial4.jpg',
      position: 'Social Media Manager'
    }
  ];
} 