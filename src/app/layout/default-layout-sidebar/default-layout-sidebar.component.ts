import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout-sidebar',
  templateUrl: './default-layout-sidebar.component.html',
  styleUrls: ['./default-layout-sidebar.component.scss']
})
export class DefaultLayoutSidebarComponent implements OnInit {

  public sidebarRoutes : any[];

  constructor() { 
    this.sidebarRoutes = [
      {label: "Link para example", link: "/example"},
      {label: "Link para first page", link: "/first-page"},
      {label: "Link para second page", link: "/second-page"},
    ]
  }

  ngOnInit() {
  }

}
