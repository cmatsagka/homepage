import externalLinkIconUrl from './assets/external-link.svg';

const projects = [
	{
		title: 'Battleship',
		description:
			'A responsive, test-driven Battleship game built with vanilla JavaScript (ES6+), HTML5, and CSS3. Features interactive drag-and-drop mechanics, a custom tracking AI, and a robust Jest unit testing suite.',
		githubUrl: 'https://github.com/cmatsagka/battleship',
		liveUrl: 'https://cmatsagka.github.io/battleship/',
		tags: ['HTML', 'CSS', 'JavaScript'],
	},

	{
		title: 'Weather App',
		description:
			'A responsive weather forecast web application featuring real-time weather data retrieval. Utilizes asynchronous JavaScript (Fetch API, Promises, async/await) to fetch, process, and dynamically present geographical data.',
		githubUrl: 'https://github.com/cmatsagka/weather-app',
		liveUrl: 'https://cmatsagka.github.io/weather-app/',
		tags: ['JavaScript', 'APIs', 'Async/Await', 'JSON'],
	},

	{
		title: 'Todo LIst Dashboard',
		description:
			'A modular, single-page To-Do List application built with vanilla JavaScript. Features dynamic project folders, priority tracking, and local storage persistence.',
		githubUrl: 'https://github.com/cmatsagka/todo-list',
		liveUrl: 'https://cmatsagka.github.io/todo-list/',
		tags: [
			'JavaScript (ES6)',
			'Local Storage',
			'Modular Architecture',
			'CSS Grid/Flexbox',
		],
	},

	{
		title: 'Tic-Tac-Toe',
		description:
			'A modular, zero-globals Tic-Tac-Toe game built with vanilla JS. Emphasizes clean architecture using Factory Functions and the Module Pattern.',
		githubUrl: 'https://github.com/cmatsagka/tic-tac-toe',
		liveUrl: 'https://cmatsagka.github.io/tic-tac-toe/',
		tags: [
			'JavaScript (ES6)',
			'Module Pattern',
			'Factory Functions',
			'DOM Manipulation',
		],
	},

	{
		title: 'Restaurant Page',
		description:
			'A modular single-page restaurant site built entirely with vanilla JS and packaged with Webpack. Features dynamic, tabbed content switching.',
		githubUrl: 'https://github.com/cmatsagka/restaurant-page',
		liveUrl: 'https://cmatsagka.github.io/restaurant-page/',
		tags: ['JavaScript (ES6)', 'Webpack', 'Dynamic DOM', 'npm Tooling'],
	},

	{
		title: 'Personal Library',
		description:
			'A digital bookshelf app for cataloging books. Built with vanilla JS, focusing on dynamic object prototypes, DOM tables, and custom form validation.',
		githubUrl: 'https://github.com/cmatsagka/library',
		liveUrl: 'https://cmatsagka.github.io/library/',
		tags: [
			'JavaScript (ES6)',
			'Object Prototypes',
			'Forms & Validation',
			'DOM API',
		],
	},
];

export function renderProjects() {
	const container = document.getElementById('projects-container');
	if (!container) return;

	projects.forEach((proj) => {
		const projectCard = document.createElement('article');
		projectCard.classList.add('card');

		const projectImage = document.createElement('img');
		projectImage.src = 'https://placehold.co/150/orange/white';
		projectImage.alt = '';
		projectImage.setAttribute('aria-hidden', true);

		const info = document.createElement('div');
		info.classList.add('info');

		const infoHeader = document.createElement('div');
		infoHeader.classList.add('info-header');

		const title = document.createElement('h3');
		title.classList.add('title');
		title.textContent = proj.title;

		const githubLink = document.createElement('a');
		githubLink.classList.add('logo-icon');
		githubLink.href = proj.githubUrl;
		githubLink.setAttribute(
			'aria-label',
			`View ${proj.title} source code on GitHub`
		);
		githubLink.target = '_blank';
		githubLink.rel = 'noopener noreferrer';

		const githubIcon = document.createElement('img');
		githubIcon.src =
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
		githubIcon.alt = '';
		githubIcon.setAttribute('aria-hidden', true);
		githubLink.appendChild(githubIcon);

		const liveLink = document.createElement('a');
		liveLink.classList.add('logo-icon');
		liveLink.href = proj.liveUrl;
		liveLink.setAttribute('aria-label', `Visit ${proj.title} live website`);
		liveLink.target = '_blank';
		liveLink.rel = 'noopener noreferrer';

		const externalIcon = document.createElement('img');
		externalIcon.src = externalLinkIconUrl;
		externalIcon.alt = '';
		externalIcon.setAttribute('aria-hidden', true);
		liveLink.appendChild(externalIcon);

		infoHeader.appendChild(title);
		infoHeader.appendChild(githubLink);
		infoHeader.appendChild(liveLink);
		info.appendChild(infoHeader);

		const projectAbout = document.createElement('p');
		projectAbout.classList.add('work-about');
		projectAbout.textContent = proj.description;

		info.appendChild(projectAbout);
		projectCard.appendChild(projectImage);
		projectCard.appendChild(info);

		container.appendChild(projectCard);
	});
}
