const videos = document.querySelectorAll('[data-video]');

if (videos) {
	const body = document.querySelector('body');
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://ehopper.com/wp-content/uploads/videos.html', true);

	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

	xhr.onload = e => {
		const responseHTML = xhr.responseText;
		const div = document.createElement('div');

		div.innerHTML = responseHTML;
		body.appendChild(div);

		const src = JSON.parse(div.querySelector('div').getAttribute('data-videos'));
		
		body.removeChild(div);

		console.log(src);
		
		Array
			.from(videos)
			.forEach((video, i) => {
				const name = video.getAttribute('data-video');
				video.setAttribute('src', src[name]);
				console.log(`${i}) ${name}: ${src[name]}`);
			});
	};

	xhr.send();
};