import { Component, OnInit } from '@angular/core';
import { JobService } from '../job-service.service';
import { Jobs } from '../models/Jobs.model';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent implements OnInit {

  public job: Jobs = new Jobs(0,"","","",0)
  public jobs: Jobs[] = [];
  
  constructor(private _jobService: JobService) { }

  ngOnInit(): void {
    this.listJobs()
  }

  listJobs(){
    this._jobService.getJobs()
    .subscribe(
      returnJob => {
        this.jobs = returnJob.map(
          item => {
            return new Jobs(
              item.id,
              item.name,
              item.photo,
              item.description,
              item.salary
            );
          }
        )
      }
    )
  }

  update(id:number){

    this._jobService.updateJobs(id,this.job).subscribe(
      job => {this.job = new Jobs(0,"","","",0)},
      err => {console.log("Error to Update!")}
    )
    window.location.href = "/job";


  }

    updateID(id:any,photo:string, name:string,description:string,salary:number){
      let idChange = (<HTMLSelectElement>document.getElementById('id')).value = id
      let photoChange = (<HTMLSelectElement>document.getElementById('photo')).value = photo
      let nameChange = (<HTMLSelectElement>document.getElementById('name')).value = name
      let descriptionChange = (<HTMLSelectElement>document.getElementById('description')).value = description
      let salaryChange = (<HTMLSelectElement>document.getElementById('salary')).value = salary.toString()
      

      //console.log(idChange)
    }

  
}
