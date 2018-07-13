const videos = document.querySelectorAll('[data-video]');

if (videos.length) {
	const body = document.querySelector('body');

	const setURLs = (src, element) => {
		Array
			.from(videos)
			.forEach((video, i) => {
				const name = video.getAttribute('data-video');
				video.setAttribute('src', src[name]);
			});
		body.removeChild(element);
	};
	

	// const loadByAjax = () => {
	// 	const xhr = new XMLHttpRequest();

	// 	xhr.open('GET', 'https://ehopper.com/wp-content/uploads/videos.html', true);

	// 	xhr.setRequestHeader('Content-Type', 'application/json');
	// 	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

	// 	xhr.onload = e => {
	// 		const responseHTML = xhr.responseText;
	// 		const div = document.createElement('div');

	// 		div.innerHTML = responseHTML;
	// 		body.appendChild(div);

	// 		const src = JSON.parse(div.querySelector('div').getAttribute('data-videos'));
			
	// 		setURLs(src, div);
	// 	};

	// 	xhr.send();
	// };

	// loadByAjax();

	const loadFromIframe = () => {
		const iframeVideos = document.createElement('iframe');

		iframeVideos.setAttribute('name', 'videosIframe');
		iframeVideos.setAttribute('src', 'https://ehopper.com/bo/bo-videosiframe.html');

		body.appendChild(iframeVideos);

		const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		const eventer = window[eventMethod];
		const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		eventer(messageEvent, event => (event.data.videosSRC && event.data.videoFromEhopper) && setURLs(event.data.videosSRC, iframeVideos), false);

		iframeVideos.onload = () => window.frames['videosIframe'].postMessage('get video', '*');
	};
	
	loadFromIframe();
};