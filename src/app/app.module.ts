import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { VerticalTimelineComponent } from './shared/vertical-timeline/vertical-timeline.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ExperienceComponent,
    AboutMeComponent,
    NavbarComponent,
    ProgressBarComponent,
    TimelineComponent,
    VerticalTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
