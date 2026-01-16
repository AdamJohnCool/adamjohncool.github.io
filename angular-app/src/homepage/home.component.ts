import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-home',
	imports: [],
	template: `
		<div class="home-text">
			<div class="fakeimg selfie">Picture of me</div>
			<h1>Adam Cool</h1>
			<p>Computer Engineering graduate from McMaster University</p>
			<p>Tech Enthusiast, Developer, Free Thinker</p>
		</div>
	`,
})
export class Home {}
