

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



/*******************************************
********************************************
************ ANIMATE FOOTER LOGO ***********
********************************************
*******************************************/
    var pix = $('.claimpix-logo');
    function animateLogo() {
    	var status = pix.hasClass('active');
    	if(status) {
    		pix.removeClass('active');
    	} else {
    		pix.addClass('active');
    	}

    }
    $('.claimpix-logo').click(animateLogo);
  

    var navItem = $('itemClass');
    function animateLinks(item) {
    	var status = navItem.hasClass('active');
    	if(status) {
    		item.removeClass('active');
    	} else {
    		item.addClass('active');
    	}
   }

   // $('.footer-item').mouseenter(animateLinks);
    //$('.footer-item').mouseleave(animateLinks);

    function footerItemEvent(itemClass) {
    	var navItem = $(itemClass);
    	$(itemClass).mouseenter(function(){
    		animateLinks(navItem);
    	});

    	$(itemClass).mouseleave(function(){
    		animateLinks(navItem);
    	});

    }

    footerItemEvent('.footer-item');   
    footerItemEvent('.footer-item-1');
    footerItemEvent('.footer-item-2');




/***************************
****************************
**** FORM VALIDATION *******
****************************
***************************/

//var form = document.querySelector('form');
//var email = document.querySelector('#mail');
//var error = document.querySelector('.error');

//email.addEventListener('input', function(event) {
//	if(email.validity.valid) {
//		error.innerHTML = '';
//		error.className = 'error';
//	}
//});
//form.addEventListener('submit', function(event) {

//	event.preventDefault();
//	if(!email.validity.valid) {
//		error.innerHTML = 'Insert valid email address';
//		error.className = 'error active';
//	} else {
  //    // submit the form
      // AJAX
    //  $.ajax({
      //  type: 'POST',
        //url: '/',
       // data: { email: email.value },
     // }).done(function(response){
       // console.log("Successfully sent the form!");
     // });

//}
//});


 //var circ = document.querySelector('.claimpix-logo');
    //circ.addEventListener('click', function(){
      //var status = circ.classList.contains('active');

      //if(status) {
       // circ.classList.remove('active');
      //} else {
       // circ.classList.add('active');
      //}
    //});




    //var navFooter = $('.footer-item-1');
    //function animateSecLink() {
    	//var status = navFooter.hasClass('active');
    	//if(status) {
    		//navFooter.removeClass('active');
    	//} else {
    		//navFooter.addClass('active');
    	//}
    //}

   // $('.footer-item-1').mouseenter(animateSecLink);
