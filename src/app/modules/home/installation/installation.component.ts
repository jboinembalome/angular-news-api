import { Component } from '@angular/core';

@Component({
  selector: 'app-home-installation',
  templateUrl: './installation.component.html'
})
export class InstallationComponent {
  codeNpmInstall = "npm install";
  codeNgServe = "ng serve --open";

  constructor() {}
}
