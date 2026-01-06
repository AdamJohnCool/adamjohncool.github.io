import { bootstrapApplication } from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<p>TEST</p>
	`,
})
export class App {}

bootstrapApplication(App);
