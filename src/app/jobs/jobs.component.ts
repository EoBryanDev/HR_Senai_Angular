import { Component, OnInit } from '@angular/core';
import { JobService } from '../job-service.service';
import { Jobs } from '../models/Jobs.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public job: Jobs = new Jobs(0,"","","",0)
  public jobs: Jobs[] = [];

  

  constructor(private _jobService: JobService) { }

  ngOnInit(): void {
    this.listJobs();
  }

  //receive an array of jobs
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
  
  /*updateOption(id:number, photo:string, name:string,description:string,salary:number){
    //title
    var change: boolean = false;

    let title = document.createElement('h3')
    title.innerHTML = "Edit"
    let hr = document.createElement('hr')

    //create form
    let form = document.createElement('form')
    
    form.className = 'row'

    //create input area 'ID'
    let idInput = document.createElement('input')
    idInput.type = 'text'
    idInput.name = 'id'
    idInput.value = id.toString()
    idInput.disabled = true
    idInput.className = 'col-md-2'

    //create input area 'photo'
    let photoInput = document.createElement('input')
    photoInput.type = 'text'
    photoInput.name = 'photo'
    photoInput.className = 'col-md-2'
    photoInput.value = photo
    //photoInput.value = 

    //create input area 'Name'
    let nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.value = name
    nameInput.className = 'col-md-3'

    //create input area 'Description'
    let descriptionInput = document.createElement('input')
    descriptionInput.type = 'text'
    descriptionInput.name = 'description'
    descriptionInput.className = 'col-md-3'
    descriptionInput.value = description
    //descriptionInput.value = job

    //create input area 'Salary'
    let salaryInput = document.createElement('input')
    salaryInput.type = 'text'
    salaryInput.name = 'salary'
    salaryInput.className = 'col-md-2'
    salaryInput.value = salary.toString()
    //descriptionInput.value = job

    //create btn update
    let buttonUpdate = document.createElement('button')
    buttonUpdate.className = 'btn btn-warning mt-1'
    buttonUpdate.innerHTML = 'Confirm Update'
    buttonUpdate.addEventListener('click',function(){
      change = true
    })

    let buttonBack = document.createElement('a')
    buttonBack.className = 'btn btn-danger mt-1'
    buttonBack.innerHTML = 'Back'
    buttonBack.addEventListener('click', function () {
      window.location.href = "/job"
    })

    //go to function that really change up the element
    //button.addEventListener('click',update
  
    form.appendChild(title)
    form.appendChild(hr)
    //include id input on form
    form.appendChild(idInput)
    //include input on form
    form.appendChild(photoInput)
    //include input Name on form
    form.appendChild(nameInput)
    //include input Description on form
    form.appendChild(descriptionInput)
    //include input Salary on form
    form.appendChild(salaryInput)
    //include button on input
    form.appendChild(buttonUpdate)
    //include button on input
    form.appendChild(buttonBack)

    //select tbody where the datas are load
    let jobs = document.getElementById('jobID')

    jobs?.insertBefore(form,null)

    if(change){
      this._jobService.updateJobs(id,this.job).subscribe(
        job => {this.job = new Jobs(0,"","","",0)},
        err => {console.log("Error to Update!")}
      )
      window.location.href = "/job";
    }
    
  }*/
  
  

  delete(id:number){
    this._jobService.removeJobs(id).subscribe(
      job => {this.job = new Jobs(0,"","","",0)},
      err => {console.log("Error to Delete!")}
    )
    window.location.href = "/job";
  }

}
