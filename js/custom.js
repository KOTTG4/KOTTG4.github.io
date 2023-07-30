/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });

	 /* Scroll to
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 $(document).ready(function() {
		$("#navHome, #navAboutme, #navPortfolio, #navContact").on("click", function(event) {
			console.log("Clicked on:", this.id)
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1000, function() {
					window.location.hash = hash;
				});
			}
		});
	});
	/* Smooth scroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
		  console.log(entry);
		  if (entry.isIntersecting) {
			entry.target.classList.add('show');
		  } else {
			entry.target.classList.remove('show');
		  }
		});
	  });
	  
	  const hiddenElements = document.querySelectorAll('.hidden');
	  hiddenElements.forEach((el) => observer.observe(el));
	/* Cookies Consent
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	const cookieBox = document.querySelector(".wrapper");
	const buttons = document.querySelectorAll(".button");

	if (document.cookie.includes("cookieby=codinglab")) return;
	cookieBox.classList.add("show"); 

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
		cookieBox.classList.remove("show");

		if (button.id === "acceptBtn") {
			document.cookie = "cookieby=codinglab; max-age=" + 60 * 60 * 24;
		}
		});
	});
});

	/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function openNav() {
  		document.getElementById("mySidepanel").style.width = "250px";
	}

	function closeNav() {
  		document.getElementById("mySidepanel").style.width = "0";
	}