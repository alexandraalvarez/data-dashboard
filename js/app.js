// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
var cities = document.getElementsByClassName("cities"); /*variable para llamar a las sedes*/

for (var i = 0; i < cities.length; i++) { /*iterando sobre las sedes*/
	cities[i].addEventListener("mouseenter",showSubMenu); /*agrego el evento mouseenter y la función showSubMenu*/
}

function showSubMenu (){ /*declaro la función showSubMenu*/
	var listMenu = this.getElementsByClassName('generation')[0]; /*declaro la variable listSubMenu y uso "this" para el elemento sobre el cual posicione el mouse, y llamo a las generaciones*/
	console.log(listMenu);

	if (listMenu.classList.contains("hide")) {
		listMenu.classList.remove("hide");
		listMenu.classList.add("show");
		console.log(listMenu);
	} 

	for (var i = 0; i < cities.length; i++) { /*iterando sobre las sedes*/
	cities[i].addEventListener("mouseleave",hideSubMenu); /*agrego el evento mouseenter y la función showSubMenu*/
	}

	function hideSubMenu (){
		var listMenu = this.getElementsByClassName('generation')[0]; /*declaro la variable listSubMenu y uso "this" para el elemento sobre el cual posicione el mouse, y llamo a las generaciones*/
		console.log(listMenu);

	if (listMenu.classList.contains("show")) {
		listMenu.classList.remove("show");
		listMenu.classList.add("hide");
		console.log(listMenu);
	}
	}	
}	