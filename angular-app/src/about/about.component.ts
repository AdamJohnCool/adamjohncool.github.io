import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-about',
	imports: [],
	template: `
		<div class="about-text">
			<h1>Info About Me</h1>
			<p>Born and raised in Ontario, Canada.</p>
		</div>
	`,
})
export class About {}
