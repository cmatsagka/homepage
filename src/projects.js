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
