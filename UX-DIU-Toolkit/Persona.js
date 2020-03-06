/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU2.MACC";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/MigueCc99/DIU20";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Jose Luis Torres",
				Photo: "p2.png",
				Quote: "Honor y respeto",
				Age: 54,
				Occupation: "Empresario Autónomo.",
				Family: "Divorciado.",
				Location: "Almería (capital).",
				Character: "Trabajador y luchador.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Disfrutar de la naturaleza.", "Volver a sentirse joven.", "Salir de la rutina y explorar nuevos entornos.", "Formar una familia.", "Retomar el contacto con sus amigos de la juventud."],
				Frustrations: ["Tiene muchas dificultades con la tecnología y los aparatos electrónicos, le gustaría revertir la situación.", "Vida monótona llena de rutina insufrible.", "Estrés a causa de las largas horas de trabajo para mantener la empresa."],
				Bio: "Es de Modril y vino a Granada para estudiar administración de empresas, pero no ha tenido grandes oportunidades de trabajo. LLeva 2 años contratado en la empresa actual. Aqui ha hecho buenos amigo en el trabajo y normalmente ser reunen para fiestas y a veces organizan viajes.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "LLeva un tiempo preocupado y quiere desconectar Le gustaría dar una sorpresa a sus amigos para las vacaciones.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Julia Rodriguez",
				Photo: "p1.png",
				Quote: "Carácter y raza",
				Age: 32,
				Occupation: "Rodriguez Technologies CEO (chief executive officer).",
				Family: "Con pareja desde hace 5 años.",
				Location: "Madrid (capital).",
				Character: "Visceral, con fuerte personalidad y carácter.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Triunfar en el ámbito de su propia empresa.", "Crear una familia y poder brindarle un gran futuro.", "Viajar por todo el mundo, conocer nuevas culturas.", "Aportar valor a la sociedad."],
				Frustrations: ["Se encuentra atrapada en Madrid.", "Dificultades en susa acciones empresariales.", "Se hace cargo de sus hermanos pequeños por la falta de sus padres, esto le imposibilita invertir en I+D en su empresa y poder crecer .", "Su pareja está en paro."],
				Bio: "Nacida en Toledo, hija de una familia humilde. Se trasladó a Madrid tras acabar la carrera de A.D.E en su ciudad natal y posteriormente comenzó a trabajar en una empresa tecnológica en Madrid. Tras lo cuál inició su proyecto empresarial bajo un modelo de negocio similar al que pertenecía la empresa para la que trabajó los años posteriores a finalizar su grado universitario.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "Sueña con darle una sorpresa a su pareja tras 5 años de relación. Está buscando un viaje inolvidable para ambos." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
