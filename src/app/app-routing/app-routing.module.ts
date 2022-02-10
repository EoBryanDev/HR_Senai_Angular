import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../jobs/jobs.component';
import { RegisterJobsComponent } from '../register-jobs/register-jobs.component';
import { UpdateJobsComponent } from '../update-jobs/update-jobs.component';


const routes: Routes = [
  {path: 'job', component: JobsComponent },
  {path: 'register', component: RegisterJobsComponent},
  {path: 'update', component: UpdateJobsComponent},
  {path: '', redirectTo: '/job', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
