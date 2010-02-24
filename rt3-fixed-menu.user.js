// ==UserScript==
// @name           Request Tracker 3.6 Fixed Menu
// @namespace      http://lcsee.wvu.edu
// @description    Creates a fixed action menu on the bottom of the window.
// @include        https://rt.lcsee.wvu.edu/request-tracker/Ticket/*
// ==/UserScript==
//
// Written by Tim 'Shaggy' Bielawa <timbielawa@gmail.com>
// http://peopleareducks.com

header = document.getElementById("header");
floatingHeader = header.cloneNode(true);

titleHeader = floatingHeader.getElementsByTagName("h1")[0];
floatingHeader.removeChild(titleHeader);
floatingHeader.setAttribute("style", "position:fixed; width: 100%; z-index:100; bottom: 0px; left: 0px; ");
	
document.body.setAttribute("style", "margin-bottom: 17px;");
footer = document.getElementById("footer");
document.body.insertBefore(floatingHeader, footer);


