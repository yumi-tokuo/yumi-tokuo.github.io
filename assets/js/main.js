(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);

if (window.CSS && CSS.supports("color", "var(--primary)")) {
	var toggleColorMode = function toggleColorMode(e) {
	  // Switch to Light Mode
	  if (e.currentTarget.classList.contains("light--hidden")) {
		// Sets the custom html attribute
		document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage
  
		localStorage.setItem("color-mode", "light");
		return;
	  }
	  /* Switch to Dark Mode
	  Sets the custom html attribute */
	  document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage
  
	  localStorage.setItem("color-mode", "dark");
	}; // Get the buttons in the DOM
  
	var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners
  
	toggleColorButtons.forEach(function(btn) {
	  btn.addEventListener("click", toggleColorMode);
	});
  } else {
	// If the feature isn't supported, then we hide the toggle buttons
	var btnContainer = document.querySelector(".color-mode__header");
	btnContainer.style.display = "none";
  }