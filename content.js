(function () {
	var trendingTag = [
		'<li class="header-nav-item">',
			'<a class="header-nav-link" href="https://github.com/trending" data-ga-click="Trending, go to trending, text:trending">Trending</a>',
		'</li>'
	].join('');
	appendHtml(document.querySelectorAll('.header-nav.left')[0], trendingTag);

	function appendHtml (el, str) {
		
		/**
		 * via: http://stackoverflow.com/a/10309703
		 */
		
		var div = document.createElement('div');
		div.innerHTML = str;
		
		while (div.children.length > 0) {
			console.log(div.children);
			el.appendChild(div.children[0]);
		}
	}
}())