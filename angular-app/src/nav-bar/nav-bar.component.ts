import { Component, input, output } from '@angular/core';

@Component({
	selector: 'nav-bar',
	imports: [],
	template: `
		<div class="top-bar">
			<div class="name orbitron-500">ADAM COOL</div>
			<div class="menu orbitron-500">
				<a href="/">Home</a>
				|
				<a href="/experience">Experience</a>
				|
				<a href="/education">Education</a>
			</div>
		</div>
	`,
})
export class Navigation {}
