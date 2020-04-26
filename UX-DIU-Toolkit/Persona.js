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
				Goals: ["Ampliar el ámbito de su negocio y darlo a conocer en el plano logístico internacional.", "Explorar nuevas aventuras y salir de la rutina de trabajo.", "Encontrar a una mujer con la que formar una familia.", "Ayudar a su madre con el cuidado de su padre enfermo.", "Conocer a nuevas personas que le aporten tanto en el entorno personal como profesional.", "Ponerse en forma y cuidar su alimentación. En definitiva, cuidar de su salud."],
				Frustrations: ["Vida monótona llena de rutina insufrible.", "Estrés a causa de las largas horas de trabajo para mantener la empresa.", "Sufre por no poder darle la atención que le gustaría a sus padres.", "Siempre ha soñado con formar una familia y ha dejado de creer en el amor.", "Su empresa se encuentra estancada y le frustra el hecho de ver que el trabajo que aporta no mejora la situación.", "Le gustaría haber estudiado ADE para haber podido gestionar mejor desde un principio su empresa"],
				Bio: "Es un hombre nacido en Huércal de Almería, con la edad de 19 años se independizó y se fué a vivir a Almería capital, donde empezó a crear una empresa de logística junto con su hermano mayor. Más adelante comenzó a estudiar cursos de administración de empresas para mejorar en el ámbito del desarrollo de la administración de su propia empresa y en la actualidad se encuentra en desarrollo de la misma a nivel nacional-internacional.Por otra parte, se divorció hace unos meses de la mujer que consideraba el amor de su vida. Tras esto ha intentado rehacer su vida entorno a sus antiguos amigos y familia. Jose se encuentra en un momento de introspección personal y busca nuevas aventuras, quiere crecer como persona.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "Se encuentra abrumado y saturado por sus problemas personales y profesionales y necesita desconectar. Para ello tiene en mente viajar junto con un grupo de amigos de Huercal a Madrid y pasar la semana santa de manera 'juvenil' al igual que hacían cuando eran más jóvenes. Planean ir de fiesta y de ocio por la capital para olvidar las preocupaciones de sus responsabilidades diarias y sufrir un rejuvenecimiento psicológico.",
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
				Goals: ["Sueña con montar un imperio en el mundo de las telecomunicaciones y vivir despreocupada.", "Crear una familia y poder brindarle un gran futuro a través de su esfuerzo.", "Viajar por todo el mundo, conocer nuevas culturas.", "Aportar valor a la sociedad con su esfuerzo y trabajo a nivel empresarial. Poder ayudar a jóvenes empresarios en su inicio y desarrollo empresarial.", "Aprender nuevos idiomas le ayudaría tanto a nivel profesonal como personal."],
				Frustrations: ["Se encuentra atrapada en Madrid por su responsabilidad laboral a cargo de su empresa.", "Tiene dificultades para encontrar inversores y darle valor a su empresa. Trabaja muy duro para conseguir despegar en el mercado, pero no consigue alcanzar un nivel de influencia demasiado grande.", "Se hace cargo de sus hermanos pequeños por la falta de  sus padres, esto le imposibilita invertir en I+D en su empresa y poder crecer .", "Su pareja está en paro y esto crea una situación dificil a nivel personal.", "Se siente incomprendida, pues es vegana y encuentra que la sociedad no está aún preparada para albergar personas con ese 'lifestyle'."],
				Bio: "Nacida en Toledo, hija de una familia humilde. Se trasladó a Madrid tras acabar la carrera de A.D.E en su ciudad natal y posteriormente comenzó a trabajar en una empresa tecnológica en Madrid. Tras lo cuál inició su proyecto empresarial bajo un modelo de negocio similar al que pertenecía la empresa para la que trabajó los años posteriores a finalizar su grado universitario. Una vez iniciado su camino empresarial encontró a su actual pareja con la que pretende formar una familia, sin embargo la situación profesional de este les genera inestabilidad y no encuentran el momento de normalizar sus vidas. Por otra parte, su familia es un caos y tiene que hacerse cargo de sus hermanos pequeños a diario. Se trata de una chica risueña y con mucho carácter, que siempre da la cara frente a las adversidades.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "Sueña con darle una sorpresa a su pareja tras 5 años de relación. Está buscando un viaje inolvidable, puesto que ambos necesitan salir de la rutina y soñar con un futuro mejor. Quieren sentirse fuera de preocupaciones y no pasar por momentos desagradables." ,
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
