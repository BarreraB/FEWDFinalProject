

/**********************
********HAMBURGER MENU****
*************************/ 
var hamburger = $('#drop-down-nav');
var mNav = $('.nav-links');


function dropDown(){
	var status = mNav.hasClass('active');

	if (!status) {
		mNav.addClass('active');
	} else {
		mNav.removeClass('active');
	}

}
$('#drop-down-nav').click(dropDown);


// Only on Projects.html
	// Testing and then will
	// add to the rest of project

/************************************
*************************************
************* FADE SCROLL ************
**************************************
*************************************/

$(function() {

	var documentEl = $(document),
	fadeElem = $('.fade-scroll');


	documentEl.on('scroll', function() {
		var currScrollPos = documentEl.scrollTop();

		fadeElem.each(function() {
			var $this = $(this),
			elemOffsetTop = $this.offset().top;
			if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
		}); 
	});

});

/***************************************
****************************************
****************************************
******** FADE IN TEXT ON SCROLL ********
****************************************
****************************************
***************************************/

$(function() {
	var aboutEl = $('div.content-wrapper');
	var aboutElOffset = aboutEl.offset().top/2;
	var documentEl = $(document);

	documentEl.on('scroll', function() {
		if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) { 

			aboutEl.removeClass('hidden');
		}
	});
});

/***************************
****************************
**** FORM VALIDATION *******
****************************
***************************/

var form = document.querySelector('form');
var email = document.querySelector('#mail');
var error = document.querySelector('.error');

email.addEventListener('input', function(event) {
	if(email.validity.valid) {
		error.innerHTML = '';
		error.className = 'error';
	}
});
form.addEventListener('submit', function(event) {

	event.preventDefault();
	if(!email.validity.valid) {
		error.innerHTML = 'Insert valid email address';
		error.className = 'error active';
	}

});
