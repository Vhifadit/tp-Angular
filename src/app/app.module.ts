import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    // Aucun composant standalone ici
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 