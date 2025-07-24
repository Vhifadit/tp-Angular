import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeroSectionComponent } from './hero-section.component';
import { FeaturesComponent } from './features.component';
import { FeatureCardComponent } from './feature-card.component';
import { PopularCoursesComponent } from './popular-courses.component';
import { CourseCardComponent } from './course-card.component';
import { TrainingSectionComponent } from './training-section.component';
import { PartnersComponent } from './partners.component';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialCardComponent } from './testimonial-card.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    FeaturesComponent,
    FeatureCardComponent,
    PopularCoursesComponent,
    CourseCardComponent,
    TrainingSectionComponent,
    PartnersComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('groupes-angular');
}
