/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jose Luis Torres",
                Photo: "p2.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus amigos en Semana Santa, pero sus vacaciones comienzan el Martes Santo",
                touch1: "Móvil <--> App Mensajería ('WhatsApp')",
                feel1: "2",
                con1: "La mayoría de sus amigos terminan de trabajar el Miércoles Santo, pero no se deciden por una fecha y un lugar",
                ima1: "movilenfado.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca una casa para alquilar con espacio para albergar al grupo",
                touch2: "Ordenador de sobremesa",
                feel2: "4",
                con2: "A pesar de su dificultad con la tecnología, se encuentra con una interfaz cómoda y le permite filtrar fácilmente las opciones viables para el grupo",
                ima2: "contentopc.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Elige junto a sus amigos el alojamiento entre las opciones seleccionadas en la fase de búsqueda",
                touch3: "Móvil <--> App Mensajería ('WhatsApp')",
                feel3: "2",
                con3: "Buscar opciones en el lugar que había seleccionado teniendo en cuenta la búsqueda previa, viendo precios y distancias, tiene que ver si hay aparcamiento fácil para albergar sus vehículos",
                ima3: "whatsapptalk.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se encarga de contactar por vía telefónica con los propietarios para preguntar acerca de la movilidad y el aparcamiento de vehículos por la zona, pues no encuentra demasiadas opciones con garaje incluido",
                touch4: "Móvil <--> Llamada telefónica",
                feel4: "3",
                con4: "Le preocupa la movilidad y el aparcamiento del coche, pues no ha visto facilidad para ese servicio puesto que se publicictan alojamientos normalmente sin esos servicios incluidos. Sin embargo, algunos de los propietarios le dan soluciones. En definitiva, siente que debería de darse más facilidades en cuanto a ese aspecto en la web",
                ima4: "llamadatelefonica.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Escoge una de las opciones en función de la selección final en cuanto a las preferencias grupales, para ello reune a sus compañeros y anotan la decisión",
                touch5: "Bloc de notas",
                feel5: "4",
                con5: "Hay dificultades a la hora de concertar la reunión y pierden la posibilidad de reservar ciertas opciones",
                ima5: "blocnotas.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue realizar la reserva del alojamiento",
                touch6: "Ordenador de sobremesa",
                feel6: "3",
                con6: "Algunos de sus amigos no confirmaron la asistencia al viaje antes de realizar la reserva, y no hay manera de cancelar la reserva una vez hecha",
                ima6: "reservaalojamiento.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Julia Rodriguez",
                Photo: "p1.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Plantea un viaje junto con su pareja para descansar de los problemas personales y profesionales que sufre día a día",
                touch1: "Móvil <--> App ('Calendario`)",
                feel1: "5",
                con1: "Le gustaría ir a un país exótico en lo que a naturaleza se refiere, pero sabe del peligro de esos países y de la falta de civilización en algunos de los casos",
                ima1: "pensativa.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Se reune con un grupo de amigas y les pregunta sobre la reserva de alojamientos online para poder tener algo de información sobre opciones",
                touch2: "Móvil <--> App ('Notas`)",
                feel2: "2",
                con2: "Sus amigas están desinformadas sobre servicios online de reserva de alojamientos, y ella es la primera vez que intenta reservar un alojamiento de manera online. Sin embargo, saca opciones y entre todas encuentran algunas opciones a valorar",
                ima2: "charlachicas.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Revisa las webs que ofertan reserva de alojamientos",
                touch3: "Móvil <--> App ('Navegador Web`)",
                feel3: "3",
                con3: "Se encuentra con webs similares y con demasiada información por pantalla ('interfaz web cargada'). Finalmente selecciona una web con buen filtro de búsqueda y diseño minimalista. Sin embargo, la web escogida muestra la información necesaria",
                ima3: "navegandoweb.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra mucha oferta de alojamientos en ciudades con gran potencial turístico o con gran volúmen de habitantes",
                touch4: "Ordenador portátil <--> App ('Navegador Web`)",
                feel4: "3",
                con4: "Encuentra muchas opciones interesantes, pero se tratan de lugares urbanos de gran volúmen turístico y ella estaba buscando una experiencia más exótica y diferente",
                ima4: "navegandopc.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Finalmente reserva un apartamento en París para visitar la ciudad a fondo",
                touch5: "Móvil <--> App",
                feel5: "4",
                con5: "La reserva se realiza de manera sencilla y da la posibilidad de acceder a los datos del propietario. Sin embargo, no da opcion a reembolsar el dinero de la reserva si esta finalmente se debe cancelar",
                ima5: "reservandomovil.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva un alojamiento maravilloso en París, pero no consigue encontrar alojamiento en un lugar más exótico como tenía en mente",
                touch6: "Móvil <--> App",
                feel6: "4",
                con6: "Tendrá que informarse sobre la ciudad y las posibilidades que esta le ofrece a partir de la localización del apartamento, la única información en relación a la ubicación del mismo es simplemente la posición en el mapa de la ciudad. Para obtener más información deberán consultar al propietario o probar suerte por internet",
                ima6: "buscandoweb.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



