import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultLayoutSidebarComponent } from './default-layout-sidebar/default-layout-sidebar.component';



@NgModule({
  declarations: [DefaultLayoutComponent, DefaultLayoutSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
