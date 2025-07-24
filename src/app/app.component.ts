import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HeroSectionComponent } from './hero-section.component';
import { FeaturesComponent } from './features.component';
import { PopularCoursesComponent } from './popular-courses.component';
import { TrainingSectionComponent } from './training-section.component';
import { PartnersComponent } from './partners.component';
import { TestimonialsComponent } from './testimonials.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FeaturesComponent,
    PopularCoursesComponent,
    TrainingSectionComponent,
    PartnersComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {} 