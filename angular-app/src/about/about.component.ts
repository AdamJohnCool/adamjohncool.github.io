import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-about',
	imports: [],
	template: `
		<div class="about-text">
			<h1>Info about me personally.</h1>
			<p>My History</p>
			<p>Where I lived</p>
			<p>Schools I went to</p>
			<p>Hobbies/Interests</p>
			<p>Favourite Books/TV Shows</p>
		</div>
	`,
})
export class About {}
