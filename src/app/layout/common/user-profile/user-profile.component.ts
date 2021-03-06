import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scheme } from 'src/app/app.config';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() scheme: Scheme = 'light';
  @Output() toggleScheme = new EventEmitter<Scheme>();
  @Output() toggleDir = new EventEmitter<void>();
  checkedDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkedDarkMode = this.scheme === 'light' ? false : true;
  }

  updateScheme(): void {
    this.checkedDarkMode = !this.checkedDarkMode;

    const newScheme: Scheme = this.checkedDarkMode ? 'dark' : 'light';

    this.toggleScheme.emit(newScheme);
  }
}
