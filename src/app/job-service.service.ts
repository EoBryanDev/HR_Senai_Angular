import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Jobs } from './models/Jobs.model';



@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = "http://localhost:3000/jobs";

  constructor(private _httpClient: HttpClient) { 

  }
  getJobs(): Observable<Jobs[]>{

    return this._httpClient.get<Jobs[]>(this.url);
  }
  registerJobs(job: Jobs):Observable<Jobs[]>{
    
    return this._httpClient.post<Jobs[]>(this.url , job);
  }
  updateJobs(id: any, job: Jobs):Observable<Jobs[]>{

    const urlUpdated = `${this.url}/${id}`
    return this._httpClient.put<Jobs[]>(urlUpdated , job);
  }
  removeJobs(id: any):Observable<Jobs[]>{

    const urlDelete = `${this.url}/${id}`
    return this._httpClient.delete<Jobs[]>(urlDelete);
  }
}
