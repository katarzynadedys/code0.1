
	var numer= Math.floor(Math.random()*9)+1;
	
			var timer1 = 0;
			var timer2 = 0;
			
	function schowaj()
			{
				$("#slider").fadeOut(500);
			}
	
	function zmienslajd()
	{
		numer++; if (numer>9) numer=1;
		
		var plik = "<img src=\"slajdy/f" + numer + ".jpg\" />";
		
		document.getElementById("slider").innerHTML= plik;
		$("#slider").fadeIn(500);

		timer1 = setTimeout("zmienslajd()", 5000);
		timer2 = setTimeout("schowaj()", 4500);
	}
	
	
	