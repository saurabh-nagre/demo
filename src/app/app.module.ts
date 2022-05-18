import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgHODComponent } from './MyComponent/msg-hod/msg-hod.component';
import { VisionComponent } from './MyComponent/vision/vision.component';
import { AcademicStructureComponent } from './MyComponent/academic-structure/academic-structure.component';
import { ValueAddedCourseComponent } from './MyComponent/value-added-course/value-added-course.component';
import { ActivitesComponent } from './MyComponent/activites/activites.component';
import { LaboratoriesComponent } from './MyComponent/laboratories/laboratories.component';
import { StrengthsComponent } from './MyComponent/strengths/strengths.component';
import { AchievementsComponent } from './MyComponent/achievements/achievements.component';
import { FacultyComponent } from './MyComponent/faculty/faculty.component';
import { AluminiComponent } from './MyComponent/alumini/alumini.component';
import { StudentsComponent } from './MyComponent/students/students.component';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import { AdminComponent } from './admin/admin.component';

 /* //import { AuthService } from './auth.services.js';
//import { FlashMessagesModule } from 'angular2-flash-messages'; */

@NgModule({
  declarations: [
    AppComponent,
    MsgHODComponent,
    VisionComponent,
    AcademicStructureComponent,
    ValueAddedCourseComponent,
    ActivitesComponent,
    LaboratoriesComponent,
    StrengthsComponent,
    AchievementsComponent,
    FacultyComponent,
    AluminiComponent,
    StudentsComponent,
    LogInComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FlashMessagesModule.forRoot(),
    //RouterModule.forRoot(appRoutes),
  ],
  providers: [/*AuthService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
