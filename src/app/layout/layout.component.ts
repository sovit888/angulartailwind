import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  toggleStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  handleSidebarToggle(e: any) {
    this.toggleStatus = !this.toggleStatus;
  }
}
