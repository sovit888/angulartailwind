import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.toggleSidebar.emit('changed');
  }
}
