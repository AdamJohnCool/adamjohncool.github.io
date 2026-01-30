import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-home',
	imports: [],
	template: `
		<div class="intro content-box">
			<div>
				<img class="selfie" src="Selfie.JPG" alt="Selfie" height="200" />
				<h1>Adam Cool</h1>
				<h3>Computer Engineer in Training</h3>
				<p>Tech Enthusiast, Developer, Free Thinker</p>
			</div>
		</div>
		<div class="about content-box">
			<h1>About Me</h1>
			<p>I was born and raised in Ontario, Canada.</p>
			<p>
				I went to McMaster University and graduated with a bachelor's degree in Computer
				Engineering.
			</p>
			<p>I enjoy hiking, reading novels, and playing video games in my free time.</p>
			<p>I mainly program in C/C++, but I enjoy learning new programming languages.</p>
		</div>
	`,
})
export class Home {}
