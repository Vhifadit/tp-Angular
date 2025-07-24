import { Component, Input } from '@angular/core';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: string;
}

@Component({
  selector: 'app-course-card',
  template: `
    <div class="course-card">
      <div class="course-image">
        <img [src]="course.image" [alt]="course.title">
      </div>
      <div class="course-content">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <div class="course-footer">
          <span class="course-price" *ngIf="course.price">{{ course.price }}</span>
          <button class="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;
} 