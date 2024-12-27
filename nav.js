function markCurrentNav() {
	const links = document.querySelectorAll('nav a');
	const currentPath= window.location.pathname.replace(/^\//, '');

	links.forEach(link => {
		link.removeAttribute('aria-current');
		if (link.getAttribute('href') === currentPath) {
			link.setAttribute('aria-current', 'true');
		}
	});
}

document.addEventListener('DOMContentLoaded', markCurrentNav);
document.addEventListener('htmx:afterSwap', markCurrentNav);