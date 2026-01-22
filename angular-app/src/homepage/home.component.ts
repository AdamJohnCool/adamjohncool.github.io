import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-home',
	imports: [],
	template: `
		<div class="home-text">
			<img class="selfie" src="Selfie.JPG" alt="Selfie" height="200" />
			<h1>Adam Cool</h1>
			<h3>Computer Engineer in Training</h3>
			<p>Tech Enthusiast, Developer, Free Thinker</p>
		</div>
	`,
})
export class Home {}
