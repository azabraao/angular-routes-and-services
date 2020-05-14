import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  public posts: any[] = [];

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
    this.myDataService.getData().subscribe(
      sucessRes => {
        this.posts = sucessRes.data
        console.log("posts", this.posts)
      },
      errorRes => {
        console.log("Erro ao chamar back")
      }
    )
  }

}
