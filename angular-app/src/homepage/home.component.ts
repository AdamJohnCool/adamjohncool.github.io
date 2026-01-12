import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-home',
	imports: [],
	template: `
		<div class="home-text">
			<div class="fakeimg selfie">Picture of me</div>
			<h1>Quick info about me</h1>
			<p>Name</p>
			<p>School</p>
			<p>Work experience</p>
			<p>Email Address</p>
		</div>
		<div class="fakeimg project-selector">A sliding list of projects maybe?</div>
	`,
})
export class Home {}
