import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-experience',
	imports: [],
	template: `
		<h1>Work Experience</h1>

		<div class="work-experience-box">
			<h2>Website Optimization</h2>
			<h3>NorthernBeat</h3>
			<p>
				Helped improve SEO for the NorthernBeat website. Researched GoogleNews best
				practices and made changes to the websites structure to improve chances of being
				displayed on GoogleNews.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Python Data Manager</h2>
			<p>
				Created a Python program to clean and merge datasets into a single database. Data
				came from various sruveying senors from a drone and needed to be unified to be
				useful.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Embedded Software Developer</h2>
			<h3>Advanced Micro Devices (AMD)</h3>
			<p>
				While working at AMD as a Co-op student intern I got to take part in research and
				development into AI Machine Learning for use on AMD hardware.
			</p>
			<p>
				Completed 2 projects over the work term: Machine Learning proof of concept and a
				Memory Access Driver.
			</p>
			<p>
				Brainstorm, design, and prototype a proof-of-concept using Python Tensorflow to show
				that AMD GPUs were capable of GPU accelerated learning.
			</p>
			<p>
				Designed a remote-control car that could self-steer within roadways and identify
				signs and obstacles.
			</p>
			<p>
				Agile work environment using JIRA to manage tasks and Git version control on the
				code base.
			</p>
			<p>Used Confluence for finding and sharing information between members of the team.</p>
			<p>
				Programmed and debugged driver for managing memory between multiple embedded
				processing units on an SOC.
			</p>
			<p>
				Worked closely with a team of senior developers to build automated tests and
				integrate the driver into a larger program built on top of a Unix distro.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Flight Simulation Model Designer</h2>
			<h3>Hybrid Enterprises</h3>
			<p>
				Designed and built portable flight simulator unit for Lockheed Martin Hybrid
				Airship.
			</p>
			<p>
				Assembled hardware for the system, and ported an existing hybrid airship flight
				model to new simulator software.
			</p>
			<p>
				Created flight simulator booth for use at conventions and showings of the Hybrid
				Airship.
			</p>
			<p>
				Represented project at 2016 Abbotsford International Airshow operating the Hybrid
				Airship flight simulator demo.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Student Tutor</h2>
			<p>
				Starting in Highschool helping fellow classmates better understand Algebra,
				Calculus, Physics, and Chemistry. I have since continued to help students throughout
				University and even my younger cousins to learn topics related to Maths and
				Sciences.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Shipyard Labourer</h2>
			<h3>Moosonee Transportation Limited</h3>
			<p>
				Working for my Grandfather up in Moosonee, Ontario I got to spend a summer assisting
				in labour around his shipping company.
			</p>
		</div>

		<br />
		<div class="work-experience-box">
			<h2>Gas Station Attendent</h2>
			<h3>ESSO Gas Station</h3>
			<p>
				A job during highschool. Served customers by pumping gas for them, cleaning their
				car windows, and adding windshield washer fluid. Was responsible for handling
				payments and general clearning and maintenance around the station.
			</p>
		</div>
	`,
})
export class Experience {}
