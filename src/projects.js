import externalLinkIconUrl from './assets/external-link.svg';
import { projects } from './projectsData.js';

export function renderProjects() {
	const container = document.getElementById('projects-container');
	if (!container) return;

	container.textContent = '';

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

		const linksWrapper = document.createElement('div');
		linksWrapper.classList.add('links-wrapper');
		linksWrapper.appendChild(githubLink);
		linksWrapper.appendChild(liveLink);

		infoHeader.appendChild(title);
		infoHeader.appendChild(linksWrapper);
		info.appendChild(infoHeader);

		const projectAbout = document.createElement('p');
		projectAbout.classList.add('work-about');
		projectAbout.textContent = proj.description;
		info.appendChild(projectAbout);

		if (proj.tags && proj.tags.length > 0) {
			const tagsWrapper = document.createElement('div');
			tagsWrapper.classList.add('tags-wrapper');

			proj.tags.forEach((tagText) => {
				const tagSpan = document.createElement('span');
				tagSpan.classList.add('tag');
				tagSpan.textContent = tagText;
				tagsWrapper.appendChild(tagSpan);
			});

			info.appendChild(tagsWrapper);
		}

		projectCard.appendChild(projectImage);
		projectCard.appendChild(info);

		container.appendChild(projectCard);
	});
}
