// JavaScript Document

if(window.location.protocol == "http:") {
	var newURL = window.location.replace("http://", "https://");
	window.location = newURL;
}