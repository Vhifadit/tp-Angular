import { Component, OnInit } from '@angular/core';
import { Course } from './models/interfaces';
import { CourseService } from './services/course.service';

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
        <div class="courses-grid" *ngIf="!loading">
          <app-course-card 
            *ngFor="let course of courses" 
            [course]="course"
            (courseSelected)="onCourseSelected($event)">
          </app-course-card>
        </div>
        <div class="loading" *ngIf="loading">
          <p>Chargement des cours...</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading courses:', error);
        this.loading = false;
      }
    });
  }

  onCourseSelected(course: Course): void {
    console.log('Course selected:', course);
    // Navigation logic here
  }
} 