// ==UserScript==
// @name           Request Tracker 3.6 Auto Comment Focus
// @namespace      http://lcsee.wvu.edu
// @description    Auto create new lines before your signature and focus on the input box
// @include        https://rt.lcsee.wvu.edu/request-tracker/Ticket/Update.html?Action=*
// ==/UserScript==
//
// Written by Tim 'Shaggy' Bielawa <timbielawa@gmail.com>
// http://peopleareducks.com

function getCommentBox() {
    return document.getElementsByName("UpdateContent")[0];
}

window.addEventListener("load", function(e) {
	box = getCommentBox();
	box.value = "\n\n" + box.value;
	box.focus();
    }, false);
