import { Component, OnInit } from '@angular/core';
import { Testimonial } from './models/interfaces';
import { TestimonialService } from './services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  template: `
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Students Have to Say</h2>
        <div class="testimonials-grid" *ngIf="!loading">
          <app-testimonial-card 
            *ngFor="let testimonial of testimonials" 
            [testimonial]="testimonial">
          </app-testimonial-card>
        </div>
        <div class="loading" *ngIf="loading">
          <p>Chargement des témoignages...</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  loading = true;

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
    this.testimonialService.getTestimonials().subscribe({
      next: (testimonials) => {
        this.testimonials = testimonials;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading testimonials:', error);
        this.loading = false;
      }
    });
  }
} 