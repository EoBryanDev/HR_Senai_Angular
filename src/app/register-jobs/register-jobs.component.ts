import { Component, OnInit } from '@angular/core';
import { JobService } from '../job-service.service';
import { Jobs } from '../models/Jobs.model';

@Component({
  selector: 'app-register-jobs',
  templateUrl: './register-jobs.component.html',
  styleUrls: ['./register-jobs.component.css']
})
export class RegisterJobsComponent implements OnInit {

  public job: Jobs = new Jobs(0,"","","",0)

  constructor(private _jobService: JobService) { }

  ngOnInit(): void {
  }

  register(){
    this._jobService.registerJobs(this.job).subscribe(
      job => {this.job = new Jobs(0,"","","",0)},
      err => {console.log("Error to Register!")}
    )

    window.location.href = "/job";
  }

  update(id:number){ 

    this._jobService.updateJobs(id,this.job).subscribe(
      job => {this.job = new Jobs(0,"","","",0)},
      err => {console.log("Error to Update!")}
    )
    window.location.href = "/job";
  }

  delete(id:number){
    this._jobService.removeJobs(id).subscribe(
      job => {this.job = new Jobs(0,"","","",0)},
      err => {console.log("Error to Delete!")}
    )
    window.location.href = "/job";
  }

}
