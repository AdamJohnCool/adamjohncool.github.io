import { Component, input, output } from '@angular/core';

@Component({
	selector: 'nav-bar',
	imports: [],
	template: `
		<nav class="nav-bar">
			<div class="top-bar">
				<div class="name">ADAM COOL</div>
				<div class="menu">
					<a href="/">Home</a>
					|
					<a href="/bio">About</a>
					|
					<a href="/bio">Projects</a>
					|
					<a href="/bio">Education</a>
					|
					<a href="/bio">Contact</a>
				</div>
			</div>
		</nav>
	`,
})
export class Navigation {}
