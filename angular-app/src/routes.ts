import { Routes } from '@angular/router';
import { Home } from './homepage/home.component';
import { About } from './about/about.component';
import { Projects } from './projects/projects.component';
import { Education } from './education/education.component';
import { Experience } from './experience/experience.component';

export const routes: Routes = [
	{
		path: '',
		title: 'Adam Cool',
		component: Home,
	},
	{
		path: 'about',
		title: 'About',
		component: About,
	},
	{
		path: 'experience',
		title: 'Work Experience',
		component: Experience,
	},
	{
		path: 'projects',
		title: 'Projects',
		component: Projects,
	},
	{
		path: 'education',
		title: 'Education',
		component: Education,
	},
	{
		path: '**',
		component: Home,
	},
];
