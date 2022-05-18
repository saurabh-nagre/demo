import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisionComponent } from './MyComponent/vision/vision.component';
import { MsgHODComponent } from './MyComponent/msg-hod/msg-hod.component';
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
//import { AuthService } from './auth/auth.services';


const routes: Routes = [
  { path: 'vision', component: VisionComponent },
  { path: 'msghod', component: MsgHODComponent},
  { path: 'academicstructure', component: AcademicStructureComponent},
  { path: 'valaddcourse', component: ValueAddedCourseComponent },
  { path: 'activies', component: ActivitesComponent },
  { path: 'lab', component: LaboratoriesComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'alumini', component: AluminiComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'strengths', component: StrengthsComponent },
  { path: 'achievements', component: AchievementsComponent},
  { path: 'login', component: LogInComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
