import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GetUserService } from 'src/app/services/get-user.service';

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

  constructor(private find: GetUserService) { }

  ngOnInit(): void {

    this.find.getUser('f').subscribe((response:any) => {
      if(response.status != 404){
        this.userInfo = response;
        console.log(this.userInfo);

        this.find.getRepos(this.userInfo.repos_url).subscribe((response)=>{
          this.userRepos = response;
        });

      }

    });

  }

  display() {

    setTimeout(()=>{
      console.log(this.userName.value.name);

      let profile = this.userName.value.name;

      this.find.getUser(<string>profile).subscribe((response:any) => {
        if(response.status != 404){
          this.userInfo = response;
          // this.userInfo = JSON.parse(JSON.stringify(response));
          console.log(this.userInfo);

          this.find.getRepos(this.userInfo.repos_url).subscribe((response)=>{
            this.userRepos = response;
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
