import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      content: 'Amazing courses! Really helped me advance my career.',
      image: 'assets/images/testimonial1.jpg',
      position: 'Marketing Manager',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'The best online learning platform I have used.',
      image: 'assets/images/testimonial2.jpg',
      position: 'Digital Specialist',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Johnson',
      content: 'Excellent content and professional instructors.',
      image: 'assets/images/testimonial3.jpg',
      position: 'Content Creator',
      rating: 4
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      content: 'Highly recommend for anyone looking to upskill.',
      image: 'assets/images/testimonial4.jpg',
      position: 'Social Media Manager',
      rating: 5
    }
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }
} 