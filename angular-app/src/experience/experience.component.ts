import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-experience',
	imports: [],
	template: `
		<div class="experience content-box">
			<h1>Work Experience</h1>

			<div class="work-experience-box">
				<h2>Website SEO Optimization</h2>
				<h3>NorthernBeat</h3>
				<p>
					I helped improve SEO for the
					<a target="_blank" rel="noopener noreferrer" href="https://northernbeat.ca/"
						>NorthernBeat</a
					>
					website to improve visiblity through search engines and to allow the news site
					to be displayed on GoogleNews. Researched GoogleNews best practices and made
					changes to the webpage structure and sitemapping to align with the requirements
					set by Google.
				</p>
				<p></p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Python Data Manager</h2>
				<h3>Zen Geomap Inc</h3>
				<p>
					I created a Python program to clean and merge raw data into a single database.
					Data came multiple passes of a magnometer on a drone and needed to be cleaned
					and unified to be usable for display and data analysis.
				</p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Embedded Software Engineer</h2>
				<h3>Advanced Micro Devices (AMD)</h3>
				<p>
					I worked at AMD as a Co-op student intern and got to take part in research and
					development into AI Machine Learning for use on AMD hardware. Completed 2
					projects over the work term: Machine Learning proof of concept and a Memory
					Access Driver.
				</p>
				<p>
					The AI machine learning project was an internal demonstration to show AMDs GPUs
					capabilities with machine learning. The project consisted of designing a network
					for identifying signs and road ways, training it from public databases, and
					putting it on a small form factor PC attached to an RC car that was capable of
					self-driving on roads.
				</p>
				<p>
					The memory access driver was used in an embedded SOC, system on chip, to manage
					multiple single cored processing units, and the memory they were allowed to
					access. The driver would recieve a stream of data packets which contained a
					program to execute on one of the processors, it would then choose an available
					processor, assign the start and size of memory allocted for it to access and
					command the processor to start execution of the code.
				</p>
				<p>
					The work involved agile development of code working of JIRA to fullful daily
					tickets and tasks. Git was used to manage to project with jenkins managing the
					builds. Confluence was used for locating information on hardware and other
					drivers as well as sharing information between team members.
				</p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Flight Simulation Model Designer</h2>
				<h3>Hybrid Enterprises</h3>
				<p>
					I helped design and built a portable flight simulator unit for Hybrid
					Enterprises Hybrid Airship. The flight simulator was to be used at trade shows
					as a demonstration of the airship and it's capabilities. The flight simulator
					used a custom built PC, 4 monitors, and a flight stick and throttle. They were
					attached to a metal frame that could be dissassembled and packed up for
					shipping.
				</p>
				<p>
					I also represented the company at the 2016 Abbotsford International Airshow to
					help demonstration the flight simulator as well as talk with guests about the
					airship and it's capabilities.
				</p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Student Tutor</h2>
				<p>
					Starting in Highschool helping fellow classmates better understand Algebra,
					Calculus, Physics, and Chemistry. I have since continued to help students
					throughout University and even my younger cousins to learn topics related to
					Maths and Sciences.
				</p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Shipyard Labourer</h2>
				<h3>Moosonee Transportation Limited</h3>
				<p>
					I worked for my Grandfather up in Moosonee, Ontario at his shipping company
					helping to do general labour around the yard. I helped with cleaning around the
					yard, organizing inventory, and removing and securing cargo from train cars.
				</p>
			</div>

			<br />
			<div class="work-experience-box">
				<h2>Gas Station Attendent</h2>
				<h3>ESSO Gas Station</h3>
				<p>
					A job during highschool. Served customers by pumping gas for them, cleaning
					their car windows, and adding windshield washer fluid. Was responsible for
					handling payments and general clearning and maintenance around the station.
				</p>
			</div>
		</div>
	`,
})
export class Experience {}
