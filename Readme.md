iOS Standalone WebApp Linkhandler
=========

If an iOS user adds your webapp to the homescreen and clicks on a link, the page will usually be opened in safari. While this is good for external links, it's not very useful for internal links. The Linkhandler will open external Links in Safari and internal links (same url) inside the Webapp. You can also force the behaviour with a class.

#Include JS
	<script type="text/javascript" src="linkhandler.js"></script>


#Force Safari
	<a href="ANY-URL" class="open-safari"/>Open in Safari</a>


#Force internal
	<a href="ANY-URL" class="dont-open-safari"/>Open in the WebApp</a>

#Requirements
The App requires jQuery and Works on all iOS Versions except on iOS between 7.0 and 7.0.2 since there was a bug that prevented opening safari.