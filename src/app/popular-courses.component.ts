import { Component } from '@angular/core';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: string;
}

@Component({
  selector: 'app-popular-courses',
  template: `
    <section class="popular-courses">
      <div class="container">
        <h2 class="section-title">Our Most Popular Courses</h2>
        <p class="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.
        </p>
        <div class="courses-grid">
          <app-course-card 
            *ngFor="let course of courses" 
            [course]="course">
          </app-course-card>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.',
      image: 'assets/images/social-media-course.jpg'
    },
    {
      id: 2,
      title: 'Email Marketing Strategies',
      description: 'In porttitor ipsum eu justo condimentum euismod ullamcorper viverra.',
      image: 'assets/images/email-marketing-course.jpg'
    },
    {
      id: 3,
      title: 'Content Marketing',
      description: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque.',
      image: 'assets/images/content-marketing-course.jpg'
    }
  ];
} 