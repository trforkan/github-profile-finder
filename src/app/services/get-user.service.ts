import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class GetUserService {

  user: any;

  constructor(private http: HttpClient) { }

  getUser(profile: string) {
    return this.http.get(`${environment.url}${profile}?client_id=${environment.clientId}&client_secret=${environment.clientSecretKey}`);
  }

  getRepos(url: string) {
    return this.http.get(url);
  }

 

}
