window.onload = function () {
	//--------------Editable Stuff-------------------------------
	
	// Keyboard Height
	var keyboard_height = 100;
	
	// Keyboard Width
	var keyboard_width = 624;
	
	// Number of octaves
	var octaves = 6;
	
	// ID of containing Div
	var div_id = 'keyboard';
	
	//------------------------------------------------------------

	// Creates canvas 800 x 200 at 10, 10
	var paper = Raphael(div_id, 700, 200);

	// Define white key specs
	var white_width = keyboard_width / 52;
	
		// Define black key specs
	var black_width = white_width/2;
	var black_height = keyboard_height/1.6;
	
	// cycle threw each octave
	var repeat = 0;
	keyboard_keys = [];
	for (i=0;i<=octaves;i++) {
		//white keys in back
		keyboard_keys["C"+i] = paper.rect(white_width*repeat, 0, white_width, keyboard_height);
		keyboard_keys["D"+i] = paper.rect(white_width*(repeat+1), 0, white_width, keyboard_height);
		keyboard_keys["E"+i] = paper.rect(white_width*(repeat+2), 0, white_width, keyboard_height);
		keyboard_keys["F"+i] = paper.rect(white_width*(repeat+3), 0, white_width, keyboard_height);
		keyboard_keys["G"+i] = paper.rect(white_width*(repeat+4), 0, white_width, keyboard_height);
		keyboard_keys["A"+i] = paper.rect(white_width*(repeat+5), 0, white_width, keyboard_height);
		keyboard_keys["B"+i] = paper.rect(white_width*(repeat+6), 0, white_width, keyboard_height);
				
		//black keys on top
		keyboard_keys["Csharp"+i] = paper.rect((white_width*repeat) +(black_width*1.5), 0, black_width, black_height).attr("fill", "black");
		keyboard_keys["Dsharp"+i] = paper.rect((white_width*repeat) +(black_width*3.5), 0, black_width, black_height).attr("fill", "black");
		keyboard_keys["Fsharp"+i] = paper.rect((white_width*repeat) +(black_width*7.5), 0, black_width, black_height).attr("fill", "black");
		keyboard_keys["Gsharp"+i] = paper.rect((white_width*repeat) +(black_width*9.5), 0, black_width, black_height).attr("fill", "black");
		keyboard_keys["Asharp"+i] = paper.rect((white_width*repeat) +(black_width*11.5), 0, black_width, black_height).attr("fill", "black");
		
		repeat = repeat+7;
		}
};