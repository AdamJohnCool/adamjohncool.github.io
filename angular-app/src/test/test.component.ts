import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-user',
	template: ` <p>The user's name is {{ username() }}</p> `,
})
export class User {
	readonly username = input<string>();
}

@Component({
	selector: 'app-child',
	styles: ``,
	template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
	readonly addItemEvent = output<string>();

	addItem() {
		this.addItemEvent.emit('🐢');
	}
}

@Component({
	selector: 'app-home',
	imports: [User, Child, NgOptimizedImage, FormsModule, ReactiveFormsModule],
	styles: ``,
	template: `
		<p>Hello {{ city }}. 1 + 1 = {{ 1 + 1 }}</p>

		<div [contentEditable]="isEditable">This is Editable.</div>

		<button (click)="greet()">Button?</button>

		<section (mouseover)="showSecretMessage()">
			There's a secret message for you, hover to reveal: {{ message }}
		</section>

		<app-user username="Adam"></app-user>

		<app-child (addItemEvent)="addItem($event)"></app-child>
		<p>🐢 all the way down {{ items.length }}</p>
		@for (turt of items; track items) {
		<span> {{ turt }} </span>
		}

		<li>
			Static Image:
			<img ngSrc="cat.jpg" alt="Cat" width="32" height="32" />
		</li>

		<li>
			Dynamic Image:
			<img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
		</li>

		<label for="framework">
			Favorite Food:
			<input id="framework" type="text" [(ngModel)]="favoriteFood" />
		</label>

		<p>Your's favorite food: {{ favoriteFood }}</p>

		<form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
			<label>
				Name
				<input type="text" formControlName="name" />
			</label>
			<label>
				Email
				<input type="email" formControlName="email" />
			</label>
			<button type="submit">Submit</button>
		</form>

		<h2>Profile Form</h2>

		<p>Name: {{ profileForm.value.name }}</p>

		<p>Email: {{ profileForm.value.email }}</p>

		@defer (on viewport) {
		<p>Comments</p>
		} @placeholder {
		<p>Future comments</p>
		} @loading (minimum 2s) {
		<p>Loading comments...</p>
		} @error {
		<p>Failed to load comments</p>
		}
	`,
})
export class Home {
	city = 'Toronto';
	isEditable = true;
	message = '';
	greet() {
		console.log('Hello, there 👋');
	}
	showSecretMessage() {
		this.message = 'Way to go 🚀';
	}
	items = new Array();
	addItem(item: string) {
		this.items.push(item);
	}
	logoUrl = 'cat.jpg';
	logoAlt = 'Cat';
	favoriteFood = '';
	profileForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
	});
	handleSubmit() {
		alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
	}
}
