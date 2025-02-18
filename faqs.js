/*Assignment 5 Part 2*/
"use strict";

// Variable that allow to control the animation of h1 element when a content is display or hide.
let control = false;

$(document).ready(() => {
	$("#accordion").accordion({
		// Determines the event that will display the content.
		event: "click",
		// Determines the height of the accordion panels, with "content" the panels will fit their content.
		heightStyle: "content",
		collapsible: true,
		// It will display the content that match with the index, for example, 0 will display the first element when the accordion loads.
		active: 0,
		// It will allow to change the icon that is displayed in the h3 elements.
		icons: {
			header: "ui-icon-plus",
			activeHeader: "ui-icon-minus",
		},
		// It will execute the code every time one content is display or hide.
		activate: () => {
			if (!control) {
				$("h1").css("color", "rgb(8, 8, 185)");
				$("h1").animate({ fontSize: "+=50%" }, 500);
				control = true;
			} else {
				$("h1").css("color", "rgb(13, 156, 167)");
				$("h1").animate({ fontSize: "-=50%" }, 500);
				control = false;
			}
		},
	});
});
