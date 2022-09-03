import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GetUserService } from 'src/app/services/get-user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = new FormGroup({
    name: new FormControl("")
  });

  selected="repos";
  userInfo: any;
  userRepos: any;
  userSubscriptions: any;
  userGists: any;
  repoComments: any[]=[];

  constructor(private apiService: GetUserService) { }

  ngOnInit(): void {

    this.apiService.getUser('f').subscribe((response:any) => {
      if(response.status != 404){
        this.userInfo = response;
        console.log(this.userInfo);

        this.apiService.getRepos(`${this.userInfo.repos_url}?client_id=${environment.clientId}&client_secret=${environment.clientSecretKey}`).subscribe((response)=>{
          this.userRepos = response;
          console.log("repos=" ,this.userRepos);




          // for( let i = 0; i < 30; i++) {

          //   this.apiService.getComments(`${this.userRepos[i].url}/comments?client_id=${environment.clientId}&client_secret=${environment.clientSecretKey}`).subscribe(response => {
          //     this.repoComments[i].push = response;
          //     console.log("comments: ",this.repoComments[i])
          //   })

          // }

        });

      }

    });

  }

  display() {

    setTimeout(()=>{
      console.log(this.userName.value.name);

      let profile = this.userName.value.name;

      this.apiService.getUser(<string>profile).subscribe((response:any) => {
        if(response.status != 404){
          this.userInfo = response;
          // this.userInfo = JSON.parse(JSON.stringify(response));
          console.log(this.userInfo);

          this.apiService.getRepos(`${this.userInfo.repos_url}?client_id=${environment.clientId}&client_secret=${environment.clientSecretKey}`).subscribe((response)=>{
            this.userRepos = response;
            console.log("repos=" ,this.userRepos);

            // for( let i = 0; i < 30; i++) {

            //   this.apiService.getComments(`${this.userRepos[i].url}/comments?client_id=${environment.clientId}&client_secret=${environment.clientSecretKey}`).subscribe(response => {
            //     this.repoComments[i].push = response;
            //     console.log("comments: ",this.repoComments[i])
            //   })

            // }

          });

        }

      });


    },1000);

    if(this.userName.value.name=="")delete this.userInfo;

  }

  dekha(){
    console.log("val = ",this.selected);
  }

  changeSelected(event: string) {
    this.selected=event;
  }

}
