// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
var cities = document.getElementsByClassName("cities"); /*variable para llamar a las sedes*/

for (var i = 0; i < cities.length; i++) { /*iterando sobre las sedes*/
	cities[i].addEventListener("mouseenter",showSubMenu); /*agrego el evento mouseenter y la función showSubMenu*/
}

function showSubMenu (){ /*declaro la función showSubMenu*/
	var listMenu = this.getElementsByClassName('generation')[0]; /*declaro la variable listSubMenu y uso "this" para el elemento sobre el cual posicione el mouse, y llamo a las generaciones*/
	console.log(listMenu);

	if (listMenu.classList.contains("hide")) { /*si la ul de la lista tiene como clase hide*/
		listMenu.classList.remove("hide"); /*se la quito*/
		listMenu.classList.add("show"); /*y le doy la clase show*/
		console.log(listMenu); /*para verla en la consola*/
	} 

	for (var i = 0; i < cities.length; i++) { /*iterando sobre las sedes*/
	cities[i].addEventListener("mouseleave",hideSubMenu); /*agrego el evento mouseenter y la función showSubMenu*/
	}

	function hideSubMenu (){
		var listMenu = this.getElementsByClassName('generation')[0]; /*declaro la variable listSubMenu y uso "this" para el elemento sobre el cual posicione el mouse, y llamo a las generaciones*/
		console.log(listMenu);

	if (listMenu.classList.contains("show")) { /*si la ul de la lista tiene como clase show*/
		listMenu.classList.remove("show"); /*se la quito*/
		listMenu.classList.add("hide"); /*y le doy la clase hide*/
		console.log(listMenu);/*para verla en la consola*/
	}
	}	
}

var settings = document.getElementsByClassName("list")[0]; /*variable para llamar al settings*/

settings.addEventListener("mouseenter",settingsMenu); /*agrego el evento mouseenter y la función settingsMenu*/

function settingsMenu (){ /*declaro la función settingsMenu*/
	var listSettingsMenu = document.getElementsByClassName('list-settings')[0]; /*declaro la variable listSettingsMenu, que llama al elemento ul de la lista*/

	if (listSettingsMenu.classList.contains("hide")) { /*si la ul de la lista tiene como clase hide*/
		listSettingsMenu.classList.remove("hide"); /*se la quito*/
		listSettingsMenu.classList.add("show"); /*y le doy la clase show*/
		console.log(listSettingsMenu); /*para verla en la consola*/
	} 

	settings.addEventListener("mouseleave",hideSettingsMenu); /*agrego el evento mouseleave y la función hideSettingsMenu*/
	
	function hideSettingsMenu (){

	if (listSettingsMenu.classList.contains("show")) { /*si la ul de la lista tiene como clase show*/
		listSettingsMenu.classList.remove("show"); /*se la quito*/
		listSettingsMenu.classList.add("hide"); /*y le doy la clase hide*/
		console.log(listSettingsMenu); /*para verla en la consola*/
	}
	}	
}		

var dashboard = document.getElementsByClassName("integrant")[0]; /*variable para llamar al dashboard*/

dashboard.addEventListener("mouseenter",dashboardMenu); /*agrego el evento mouseenter y la función settingsMenu*/

function dashboardMenu (){ /*declaro la función dashboardMenu*/
	var listDashboardMenu = document.getElementsByClassName('list-dashboard')[0]; /*declaro la variable listDashboardMenu, que llama al elemento ul de la lista*/

	if (listDashboardMenu.classList.contains("hide")) { /*si la ul de la lista tiene como clase hide*/
		listDashboardMenu.classList.remove("hide"); /*se la quito*/
		listDashboardMenu.classList.add("show"); /*y le doy la clase show*/
		console.log(listDashboardMenu); /*para verla en la consola*/
	} 

	dashboard.addEventListener("mouseleave",hideDashboardMenu); /*agrego el evento mouseleave y la función hideDashboardMenu*/
	
	function hideDashboardMenu (){

	if (listDashboardMenu.classList.contains("show")) { /*si la ul de la lista tiene como clase show*/
		listDashboardMenu.classList.remove("show"); /*se la quito*/
		listDashboardMenu.classList.add("hide"); /*y le doy la clase hide*/
		console.log(listDashboardMenu); /*para verla en la consola*/
	}
	}	
}		