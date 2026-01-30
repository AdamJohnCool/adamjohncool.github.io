import { Component } from '@angular/core';
import {
	AccordionGroup,
	AccordionTrigger,
	AccordionPanel,
	AccordionContent,
} from '@angular/aria/accordion';

@Component({
	selector: 'app-education',
	imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
	template: `
		<div class="education content-box">
			<div class="education-intro">
				<img
					class="img-mcmaster"
					src="McMaster.jpg"
					alt="McMaster University Hall"
					height="200"
				/>
				<h1>McMaster University</h1>
				<p>
					Graduated in 2021 with a Bachelor degree in Computer Engineering Co-op studying
					both the software and hardware of computing systems. Studies focused on computer
					hardware, software programming, analysis of electronics, digital communications,
					multimedia, and signal processing.
				</p>
			</div>
			<h2>Course Work</h2>
			<div ngAccordionGroup class="basic-accordion" [multiExpandable]="true">
				<h3>
					<span ngAccordionTrigger panelId="q1" #trigger1="ngAccordionTrigger">
						General Math and Sciences
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger1.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q1">
					<ng-template ngAccordionContent>
						<p>MATH 1ZA3 Engineering Mathematics I</p>
						<p>MATH 1ZB3 Engineering Mathematics II-A</p>
						<p>MATH 1ZC3 Engineering Mathematics II-B</p>
						<p>MATH 2Z03 Engineering Math III</p>
						<p>STATS 3Y03 Probability & Stats For Eng</p>
						<p>CHEM 1E03 General Chemistry: Engineering I</p>
						<p>MATLS 1M03 Structure&Property</p>
						<p>PHYSICS 1D03 Mechanics</p>
						<p>PHYSICS 1E03 Wave,Elec&Magnetic</p>
					</ng-template>
				</div>
				<h3>
					<span ngAccordionTrigger panelId="q2" #trigger2="ngAccordionTrigger">
						Engineering
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger2.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q2">
					<ng-template ngAccordionContent>
						<p>ENGINEER 1D04 Engineering Computation</p>
						<p>ENGINEER 1P03 Intro-Professional Engineering</p>
						<p>ENGINEER 1C03 Engin Design&Graph</p>
						<p>ENGINEER 2B03 Engineer Economics</p>
						<p>ENGINEER 4A03 Sustainability & Ethics</p>
					</ng-template>
				</div>
				<h3>
					<span ngAccordionTrigger panelId="q3" #trigger3="ngAccordionTrigger">
						Electrical Engineering
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger3.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q3">
					<ng-template ngAccordionContent>
						<p>ELECENG 2CI5 Intro:Elect Engin</p>
						<p>ELECENG 2EI5 Elec Device&Circ I</p>
						<p>ELECENG 2CJ4 Circuits & Systems</p>
						<p>ELECENG 2EI5 Elec Device&Circ I</p>
						<p>ELECENG 2FH3 Electromagnetics I</p>
						<p>ELECENG 3CL4 Intro: Control Systems</p>
						<p>ELECENG 3EJ4 Elec.Devic&Circ.II</p>
						<p>ELECENG 3TP3 Signal & Systems</p>
						<p>ELECENG 3TQ3 Adv. Prob. & Random Processes</p>
						<p>ELECENG 3TR4 Communication Systems</p>
					</ng-template>
				</div>
				<h3>
					<span ngAccordionTrigger panelId="q4" #trigger4="ngAccordionTrigger">
						Software Engineering
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger4.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q4">
					<ng-template ngAccordionContent>
						<p>SFWRENG 3K04 Software Development</p>
						<p>SFWRENG 3SH3 Operating Systems</p>
						<p>SFWRENG 4F03 Parallel Computing</p>
					</ng-template>
				</div>
				<h3>
					<span ngAccordionTrigger panelId="q5" #trigger5="ngAccordionTrigger">
						Computer Engineering
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger5.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q5">
					<ng-template ngAccordionContent>
						<p>COMPENG 2DI4 Logic Design</p>
						<p>COMPENG 2SH4 Princ. Programming</p>
						<p>COMPENG 2SI4 Data Structures</p>
						<p>COMPENG 2DP4 Microprocessors</p>
						<p>COMPENG 3DQ5 Digital Systems</p>
						<p>COMPENG 3DR4 Computer Organization</p>
						<p>COMPENG 3SK3 Comp. Aided Engineering</p>
						<p>COMPENG 4DK4 Comp Commun Netwk</p>
						<p>COMPENG 4DM4 Computer Architect</p>
						<p>COMPENG 4DN4 Adv Internet Com</p>
						<p>COMPENG 4DS4 Embedded Systems</p>
						<p>COMPENG 4SL3 Fundamentals: Machine Learning</p>
					</ng-template>
				</div>
				<h3>
					<span ngAccordionTrigger panelId="q6" #trigger6="ngAccordionTrigger">
						Electives
						<span
							aria-hidden="true"
							class="expand-icon material-icons"
							[class.expand-icon__expanded]="trigger6.expanded()"
							>keyboard_arrow_up</span
						>
					</span>
				</h3>
				<div ngAccordionPanel panelId="q6">
					<ng-template ngAccordionContent>
						<p>PSYCH 1X03 Intro:Psychology, Neurosciences & Behaviour</p>
						<p>ECON 1B03 Intro:Microeconom.</p>
						<p>ECON 1BB3 Introductory Macroeconomics</p>
						<p>ASTRON 1F03 Intro: Astron & Astrophys</p>
						<p>LINGUIST 1A03 ISounds, Speech and Hearing</p>
						<p>JAPANESE 2Z03 Interm. Intensive Japanese I</p>
					</ng-template>
				</div>
			</div>
		</div>
	`,
})
export class Education {}
