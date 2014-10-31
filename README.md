Movienight
==========

What shall we watch tonight?


Android App that lists all your movies with (http://www.themoviedb.org/) poster and description.

Also show episode guides (incl. aired dates) for preconfigured TV shows.

## Implementation

* Using [ionic](http://ionicframework.com/)
* Calls an URL to get a JSON list of all the movies with posters and descriptions.
* Use cached JSON first to build up the page, than perform XHR for the JSON. When an update is retrieved, highlight the update button, but don't auto update.


# Development:

following this tutorial: http://learn.ionicframework.com/videos/windows-android/
and install gulp.


* ionic serve (run in browser)
* ionic emulate android (run in emulator)

## Icon
copy icon to \Movienight\platforms\android\ant-build\res\drawable

## Deploy to phone

* plug in phone
* USB debugging should be enabled
* run ```ionic run android```

if fails: 

* adb devices -l (should list the device)
* install driver from emulated CD drive when plugging in the phone (I used Windows 7 64 bit for Windows 8.1)
