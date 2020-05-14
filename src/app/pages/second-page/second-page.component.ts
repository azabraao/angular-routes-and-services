import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  public topics : any[] = [];

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
    this.myDataService.getData().subscribe(
      sucessRes => {
        this.topics = sucessRes.data
        console.log("Topics", this.topics)
      },
      errorRes => {
        console.log("Erro ao chamar back")
      }
    )
  }

}
