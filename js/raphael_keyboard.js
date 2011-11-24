window.onload = function () {
	//--------------Editable Stuff-------------------------------
	
	// Keyboard Height
	var keyboard_height = 100;
	
	// Keyboard Width
	var keyboard_width = 624;
	
	// White Key Color
	var white_color = 'white';
	
	// Black Key Color
	var black_color = 'black';
	
	// Number of octaves
	var octaves = 6;
	
	// ID of containing Div
	var div_id = 'keyboard';
	
	//------------------------------------------------------------

	// Creates canvas 700 x 200 in above defined div
	var paper = Raphael(div_id, keyboard_width, keyboard_height);

	// Define white key specs
	var white_width = keyboard_width / 52;

	// Define black key specs
	var black_width = white_width/2;
	var black_height = keyboard_height/1.6;


	// cycle through each octave

	var repeat = 0;
	keyboard_keys = [];
	for (i=0;i<octaves;i++) {

		//white keys in back
		keyboard_keys["C"+i] = paper.rect(white_width*repeat, 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["D"+i] = paper.rect(white_width*(repeat+1), 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["E"+i] = paper.rect(white_width*(repeat+2), 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["F"+i] = paper.rect(white_width*(repeat+3), 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["G"+i] = paper.rect(white_width*(repeat+4), 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["A"+i] = paper.rect(white_width*(repeat+5), 0, white_width, keyboard_height).attr("fill", white_color);
		keyboard_keys["B"+i] = paper.rect(white_width*(repeat+6), 0, white_width, keyboard_height).attr("fill", white_color);
				
		//black keys on top
		keyboard_keys["Csharp"+i] = paper.rect((white_width*repeat) +(black_width*1.5), 0, black_width, black_height).attr("fill", black_color);
		keyboard_keys["Dsharp"+i] = paper.rect((white_width*repeat) +(black_width*3.5), 0, black_width, black_height).attr("fill", black_color);
		keyboard_keys["Fsharp"+i] = paper.rect((white_width*repeat) +(black_width*7.5), 0, black_width, black_height).attr("fill", black_color);
		keyboard_keys["Gsharp"+i] = paper.rect((white_width*repeat) +(black_width*9.5), 0, black_width, black_height).attr("fill", black_color);
		keyboard_keys["Asharp"+i] = paper.rect((white_width*repeat) +(black_width*11.5), 0, black_width, black_height).attr("fill", black_color);
		
		repeat = repeat+7;
		}
	
	// Key highlighting example
	keyboard_keys.C1.attr("fill", "yellow");
	keyboard_keys.G1.attr("fill", "yellow");
	keyboard_keys.C2.attr("fill", "yellow");
	keyboard_keys.E2.attr("fill", "yellow");
};