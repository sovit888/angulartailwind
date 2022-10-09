import { Component, Input, OnInit } from '@angular/core';
import { SideBarMenu } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarStatus = false;
  sidebarmenuLists: SideBarMenu[] = [
    { link: '/', title: 'Home', icon: 'home' },
    { link: '/category', title: 'Category', icon: 'home' },
    { link: '/brand', title: 'Brand', icon: 'home' },
    { link: '/login', title: 'Login', icon: 'home' },
    { link: '/signup', title: 'Signup', icon: 'home' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
