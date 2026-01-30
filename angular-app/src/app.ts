import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './routes';
import { Navigation } from './nav-bar/nav-bar.component';

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [RouterOutlet, Navigation],
	template: `
		<div class="main-flex container">
			<nav>
				<nav-bar />
			</nav>
			<div class="main-content">
				<router-outlet />
			</div>
			<footer>
				<div class="contact-info">
					<h3><u>Contact Me</u></h3>
					<p>Email: AdamJohnCool@gmail.com</p>
				</div>
			</footer>
		</div>
	`,
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
	providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
