import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MyDataService } from 'src/app/services/my-data.service';



@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MyDataService
  ]
})
export class PagesModule { }
