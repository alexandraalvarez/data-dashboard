/*<i class="fa fa-times" aria-hidden="true"></i> para el fantasma

En los menus cascada, falta agregar opciones de ver el overview, alumnos y profesores, cosa de que cuando quiera verlos, 
pinche eso y listo */
var bodyDocument = document.getElementsByTagName("body");
bodyDocument.onload = function(){ /*para que aparezca las noticias al cargar la página*/
	var dailyNews = document.createElement("div"); /*creación de div para las noticias diarias*/
	dailyNews.setAttribute("class","daily-news"); /*dándole clase para poder darle estilos en CSS*/
	body.appendChild(dailyNews); /*asignándole como padre el body (parece que con ésto aparece al final)*/

	var seeNews = document.createElement("button"); /*creando el botón que le permitirá ir a ver las novedades a otra página*/
	seeNews.setAttribute("class","see-news"); /*para darle clase al botón y poder modificar su estilo en CSS*/
	dailyNews.appendChild(seeNews); /*dándole como padre el div de noticias diarias, para que aparezca ahí*/

	var textSeeNews = document.createTextNode("Ver noticias"); /*texto para que el botón diga ver noticias*/
	seeNews.appendChild(textSeeNews); /*dándole como padre el botón al nodo de texto (ahora el botón dice algo)*/

	function  clickOn (){
		if (seeNews.onclick()) {
			dailyNews.setAttribute("display","none");
		}
   }

}

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);