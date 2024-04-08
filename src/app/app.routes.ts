import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'students', component:StudentsComponent},
    {path: 'students-details/:id', component:StudentsDetailsComponent},
    {path: 'profile', component:ProfileComponent},
    {path: '**', component:ErrorComponent},
];
