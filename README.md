Movienight
==========

What shall we watch tonight?


Android App that lists all your movies with (IMDB) poster and description.


## Implementation

* Using [ionic](http://ionicframework.com/)
* Calls an URL to get a JSON list of all the movies with posters and descriptions.
* Use cached JSON first to build up the page, than perform XHR for the JSON. When an update is retrieved, highlight the update button, but don't auto update.
