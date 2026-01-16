import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
	selector: 'navigation',
	imports: [],
	template: `
		<nav class="nav-bar">
			<div class="top-bar">
				<div class="name orbitron-500">ADAM COOL</div>
				<div class="menu orbitron-500">
					<a href="/">Home</a>
					|
					<a href="/about">About</a>
					|
					<a href="/experience">Experience</a>
					|
					<a href="/education">Education</a>
				</div>
			</div>
		</nav>
	`,
})
export class NavBar {}

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [RouterOutlet, NavBar],
	template: `
		<navigation />
		<div class="main-content">
			<router-outlet />
		</div>
		<footer>
			<div class="contact-info">
				<h3><u>Contact Me</u></h3>
				<p>Email: AdamJohnCool@gmail.com</p>
			</div>
		</footer>
	`,
})
export class AppComponent {}
