<<<<<<< HEAD
import React from 'react';

/*
1 Cerraduras electr�nicas
2 Cerraduras mec�nicas
3 Accesorios Soporte
4 Salidas PUSH emergencia
5 Cierra puertas
6 Sensores y cantoneras electr�nicas
7 Redes cableado estructurado
8 Acceso suspendido en alturas

1.	L�NEA CERRADURAS ELECTR�NICAS
2.	L�NEA CERRADURAS MEC�NICAS
3.	L�NEA ACCESORIOS SOPORTE
4.	L�NEA SALIDAS PUSH EMERGENCIA
5.	L�NEA CIERRA PUERTAS
6.	L�NEA SENSORES Y CANTONERAS ELECTR�NICAS
7.	L�NEA REDES CABLEADO ESTRUCTURADO
8.	L�NEA ACCESO SUSPENDIDO EN ALTURAS
*/

const data = {
    "Productos": [

        "1 Cerraduras electr�nicas": [
            {
                "_id": "SCH-AD-400",
                "index": 0,
                "titulo": "Cerradura Bloqueo Red Inal�mbrica AD-400",
                "imagen": "Cerradura Bloqueo Red Inal�mbrica AD-400",
                "marca": "Schlage",
                "descripcion": "cuentan con lector de credenciales incorporado y sensores de control de acceso para una instalaci�n simplificada. El AD-400 permite una amplia gama de opciones de credenciales, incluidas las credenciales de PIN, banda magn�tica, proximidad (125 kHz) e inteligente (13.56 MHz); Los lectores de tarjetas + PIN est�n disponibles para mayor seguridad.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AD-402",
                "index": 1,
                "titulo": "Cerradura Integraci�n Inal�mbrica AD-402",
                "imagen": "Cerradura Integraci�n Inal�mbrica AD-402",
                "marca": "Schlage",
                "descripcion": "Cerraduras electr�nicas inal�mbricas listas para integraci�n, Probado y aprobado la integraci�n FIPS 201-2. El control de acceso y el bloqueo en tiempo real son posibles en una soluci�n de seguridad inal�mbrica integral. El AD-402 es totalmente compatible con PIV y PIV-I para la autenticaci�n dual a un servidor externo basado en la nube.",
                "garantia": "10 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-LE",
                "index": 2,
                "titulo": "Cerradura Red Inal�mbrica Serie LE",
                "imagen": "Cerradura Red Inal�mbrica Serie LE",
                "marca": "Schlage",
                "descripcion": "lector de credenciales y sensores de control de acceso juntos en acceso por huella elegante y asequible. El chasis LE se puede pedir con un bot�n interior o un cerrojo para aplicaciones espec�ficas. La capacidad incluye el uso de credenciales de proximidad (125 kHz) y / o Smart (13.56 MHz) que ofrecen un nivel mucho m�s alto de seguridad y versatilidad.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-NDE",
                "index": 3,
                "titulo": "Cerradura Red Inal�mbrica Serie NDE",
                "imagen": "Cerradura Red Inal�mbrica Serie NDE",
                "marca": "Schlage",
                "descripcion": "lector de credenciales y sensores de control de acceso juntos en acceso por huella elegante y asequible. El chasis LE se puede pedir con un bot�n interior o un cerrojo para aplicaciones espec�ficas. La capacidad incluye el uso de credenciales de proximidad (125 kHz) y / o Smart (13.56 MHz) que ofrecen un nivel mucho m�s alto de seguridad y versatilidad. Use la puerta de enlace ENGAGE � para conectividad en tiempo real y bloqueo a trav�s de IP PoE. La NDE tambi�n se puede conectar a una red Wi-Fi para actualizaciones autom�ticas directamente desde el software del host.",
                "garantia": "15 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CTM",
                "index": 4,
                "titulo": "Cerraduras inteligentes Control TM",
                "imagen": "Cerraduras inteligentes Control TM",
                "marca": "Schlage",
                "descripcion": "una nueva era de control de acceso electr�nico en el mercado multifamiliar al dar paso a la pr�xima generaci�n de capacidades altamente escalables y que aumentan la eficiencia.",
                "garantia": "10 a�os",
                "precio": "$1 300.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AD300",
                "index": 5,
                "titulo": "Cerradura Bloqueo Red Inal�mbrica AD300",
                "imagen": "Cerradura Bloqueo Red Inal�mbrica AD300",
                "marca": "Schlage",
                "descripcion": "Se integran en los sistemas de control de acceso electr�nico populares de los miembros de la Alianza de software para ofrecer una soluci�n integral de EAC. El AD-300 permite una amplia gama de opciones de credenciales, incluidas las credenciales de PIN, banda magn�tica, proximidad (125 kHz) e inteligente (13.56 MHz); Los lectores de tarjetas + PIN est�n disponibles para mayor seguridad.",
                "garantia": "10 years",
                "precio": "$376.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AD-302",
                "index": 6,
                "titulo": "Cerradura Integraci�n Inal�mbrica AD-302",
                "imagen": "Cerradura Integraci�n Inal�mbrica AD-302",
                "marca": "Schlage",
                "descripcion": "El AD-302 es totalmente compatible con PIV y PIV-I para la autenticaci�n dual en un servidor externo basado en la nube. Los bloqueos AD-302 se conectan y se comunican directamente a un Panel de control de acceso (ACP) que funciona independientemente de la red de TI para la conectividad y el bloqueo en tiempo real.",
                "garantia": "10 years",
                "precio": "$290.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AD-200",
                "index": 7,
                "titulo": "Cerradura SCH-AD-200",
                "imagen": "Cerradura SCH-AD-200",
                "marca": "Schlage",
                "descripcion": "Los bloqueos sin conexi�n AD-200 pueden programarse manualmente, administrarse con Schlage Express � o con un sistema sin conexi�n de miembros seleccionados de la Alianza de Software.",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AD-250",
                "index": 8,
                "titulo": "Cerradura SCH-AD-250",
                "imagen": "Cerradura SCH-AD-250",
                "marca": "Schlage",
                "descripcion": "Soluci�n de bloqueo sin conexi�n en la que la credencial lleva los derechos de acceso en una tarjeta de banda magn�tica. Esto permite la gesti�n din�mica de derechos en la tarjeta sin reprogramar cada cerradura en la instalaci�n, sin embargo, la cerradura a�n mantiene una pista de auditor�a de eventos en la puerta. Esto lo convierte en una soluci�n inteligente y econ�mica para entornos de campus con un gran n�mero de usuarios y aperturas sin conexi�n.",
                "garantia": "3 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CO-100",
                "index": 9,
                "titulo": "Cerradura SCH-CO-100",
                "imagen": "Cerradura SCH-CO-100",
                "marca": "Schlage",
                "descripcion": "Dise�ado para un uso f�cil, use c�digos PIN de 3 a 6 d�gitos como credenciales. Los usuarios de nivel de administrador pueden programarlo directamente en la puerta para agregar o eliminar c�digos PIN de usuario o cambiar preferencias o funciones en cualquier momento.",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CO-200",
                "index": 10,
                "titulo": "Cerradura SCH-CO-200",
                "imagen": "Cerradura SCH-CO-200",
                "marca": "Schlage",
                "descripcion": "Puede ser manual o programada por computadora con descargas que se producen en la cerradura a trav�s de un dispositivo de mano. El uso de credenciales puede incluir tarjetas de PIN, de proximidad y de banda magn�tica de 3 a 6 d�gitos; Los lectores de tarjeta de autenticaci�n dual + PIN est�n disponibles para mayor seguridad. M�s importante a�n, este bloqueo ofrece hasta 2000 usuarios con capacidad de auditor�a para anotar qui�n, d�nde y cu�ndo acceder al edificio o la habitaci�n.",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CO-220",
                "index": 11,
                "titulo": "Cerradura SCH-CO-220",
                "imagen": "Cerradura SCH-CO-220",
                "marca": "Schlage",
                "descripcion": "Permite el bloqueo inmediato de hasta diez CO-200 dentro del alcance en caso de surgir una emergencia. Usando un mando remoto usado por el maestro, el bloqueo puede ocurrir dentro de los 2 segundos de presionar el bot�n del mando.",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CO-250",
                "index": 12,
                "titulo": "Cerradura SCH-CO-250",
                "imagen": "Cerradura SCH-CO-250",
                "marca": "Schlage",
                "descripcion": "Soluci�n de bloqueo sin conexi�n en la que la credencial lleva los derechos de acceso en una tarjeta de banda magn�tica. Esto permite la gesti�n din�mica de derechos en la tarjeta sin reprogramar cada cerradura en la instalaci�n, sin embargo, la cerradura a�n mantiene una pista de auditor�a de eventos en la puerta. Esto lo convierte en una soluci�n inteligente y econ�mica para entornos de campus con un gran n�mero de usuarios y aperturas sin conexi�n.",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            }     
        ],

        "2 Cerraduras mec�nicas": [
            {
                "_id": "PDQ-SD-PHL",
                "index": 0,
                "titulo": "Palanca Serie PDQ-SD Grado 2",
                "imagen": "Palanca Serie PDQ-SD Grado 2",
                "marca": "PDQ",
                "descripcion": "Estas palancas comerciales est�n disponibles en una amplia selecci�n de funciones y 3 acabados diferentes. Cumple con ANSI / BHMA A156.2-1996, Serie 4000, Grado 2 y con ADA. Listado por UL / ULC para clasificaciones de etiqueta A (3 horas) y menos, presi�n positiva UL10C / UBC 7-2 (1997), para puertas simples de 4 x 8 pies. Ajustables para puertas de 1 3/8 in a 1 3/4 in. Instale la preparaci�n de puertas comerciales est�ndar de 160 y 161 (orificio de 2 1/8 in). Tornillos pasantes extra�bles para usar en puertas que no est�n perforadas previamente y no requieren pernos pasantes.Connect Century",
                "garantia": "10 a�os",
                "precio": "$191.600",
                "solicitud": "ya"
            },
            {
                "_id": "PDQ-SD-MEM",
                "index": 1,
                "titulo": "Palancas comerciales PDQ Memphis",
                "imagen": "Palancas comerciales PDQ Memphis",
                "marca": "PDQ",
                "descripcion": "Estas palancas comerciales est�n disponibles en una amplia selecci�n de funciones y 3 acabados diferentes.Cumple con ANSI / BHMA A156.2 - 1996, Serie 4000, Grado 2 y con ADA.Listado por UL / ULC para clasificaciones de etiqueta A(3 horas) y menos, presi�n positiva UL10C / UBC 7-2 (1997), para puertas simples de 4 x 8 pies. Ajustables para puertas de 1 3/8 in a 1 3 / 4 in.Instale la preparaci�n de puertas comerciales est�ndar de 160 y 161(orificio de 2 1 / 8 in).Tornillos pasantes extra�bles para usar en puertas que no est�n perforadas previamente y no requieren pernos pasantes.Connect Century",
                "garantia": "10 a�os",
                "precio": "$191.600",
                "solicitud": "ya"
            },
            {
                "_id": "PDQ-SD-ORL",
                "index": 2,
                "titulo": "Palancas comerciales Orlando Lever",
                "imagen": "Palancas comerciales Orlando Lever",
                "marca": "PDQ",
                "descripcion": "Estas palancas comerciales est�n disponibles en una amplia selecci�n de funciones y 3 acabados diferentes.Cumple con ANSI / BHMA A156.2 - 1996, Serie 4000, Grado 2 y con ADA.Listado por UL / ULC para clasificaciones de etiqueta A(3 horas) y menos, presi�n positiva UL10C / UBC 7-2 (1997), para puertas simples de 4 x 8 pies. Ajustables para puertas de 1 3/8 in a 1 3 / 4 in.Instale la preparaci�n de puertas comerciales est�ndar de 160 y 161(orificio de 2 1 / 8 in).Tornillos pasantes extra�bles para usar en puertas que no est�n perforadas previamente y no requieren pernos pasantes.Connect Century",
                "garantia": "10 a�os",
                "precio": "$191.600",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-GAL-xxxxL",
                "index": 3,
                "titulo": "Palancas Series Global GAL",
                "imagen": "Palancas Series Global GAL",
                "marca": "PDQ",
                "descripcion": "Estas palancas comerciales est�n disponibles en una amplia selecci�n de funciones y 3 acabados diferentes.Cumple con ANSI / BHMA A156.2 - 1996, Serie 4000, Grado 2 y con ADA.Listado por UL / ULC para clasificaciones de etiqueta A(3 horas) y menos, presi�n positiva UL10C / UBC 7-2 (1997), para puertas simples de 4 x 8 pies. Ajustables para puertas de 1 3/8 in a 1 3 / 4 in.Instale la preparaci�n de puertas comerciales est�ndar de 160 y 161(orificio de 2 1 / 8 in).Tornillos pasantes extra�bles para usar en puertas que no est�n perforadas previamente y no requieren pernos pasantes.Connect Century",
                "garantia": "10 a�os",
                "precio": "$127.760",
                "solicitud": "ya"
            },
            {
                "_id": "PDQ-SV",
                "index": 4,
                "titulo": "Perillas Series PDQ SV",
                "imagen": "Perillas Series PDQ SV",
                "marca": "PDQ",
                "descripcion": "Las perillas de puertas comerciales se adquieren a precios econ�micos disponibles en una amplia selecci�n de funciones y acabados. La perilla grande estilo bola es f�cil de agarrar y se ve genial. Cumple con ANSI A156.2, Serie 4000, Grado 2. Listado por UL / ULC para clasificaciones de A(3 horas) y menos, UL10C / UBC 7-2 (1997) presi�n positiva, para puertas simples hasta 4 x 8 pies.",
                "garantia": "5 a�os",
                "precio": "$127.760",
                "solicitud": "ya"
            },
            {
                "_id": "PDQ-GT-PHL",
                "index": 5,
                "titulo": "Perillas Series PDQ GT Grade 1",
                "imagen": "Perillas Series PDQ GT Grade 1",
                "marca": "PDQ",
                "descripcion": "Probado a m�s de 2 millones de ciclos sin inclinaci�n de la palanca. Estas palancas son de fundici�n s�lida para trabajo pesado, Grado 1, sin inserciones de pl�stico, y completamente ajustables para puertas de 1 � in a 2 � in. Cumple con ANSI / BHMA A156.2-1996, Serie 4000, Grado 1. Listado por UL / ULC para clasificaciones de etiqueta A (3 horas), UL10C / UBC 7-2 (1997) presi�n positiva, para puertas simples hasta 4 x 8 pies.",
                "garantia": "15 a�os",
                "precio": "$749.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AL-JUP",
                "index": 6,
                "titulo": "Palancas Jupiter Grade 2",
                "imagen": "Palancas Jupiter Grade 2",
                "marca": "Schlage",
                "descripcion": "El bloqueo de la palanca con llave de la palanca Jupiter de la serie AL utiliza el chasis cil�ndrico original de la serie A de alta calidad con soporte de jaulas de resortes de alta resistencia que proporciona resistencia y rendimiento en las aplicaciones comerciales de grado 2 m�s abusivas. Clasificaci�n UL para una puerta de incendios de 3 horas. Disponible con backsets que van desde 2 3/8 in hasta 5 in. Este conjunto de palanca y roseta funcionar� con rangos de grosor de puerta desde 1 3/8 in hasta 1 7/8 in.",
                "garantia": "10 a�os",
                "precio": "$255.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AL-NEP",
                "index": 7,
                "titulo": "Palancas Neptune Grade 2",
                "imagen": "Palancas Neptune Grade 2",
                "marca": "Schlage",
                "descripcion": "El bloqueo de la palanca con llave de la palanca Neptune de la serie AL utiliza el chasis cil�ndrico original de la serie A de alta calidad con soporte de jaulas de resortes de alta resistencia que proporciona resistencia y rendimiento en las aplicaciones comerciales de grado 2 m�s abusivas. Clasificaci�n UL para una puerta de incendios de 3 horas. Disponible con backsets que van desde 2 3/8 in hasta 5 in. Este conjunto de palanca y roseta funcionar� con rangos de grosor de puerta desde 1 3/8 in hasta 1 7/8 in.",
                "garantia": "10 a�os",
                "precio": "$255.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AL-SAT",
                "index": 8,
                "titulo": "Palancas Saturn Grade 2",
                "imagen": "Palancas Saturn Grade 2",
                "marca": "Schlage",
                "descripcion": "El bloqueo de la palanca con llave de la palanca Saturn de la serie AL utiliza el chasis cil�ndrico original de la serie A de alta calidad con soporte de jaulas de resortes de alta resistencia que proporciona resistencia y rendimiento en las aplicaciones comerciales de grado 2 m�s abusivas. Clasificaci�n UL para una puerta de incendios de 3 horas. Disponible con backsets que van desde 2 3/8 in hasta 5 in. Este conjunto de palanca y roseta funcionar� con rangos de grosor de puerta desde 1 3/8 in hasta 1 7/8 in.",
                "garantia": "10 years",
                "precio": "$255.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-A-ORB",
                "index": 9,
                "titulo": "Perillas Series A Orbit",
                "imagen": "Perillas Series A Orbit",
                "marca": "Schlage",
                "descripcion": "Una perilla de �rbita de bola cl�sica, se ajustar� a todos los recortes de puertas est�ndar con 2 3/8 in, 2 3/4 in, 3 3/4 in, o 5 en backset. Cumple con las normas ANSI de grado 2 y est� en la lista UL para 3 horas contra incendios. Disponible en 5 acabados.",
                "garantia": "10 a�os",
                "precio": "$287.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-A-PLY",
                "index": 10,
                "titulo": "Perillas Series A Plymouth",
                "imagen": "Perillas Series A Plymouth",
                "marca": "Schlage",
                "descripcion": "El estilo tradicional le permite integrarse perfectamente en cualquier decoraci�n. Se ajustar� a todos los recortes de puertas est�ndar con 2 3/8 in, 2 3/4 in, 3 3/4 in, o 5 en backset. Cumple con las normas ANSI de grado 2 y est� en la lista UL para 3 horas contra incendios. Disponible en 5 acabados.",
                "garantia": "10 a�os",
                "precio": "$287.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-A-TUL",
                "index": 11,
                "titulo": "Perillas Series A Tulip",
                "imagen": "Perillas Series A Tulip",
                "marca": "Schlage",
                "descripcion": "Una forma de campana. Se ajustar� a todos los recortes de puertas est�ndar con 2 3/8 in, 2 3/4 in, 3 3/4 in, o 5 en backset. Cumple con las normas ANSI de grado 2 y est� en la lista UL para 3 horas contra incendios. Disponible en 5 acabados.",
                "garantia": "10 a�os",
                "precio": "$314.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-ND-ATH",
                "index": 12,
                "titulo": "Palancas Series Athens Grade 1",
                "imagen": "Palancas Series Athens Grade 1",
                "marca": "Schlage",
                "descripcion": "Est� disponible en una amplia gama de funciones comerciales de bloqueo disponibles para satisfacer todas las necesidades de la aplicaci�n, backset 2 � est�ndar. Esta palanca de grado 1 est� listado en UL para puertas cortafuego de 3 horas.",
                "garantia": "10 years",
                "precio": "$418.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-ND-RHO",
                "index": 13,
                "titulo": "Palancas Series Rhodes Grade 1",
                "imagen": "Palancas Series Rhodes Grade 1",
                "marca": "Schlage",
                "descripcion": "Esta palanca es duradera con una garant�a mec�nica de 7 a�os y una calificaci�n ANSI de Grado 1. Tiene clasificaci�n UL contra incendios para una puerta contra incendios de 3 horas. El grosor de la puerta es de 1 5/8 pulg. A 2 1/8 pulg, y los fondos disponibles incluyen 2 3/8, 2 3/4, 3 3/4 y 5 pulg.",
                "garantia": "7 years",
                "precio": "$418.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-ND-SPA",
                "index": 14,
                "titulo": "Palancas Series Sparta Grade 1",
                "imagen": "Palancas Series Sparta Grade 1",
                "marca": "Schlage",
                "descripcion": "Esta palanca es duradera con una garant�a mec�nica de 7 a�os y una calificaci�n ANSI de Grado 1. Tiene clasificaci�n UL contra incendios para una puerta contra incendios de 3 horas. El grosor de la puerta es de 1 5/8 pulg. A 2 1/8 pulg, y los fondos disponibles incluyen 2 3/8, 2 3/4, 3 3/4 y 5 pulg.",
                "garantia": "7 years",
                "precio": "$418.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-D-ORB",
                "index": 15,
                "titulo": "Perillas D-ORB Orbit Grado 1",
                "imagen": "Perillas D-ORB Orbit Grado 1",
                "marca": "Schlage",
                "descripcion": "Una perilla de �rbita de bola cl�sica. Si bien el backset 2 3/4 viene de serie, tambi�n est�n disponibles 2 3/8, 3 3/4 y 5 en los pestillos backset. Adecuado para puertas con un grosor de 1 3/8 a 2 pulg. Una cerradura de grado 1, esta manija hecha por Schlage est� certificada por UL para puertas contra incendios de 3 horas.",
                "garantia": "10 years",
                "precio": "$1 759.900",
                "solicitud": "ya"
            },
            {
                "_id": "FAL-B-series",
                "index": 16,
                "titulo": "Palanca Falcon B-series Dane Grade 2",
                "imagen": "Palanca Falcon B-series Dane Grade 2",
                "marca": "Schlage",
                "descripcion": "Las palancas que cumplen con la ley ADA son zinc s�lido fundido a presi�n. Las rosas comerciales est�ndar de 3 1/2 de di�metro son de lat�n forjado instalado sobre placas de refuerzo de acero. Un retenedor cargado por resorte asegura las palancas. Cumple con ANSI / BHMA A156.2, Serie 4000, Grado 2. Pestillo listado por UL.",
                "garantia": "7 years",
                "precio": "$359.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B252PD",
                "index": 17,
                "titulo": "Cerraduras B252PD Compuerta de doble cilindro",
                "imagen": "Cerraduras B252PD Compuerta de doble cilindro",
                "marca": "Schlage",
                "descripcion": "Para su uso en puertas donde se requiere auto-enclavamiento. Ideal para espacios comunitarios en edificios de departamentos o condominios. Se adapta a 1 3/4 en puertas gruesas. Disponible en cromo satinado, lat�n brillante y acabados en bronce al aceite.",
                "garantia": "10 years",
                "precio": "$680.311",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B252PD",
                "index": 18,
                "titulo": "Cerraduras B252PD Compuerta de doble cilindro",
                "imagen": "Cerraduras B252PD Compuerta de doble cilindro",
                "marca": "Schlage",
                "descripcion": "Para su uso en puertas donde se requiere auto-enclavamiento. Ideal para espacios comunitarios en edificios de departamentos o condominios. Se adapta a 1 3/4 en puertas gruesas. Disponible en cromo satinado, lat�n brillante y acabados en bronce al aceite.",
                "garantia": "10 years",
                "precio": "$680.311",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B571",
                "index": 19,
                "titulo": "Cerraduras B571 con indicador de ocupaci�n",
                "imagen": "Cerraduras B571 con indicador de ocupaci�n",
                "marca": "Schlage",
                "descripcion": "El cerrojo es lanzado o retra�do por una unidad de giro hacia adentro. El indicador de ocupaci�n en el exterior indica "En uso" o "Vacante". F�cil de instalar, este cerrojo Schlage se puede ajustar para adaptarse a conjuntos de 2 3/8 in o 2 3/4 in.",
                "garantia": "5 years",
                "precio": "$159.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B250PD",
                "index": 20,
                "titulo": "Cerraduras B250PD Compuerta de cilindro sencillo",
                "imagen": "Cerraduras B250PD Compuerta de cilindro sencillo",
                "marca": "Schlage",
                "descripcion": "Para su uso en puertas donde se requiere auto-enclavamiento. Ideal para espacios comunitarios en edificios de departamentos o condominios. Se adapta a 1 3/4 en puertas gruesas. Disponible en cromo satinado, lat�n brillante y acabados en bronce al aceite.",
                "garantia": "10 years",
                "precio": "$614.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-ND-OME",
                "index": 21,
                "titulo": "Palancas Series Omega Grade 1",
                "imagen": "Palancas Series Omega Grade 1",
                "marca": "Schlage",
                "descripcion": "La palanca de Schlage Omega, delgada y curva, est� disponible en una amplia gama de funciones de bloqueo comercial para satisfacer todas las necesidades de la aplicaci�n.Construido fuerte, este conjunto de palancas comercial ANSI Grado 1 tiene una garant�a mec�nica de 7 a�os y est� listado por UL para puertas cortafuego de 3 horas.El grosor de la puerta disponible var�a de 1 5/8 a 2 1/8 in, y los fondos disponibles incluyen 2 3/8, 2 3/4, 3 3 / 4 y 5 in.",
                "garantia": "10 years",
                "precio": "$414.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-AL-OME",
                "index": 22,
                "titulo": "Palancas Series Omega Grade 2",
                "imagen": "Palancas Series Omega Grade 2",
                "marca": "Schlage",
                "descripcion": "La palanca de Schlage Omega, delgada y curva, est� disponible en una amplia gama de funciones de bloqueo comercial para satisfacer todas las necesidades de la aplicaci�n.Construido fuerte, este conjunto de palancas comercial ANSI Grado 1 tiene una garant�a mec�nica de 7 a�os y est� listado por UL para puertas cortafuego de 3 horas.El grosor de la puerta disponible var�a de 1 5/8 a 2 1/8 in, y los fondos disponibles incluyen 2 3/8, 2 3/4, 3 3 / 4 y 5 in.",
                "garantia": "10 years",
                "precio": "$429.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-S251PD-FLA",
                "index": 23,
                "titulo": "Juego de mangos ovalado series S251PD con estilo palanca",
                "imagen": "Juego de mangos ovalado series S251PD con estilo palanca",
                "marca": "Schlage",
                "descripcion": "Es una placa de entrada de doble bloqueo, con un cerrojo de cilindro �nico sobre un pestillo girado. Las dos cerraduras est�n interconectadas, girando la palanca interior retrae el cerrojo y el pestillo simult�neamente para una salida inmediata.",
                "garantia": "10 years",
                "precio": "$429.600",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B581",
                "index": 24,
                "titulo": "Cerraduras B581 Cerrojo de una cara",
                "imagen": "Cerraduras B581 Cerrojo de una cara",
                "marca": "Schlage",
                "descripcion": "El cerrojo de seguridad de un lado de Schlage con respaldo universal ajustable y perno de tiro de 1 pulgada usa un tornillo interior con una placa exterior para cubrir la preparaci�n de la puerta expuesta en el exterior. Un cerrojo de grado 2 certificado ANSI, el B581 incluye una placa de refuerzo reforzada.",
                "garantia": "10 years",
                "precio": "$143.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1101-PM",
                "index": 25,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1101PM",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1101PM",
                "marca": "Mul-T-Lock",
                "descripcion": "El enorme perno de acero laminado de cinco capas con pasador de acero endurecido oculto proporciona la m�xima seguridad. Dise�ado para puertas de entrada de escaparate enmarcadas en aluminio o acero.",
                "garantia": "10 years",
                "precio": "$527.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1101-PB",
                "index": 26,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1101PB",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1101PB",
                "marca": "Mul-T-Lock",
                "descripcion": "El enorme perno de acero laminado de cinco capas con pasador de acero endurecido oculto proporciona la m�xima seguridad. Dise�ado para puertas de entrada de escaparate enmarcadas en aluminio o acero.",
                "garantia": "10 years",
                "precio": "$191.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1102-PM",
                "index": 27,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1102PM",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1102PM",
                "marca": "Mul-T-Lock",
                "descripcion": "La cerradura de puerta delantera deslizante, es de alta seguridad. El cuerpo de embutir con gancho est� dise�ado para deslizar en puertas de aluminio o acero. Un gran perno de acero laminado de cinco capas que tiene un pasador de acero endurecido oculto proporciona la m�xima seguridad.",
                "garantia": "10 years",
                "precio": "$523.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1102-PB",
                "index": 28,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1102PB",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1102PB",
                "marca": "Mul-T-Lock",
                "descripcion": "La cerradura de puerta delantera deslizante, es de alta seguridad. El cuerpo de embutir con gancho est� dise�ado para deslizar en puertas de aluminio o acero. Un gran perno de acero laminado de cinco capas que tiene un pasador de acero endurecido oculto proporciona la m�xima seguridad.",
                "garantia": "10 years",
                "precio": "$156.600",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1103-PM",
                "index": 29,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1103PM",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1103PM",
                "marca": "Mul-T-Lock",
                "descripcion": "Estos juegos completos de empalmes de mortaja con cilindro de muesca Mul-T-Lock a prueba de golpes, protector de bloqueo de cilindro y mango de paleta de empujar / tirar.",
                "garantia": "10 years",
                "precio": "$673.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1103-PBSC",
                "index": 30,
                "titulo": "Conjunto Cerradura alta seguridad MulTLock TH1103PBSC",
                "imagen": "Conjunto Cerradura alta seguridad MulTLock TH1103PBSC",
                "marca": "Mul-T-Lock",
                "descripcion": "Estos juegos completos de empalmes de mortaja con cilindro de muesca Mul-T-Lock a prueba de golpes, protector de bloqueo de cilindro y mango de paleta de empujar / tirar.",
                "garantia": "10 years",
                "precio": "$332.300",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1100-BC",
                "index": 31,
                "titulo": "Cilindro GLO-TH1100-BC",
                "imagen": "Cilindro GLO-TH1100-BC",
                "marca": "Mul-T-Lock",
                "descripcion": "Cilindro de cierre de 1 pulgada para puertas de escaparate, lat�n macizo",
                "garantia": "10 years",
                "precio": "$44.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1100-BCX2",
                "index": 32,
                "titulo": "Cilindro GLO-TH1100-BCX2",
                "imagen": "Cilindro GLO-TH1100-BCX2",
                "marca": "Mul-T-Lock",
                "descripcion": "Cerraduras de embutir de doble cilindro para puertas de escaparate, lat�n macizo",
                "garantia": "10 years",
                "precio": "$94.900",
                "solicitud": "ya"
            },
            {
                "_id": "MTL-206SP-MOR0C01-26",
                "index": 33,
                "titulo": "Cilindro MTL-206SP-MOR0C01-26",
                "imagen": "Cilindro MTL-206SP-MOR0C01-26",
                "marca": "Mul-T-Lock",
                "descripcion": "Cilindro de bloqueo de seguridad de 1 pulgada de alta seguridad",
                "garantia": "10 years",
                "precio": "$392.900",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1100-BT",
                "index": 34,
                "titulo": "Cerrojo GLO-TH1100-BT",
                "imagen": "Cerrojo GLO-TH1100-BT",
                "marca": "Mul-T-Lock",
                "descripcion": "Cilindro de cierre de 1 pulgada para puertas de escaparate, lat�n macizo",
                "garantia": "10 years",
                "precio": "$41.600",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1100-RC",
                "index": 35,
                "titulo": "Cerrojo GLO-TH1100-RC",
                "imagen": "Cerrojo GLO-TH1100-RC",
                "marca": "Mul-T-Lock",
                "descripcion": "Cilindro de cierre de 1 pulgada para puertas de escaparate, lat�n macizo",
                "garantia": "10 years",
                "precio": "$57.400",
                "solicitud": "ya"
            },
            {
                "_id": "GLO-TH1100-PUSH",
                "index": 36,
                "titulo": "Cerrojo GLO-TH1100-PUSH",
                "imagen": "Cerrojo GLO-TH1100-PUSH",
                "marca": "Schlage",
                "descripcion": "Paleta Push Pull de cierre ",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-LT",
                "index": 37,
                "titulo": "Cerradura Palanca Series LT",
                "imagen": "Cerradura Palanca Series LT",
                "marca": "Schlage",
                "descripcion": "Las opciones personalizables incluyen 31 estilos de palanca, catorce acabados y cuatro funciones. Los bloqueos superan los requisitos de ANSI / BHMA Grado 2",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-CS200",
                "index": 38,
                "titulo": "Cerraduras interconectadas CS200",
                "imagen": "Cerraduras interconectadas CS200",
                "marca": "Schlage",
                "descripcion": "Cuenta con una salida de un solo movimiento, que retrae el pestillo y el cerrojo simplemente girando la palanca interior. Supera los requisitos de BHMA Grado 2 para uso operativo, seguridad, ciclo y acabado. Los 18 dise�os de palanca, dos dise�os de cerrojo exterior y dos dise�os de escudo interior, cada uno en una selecci�n de siete acabados, garantizan la est�tica correcta para cualquier proyecto.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-S",
                "index": 39,
                "titulo": "Cerraduras Serie S Interiores",
                "imagen": "Cerraduras Serie S Interiores",
                "marca": "Schlage",
                "descripcion": "Los componentes de bloqueo son tratados t�rmicamente, mientras que las palancas s�lidas en zinc plateado agregan resistencia para una larga vida y una durabilidad �ptima. Los cuatro dise�os de palanca son compatibles con ADA con opciones de advertencia t�ctil.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-S200",
                "index": 40,
                "titulo": "Cerraduras interconectadas S200",
                "imagen": "Cerraduras interconectadas S200",
                "marca": "Schlage",
                "descripcion": "Dise�ado para ofrecer una salida f�cil y seguridad confiable. Centr�ndose en la seguridad, la seguridad y el rendimiento duradero, esta cerradura est� probada para superar los 400,000 ciclos ANSI. F�cil de instalar y mantener, este candado mantiene a las personas y las propiedades seguras.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B250",
                "index": 41,
                "titulo": "Cerrojo Pestillo Muerto Serie B250 Grado 2",
                "imagen": "Cerrojo Pestillo Muerto Serie B250 Grado 2",
                "marca": "Schlage",
                "descripcion": "Cuando se utiliza en puertas s�lidas como un solo cilindro con giro manual, la funci�n de retenci�n permite que el pestillo permanezca retra�do para que la cerradura se pueda usar como protecci�n nocturna.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-B",
                "index": 42,
                "titulo": "Cerrojo Series B600, B700 and B800 Grade 1",
                "imagen": "Cerrojo Series B600, B700 and B800 Grade 1",
                "marca": "Schlage",
                "descripcion": "Los cerrojos de la serie B se encuentran entre los m�s seguros y duraderos de la industria. Los cerrojos comerciales de grado 1 tambi�n se encuentran entre los m�s hermosos, con un elegante anillo de adorno de �ngulo amplio en una profundidad de 7/8 de profundidad que se ofrece en 11 acabados.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-HL6",
                "index": 43,
                "titulo": "Cierre de hospital serie HL6",
                "imagen": "Cierre de hospital serie HL6",
                "marca": "Schlage",
                "descripcion": "Existen muchas fuentes de ruido, pero elegir un hardware de puerta silenciosa puede ayudar a reducir el exceso de ruido y crear ambientes m�s silenciosos. El recientemente redise�ado hardware silencioso push / pull de la Serie HL ofrece a las organizaciones de atenci�n m�dica una soluci�n confiable para iniciativas de reducci�n de ruido.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            }, 
            {
                "_id": "SCH-LM9200",
                "index": 44,
                "titulo": "Cerradura Serie LM9200 Dos Puntos",
                "imagen": "Cerradura Serie LM9200 Dos Puntos",
                "marca": "Schlage",
                "descripcion": "Los pestillos de la parte superior e inferior de la puerta, en lugar del lado, permiten que ambas hojas de un par de puertas est�n activas. Compatible con puertas de madera o de metal hueco, la serie LM9200 tambi�n est� disponible sin el pestillo inferior para un solo punto de enganche. Est� disponible en 13 funciones y con 31 dise�os de palanca.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            }, 
            {
                "_id": "SCH-LM9300",
                "index": 45,
                "titulo": "Cerradura de tres puntos serie LM9300",
                "imagen": "Cerradura de tres puntos serie LM9300",
                "marca": "Schlage",
                "descripcion": "Los pestillos en la parte superior, lateral e inferior de la puerta brindan protecci�n contra altas velocidades del viento y 15 libras. el proyectil impacta hasta 100 mph cuando se combina con una puerta resistente al tornado Steelcraft Paladin.",
                "garantia": "10 years",
                "precio": "$140.900",
                "solicitud": "ya"
            } 
        ], 

        "3 Accesorios Soporte": [            
            {
                "_id": "LCN-SEH",
                "index": 0,
                "titulo": "Soporte Series SEH",
                "imagen": "Soporte Series SEH",
                "marca": "LCN",
                "descripcion": "Proporciona una funci�n de apertura y apertura de un solo punto para puertas de barrera contra incendios y humo que se deben usar con los cierrapuertas listados por UL en el lado opuesto. Est� respaldado por una garant�a limitada de 2 a�os y cumple con las normas ANSI / BHMA A156.15 y NFPA 101 Life Safety Code. Mantiene la puerta abierta hasta que una interrupci�n de la corriente el�ctrica libera el mecanismo de retenci�n.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4310HSA-4410HSA",
                "index": 1,
                "titulo": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "imagen": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "marca": "LCN",
                "descripcion": "Estos cierres con soporte controlado el�ctricamente est�n dise�ados para proporcionar un paso f�cil a trav�s de puertas de alto tr�nsito.Cuentan con una funci�n de retenci�n de apertura activada por esc�ner, con un per�odo de retenci�n de apertura ajustable.Cumplen con los est�ndares del C�digo de seguridad de vida ANSI / BHMA A156.15 y NFPA 101, y cuentan con una garant�a de 2 a�os.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4310HSA-4410HSA",
                "index": 2,
                "titulo": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "imagen": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "marca": "LCN",
                "descripcion": "Estos cierres con soporte controlado el�ctricamente est�n dise�ados para proporcionar un paso f�cil a trav�s de puertas de alto tr�nsito.Cuentan con una funci�n de retenci�n de apertura activada por esc�ner, con un per�odo de retenci�n de apertura ajustable.Cumplen con los est�ndares del C�digo de seguridad de vida ANSI / BHMA A156.15 y NFPA 101, y cuentan con una garant�a de 2 a�os.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4310HSA-4410HSA",
                "index": 3,
                "titulo": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "imagen": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "marca": "LCN",
                "descripcion": "Estos cierres con soporte controlado el�ctricamente est�n dise�ados para proporcionar un paso f�cil a trav�s de puertas de alto tr�nsito.Cuentan con una funci�n de retenci�n de apertura activada por esc�ner, con un per�odo de retenci�n de apertura ajustable.Cumplen con los est�ndares del C�digo de seguridad de vida ANSI / BHMA A156.15 y NFPA 101, y cuentan con una garant�a de 2 a�os.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
        ],

        "4 Salidas PUSH emergencia": [
            {
                "_id": "VONDUPRIN-98-99-33-35A",
                "index": 0,
                "titulo": "Push Pads Series 98-99 33-35A",
                "imagen": "Push Pads Series 98-99 33-35A",
                "marca": "Von Duprin",
                "descripcion": "Las barras de empuje de alto rendimiento ofrecen muchas opciones personalizables. Vienen en diferentes dimensiones tanto anchas como estrechas. Los dispositivos de la Serie 98 y la Serie 35A tienen una caja de mecanismo suave, mientras que la Serie 99 y la Serie 33A tienen una caja de mecanismo ranurado.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-94-95",
                "index": 1,
                "titulo": "Push Pads Series INPACT 94-95",
                "imagen": "Push Pads Series INPACT 94-95",
                "marca": "Von Duprin",
                "descripcion": "Dise�ado espec�ficamente para reducir el impacto. Est�n totalmente integrados dentro de una puerta para protegerla del abuso. La Serie 94 tiene una caja de mecanismo suave, mientras que la Serie 95 tiene una caja de mecanismo ranurada. Tanto la Serie 94 como la 95 son dispositivos de bajo perfil y son compatibles con puertas de metal huecas. Cuentan con la certificaci�n UL y la certificaci�n ANSI / BHMA A156.3 2008 Grado 1.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-55-88",
                "index": 2,
                "titulo": "Push Pads Series Salida 55-88",
                "imagen": "Push Pads Series Salida 55-88",
                "marca": "Von Duprin",
                "descripcion": "Las barras cruzadas para dispositivos de salida son ideales para entornos que necesitan un dispositivo de aspecto tradicional, pero son para aplicaciones de trabajo pesado. La Serie 55 es un dispositivo de estilo estrecho y la Serie 88 es un dispositivo de estilo ancho. Ambas series tienen certificaci�n ANSI / BHMA A156.3, Grado 1 de 2008 y clasificaci�n UL.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-22",
                "index": 3,
                "titulo": "Push Pads Series Salida 22",
                "imagen": "Push Pads Series Salida 22",
                "marca": "Von Duprin",
                "descripcion": "Es una alternativa econ�mica que incorpora un estilo moderno de barra t�ctil para cualquier tipo de puerta. Est� disponible en varias configuraciones, en cantonera y superficie vertical, ademas combinadas con opciones electr�nicas, est� certificada por ANSI A156.3, Grado 1 y tiene clasificaciones UL contra incendios.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-QEL",
                "index": 4,
                "titulo": "Push Cierre de retracci�n silencioso",
                "imagen": "Push Cierre de retracci�n silencioso",
                "marca": "Von Duprin",
                "descripcion": "Emite un ruido operativo limitado al tiempo que proporciona el control electr�nico de un dispositivo de salida. Soluci�n de elecci�n para hospitales, bibliotecas, museos, teatros y cualquier otro lugar. Disponible en dispositivos de p�nico y contra incendios.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-RU-RM",
                "index": 5,
                "titulo": "Push de Activacion remota y Monitoreo remoto",
                "imagen": "Push de Activacion remota y Monitoreo remoto",
                "marca": "Von Duprin",
                "descripcion": "Mejora la seguridad al ampliar el alcance del sistema de control de acceso y proporciona un paquete de seguridad perimetral m�s completo. La opci�n RU es una soluci�n inal�mbrica alimentada por bater�a que permite el desbloqueo remoto y el monitoreo del estado de la puerta. Mejora la seguridad del per�metro al proporcionar la anulaci�n electr�nica de los elementos mec�nicos para el cierre de las instalaciones de emergencia. La opci�n RM es una configuraci�n de sensor, para salir de las puertas contra incendios que requieren monitoreo. Proporciona visibilidad para solicitar la salida (RX), el monitor de cerrojo (LX) y el interruptor de posici�n de la puerta (DPS). Ambos son kits modulares que se pueden agregar a cualquier dispositivo Von Duprin 98/99 o 33A / 35A existente. Se conectan a la pasarela de software ENGAGE � de Allegion a trav�s de IP o RSI.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            }, 
            {
                "_id": "VONDUPRIN-QM",
                "index": 6,
                "titulo": "Push Soluciones mec�nicas silenciosas",
                "imagen": "Push Soluciones mec�nicas silenciosas",
                "marca": "Von Duprin",
                "descripcion": "Son ideales para aplicaciones donde el ruido de funcionamiento se mantiene al m�nimo. Est� disponible para los modelos 996, as� como para dispositivos de barra vertical y superficie 98/99 y 33A / 35A. Proporciona un retorno de palanca controlado por el amortiguador con reenganche. Compatible con otras opciones mec�nicas y electr�nicas, incluida la retracci�n silenciosa del pestillo el�ctrico (QEL), el dise�o accesible (AX), la solicitud de salida del interruptor (RX), el cilindro (CD) y las gu�as hexagonales (HD) para abordar una variedad de aplicaciones. Los dispositivos Von Duprin y la moldura con QM mantienen las certificaciones ANSI BHMA A156.3 Grado 1 (2014), UL305 y UL10C.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-VR",
                "index": 7,
                "titulo": "Push Soluciones verticales ocultas",
                "imagen": "Push Soluciones verticales ocultas",
                "marca": "Von Duprin",
                "descripcion": "Para aberturas que requieren seguridad mejorada y est�tica optimizada, no se ven barras montadas en la superficie. Ofrece dos soluciones de cable vertical oculto conocidas como Cable Vertical Oculto (CVC) y Puerta Oculta de Madera (WDC). La flexibilidad y la holgura en el sistema de cable permiten que el dispositivo funcione correctamente, incluso si el pestillo superior, la l�nea central del dispositivo y el pestillo inferior no est�n alineados verticalmente.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-SI",
                "index": 8,
                "titulo": "Push Indicadores de seguridad",
                "imagen": "Push Indicadores de seguridad",
                "marca": "Von Duprin",
                "descripcion": "Los indicadores de seguridad se utilizan para situaciones de verificaci�n visual y bloqueo. Se utiliza con llave hexagonal (HDSI) o cilindro (CDSI). El indicador de se�al CDSI / HDSI proporciona una verificaci�n r�pida del estado de una puerta desde el interior de la habitaci�n.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-CHEXIT",
                "index": 9,
                "titulo": "Push Sistema de salida retrasada CHEXIT",
                "imagen": "Push Sistema de salida retrasada CHEXIT",
                "marca": "Von Duprin",
                "descripcion": "Este sistema de egreso diferido es para �reas de mayor seguridad como salud del comportamiento, cuidado de la memoria y aplicaciones de maternidad, para prevenir el secuestro o el abandono de pacientes. Es una soluci�n para aplicaciones de egreso controlado (retraso de liberaci�n indefinido) o retrasado (retraso de lanzamiento est�ndar de 15 segundos). El dispositivo CHEXIT est�ndar hace sonar una alarma y mantiene la puerta asegurada. El m�dulo CHEXIT remoto (RCM) proporciona la misma funcionalidad que un CHEXIT est�ndar para puertas m�s peque�as al colocar componentes electr�nicos en una caja de control. Del mismo modo, el DE5300 utiliza una caja de control, un dispositivo de p�nico de baja salida RX-LX de solicitud de salida y un bloqueo electromagn�tico de retenci�n directa Schlage.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-AX",
                "index": 10,
                "titulo": "Push Dispositivo Salida AX",
                "imagen": "Push Dispositivo Salida AX",
                "marca": "Von Duprin",
                "descripcion": "El dispositivo AX surgi� de la necesidad de proporcionar al mercado una soluci�n que cumpla con los est�ndares ADA recientes para el dise�o accesible (cap�tulos 404.2.7 y 309.4) y es el primer dispositivo de salida con certificaci�n UL para las mejoras del C�digo de construcci�n de California. Establece una fuerza m�xima de 5 libras en el hardware operacional.",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
        ],
                
        "5 Cierra puertas": [
            {
                "_id": "FALCON-SC70A",
                "index": 0,
                "titulo": "Cierrapuertas Series SC70A",
                "imagen": "Cierrapuertas Series SC70A",
                "marca": "Falcon",
                "descripcion": "Construido para aplicaciones de servicio pesado comerciales e institucionales ocupadas que requieren confiabilidad y f�cil mantenimiento. Con una variedad de opciones de montaje, tipos de brazos y accesorios de instalaci�n disponibles. La serie SC70A est� certificada por UL, es un producto certificado ANSI / BHMA A156.4 grado 1 y est� respaldada por una garant�a de 10 a�os. Tambi�n cumple con la ADA y ANSI A117.1.",
                "garantia": "10 years",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "FALCON-SC80A",
                "index": 1,
                "titulo": "Cierrapuertas Series SC80A",
                "imagen": "Cierrapuertas Series SC80A",
                "marca": "Falcon",
                "descripcion": "Hecho para aplicaciones ligeras a medianas, tanto interiores como exteriores. Presenta pistones de acero con tratamiento t�rmico de 1 1/4 pulg. y pi�ones con tratamiento t�rmico. El cuerpo de aluminio de una sola pieza est� dise�ado y probado seg�n los est�ndares ANSI / BHMA A156.4 Grado 1",
                "garantia": "10 years",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "FALCON-SC60A",
                "index": 2,
                "titulo": "Cierrapuertas Series SC60A",
                "imagen": "Cierrapuertas Series SC60A",
                "marca": "Falcon",
                "descripcion": "Dise�ado para aplicaciones de trabajo liviano a mediano, est� dise�ado para uso en interiores lo que lo hace ideal para una variedad de necesidades de modernizaci�n. Certificado ANSI / BHMA A156.4 grado 1, est� listado por UL y est� respaldado por una garant�a de 10 a�os.",
                "garantia": "10 years",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "FALCON-SC90A",
                "index": 3,
                "titulo": "Cierrapuertas Series SC90A",
                "imagen": "Cierrapuertas Series SC90A",
                "marca": "Falcon",
                "descripcion": "Dise�ado para aplicaciones residenciales y interiores de poca potencia. Un tama�o de resorte preestablecido proporciona una f�cil instalaci�n. El cerrador tiene tres opciones de montaje y no es de mano para puertas giratorias hacia la izquierda y hacia la derecha para mayor versatilidad. Los modelos espec�ficos disponibles son el SC91A, SC93A y SC94A. Estos cierres tienen la certificaci�n ANSI / BHMA A156.4 grado 3",
                "garantia": "10 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "FALCON-OHC100",
                "index": 4,
                "titulo": "Cierrapuertas Series OHC100",
                "imagen": "Cierrapuertas Series OHC100",
                "marca": "Falcon",
                "descripcion": "Estos cierres ocultos est�n dise�ados para ofrecer una est�tica elegante y, al mismo tiempo, ofrecen durabilidad y confiabilidad. Ofrece 2 opciones de tama�o, tiene un cuerpo de hierro fundido y encaja dentro de un cabezal de cuadro est�ndar Jackson para una f�cil adaptaci�n. Con clasificaci�n UL10C contra incendios, cumple con la Ley de Discapacidad de los Estados Unidos (ADA) y cumple con ANSI A117.1.",
                "garantia": "5 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "FALCON-8200",
                "index": 5,
                "titulo": "Cierrapuertas Series 8200",
                "imagen": "Cierrapuertas Series 8200",
                "marca": "Falcon",
                "descripcion": "Es un operador autom�tico electromec�nico de montaje en superficie dise�ado para �reas que necesitan f�cil acceso. Incluye caracter�sticas que mejoran la accesibilidad para personas con discapacidad y personas mayores. Adem�s, detecta obst�culos para detener y revertir la direcci�n de la puerta cuando es necesario y aprende los �ngulos de posici�n de apertura para eliminar el da�o de la pared y la puerta.",
                "garantia": "10 years",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4040XP",
                "index": 6,
                "titulo": "Cierrapuertas Series 4040XP",
                "imagen": "Cierrapuertas Series 4040XP",
                "marca": "LCN",
                "descripcion": "Dise�ado para las aplicaciones m�s exigentes de alto uso y abuso. Cumple con los est�ndares ANSI / BHMA A156.4 Grado 1 y los requisitos de fuerza de apertura reducidos de ADA. Este cerrador se encuentra en la lista cUL y en la lista UL para puertas de cierre autom�tico sin apertura y cuenta con una garant�a limitada de 30 a�os.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4010-4020-4110",
                "index": 7,
                "titulo": "Cierrapuertas Series 4010-4020-4110",
                "imagen": "Cierrapuertas Series 4010-4020-4110",
                "marca": "LCN",
                "descripcion": "Satisface las demandas de instalaciones de alto tr�fico y cada una est� dise�ada espec�ficamente para aplicaciones de montaje �nicas. Est�n listados por UL y cUL, cumplen con los est�ndares ANSI / BHMA grado 1 y cuentan con garant�as de 30 a�os.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4030",
                "index": 8,
                "titulo": "Cierrapuertas Series 4030",
                "imagen": "Cierrapuertas Series 4030",
                "marca": "LCN",
                "descripcion": "Es un dispositivo de cierre universal dise�ado para condiciones de tr�fico moderadas, que cumple con los est�ndares ANSI / BHMA A156.4 Grado 1 y requisitos de fuerza de apertura reducidos de ADA.Se monta en el lado de la bisagra, la jamba superior y el brazo paralelo, en las puertas giratorias hacia la izquierda o hacia la derecha.Est� listado por UL y cUL para puertas de cierre autom�tico sin retenci�n y cuenta con una garant�a limitada de 30 a�os.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4000T",
                "index": 9,
                "titulo": "Cierrapuertas Series 4000T",
                "imagen": "Cierrapuertas Series 4000T",
                "marca": "LCN",
                "descripcion": "Est� dise�ado para controlar de manera confiable las puertas de barrera contra incendios y humo. Dise�ado para usar con un im�n de pared SEM 7850, con un giro m�ximo de 90 �. El cerrador est� listado por UL y cUL con un brazo est�ndar para puertas de cierre autom�tico.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4050",
                "index": 10,
                "titulo": "Cierrapuertas Series 4050",
                "imagen": "Cierrapuertas Series 4050",
                "marca": "LCN",
                "descripcion": "Est� dise�ado para ser duradero y est� dise�ado para ser resistente en ambientes hostiles de �reas de tr�fico altamente abusivas y de alta frecuencia.Este cierrapuertas de aluminio fundido ofrece caracter�sticas de primera calidad como recubrimiento en polvo, un cojinete de complemento, fluido para todo clima y una garant�a de 25 a�os.",
                "garantia": "25 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-1460",
                "index": 11,
                "titulo": "Cierrapuertas Series 1460",
                "imagen": "Cierrapuertas Series 1460",
                "marca": "LCN",
                "descripcion": "Es un cerrador universal de servicio mediano dise�ado para la m�xima versatilidad en aplicaciones comerciales e institucionales, que cumple con los requisitos de fuerza de apertura ANSI / BHMA A156.4 Grado 1 y ADA. Se instala de forma r�pida, precisa y ofrece una variedad de opciones. Es cUL y UL para las puertas de cierre autom�tico sin retenci�n.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-1450",
                "index": 12,
                "titulo": "Cierrapuertas Series 1450",
                "imagen": "Cierrapuertas Series 1450",
                "marca": "LCN",
                "descripcion": "Este cerrador de servicio mediano est� dise�ado para brindar un rendimiento consistente y confiable desde la nueva construcci�n hasta el reemplazo del mercado de accesorios.",
                "garantia": "25 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-1260",
                "index": 13,
                "titulo": "Cierrapuertas Series 1260",
                "imagen": "Cierrapuertas Series 1260",
                "marca": "LCN",
                "descripcion": "Dise�ado para aplicaciones de trabajo liviano a mediano como un ajuste para la huella comercial m�s com�n, cumple con los requisitos de fuerza de apertura ANSI / BHMA A156.4 Grado 1 y ADA. La Serie 1260 est� listada en cUL y en UL para puertas de cierre autom�tico sin retenci�n. Las caracter�sticas tambi�n incluyen cubierta de l�nea delgada opcional.",
                "garantia": "20 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-1250",
                "index": 14,
                "titulo": "Cierrapuertas Series 1250",
                "imagen": "Cierrapuertas Series 1250",
                "marca": "LCN",
                "descripcion": "Ofrece una soluci�n alternativa m�s cercana a precios competitivos e incluye calidad, ingenier�a, confiabilidad y servicio de LCN. Este cerrador cuenta con la certificaci�n ANSI grado 1, est� fabricado en aluminio fundido duradero y est� fabricado con componentes de alta calidad.",
                "garantia": "20 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-2010-5010",
                "index": 15,
                "titulo": "Cierrapuertas Series 2010-5010",
                "imagen": "Cierrapuertas Series 2010-5010",
                "marca": "LCN",
                "descripcion": "La serie 2010 est� oculta en el marco de la puerta con la pista oculta en la puerta. La serie 5010 est� oculta en el marco con el brazo de doble palanca expuesto. Ambas series cumplen con los est�ndares ANSI / BHMA A156.4 Grado 1 y la Ley de Discapacidades de los Estados Unidos (ADA) redujo los requisitos de fuerza de apertura.",
                "garantia": "15 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-2030-5030-6030",
                "index": 16,
                "titulo": "Cierrapuertas Series 2030-5030-6030",
                "imagen": "Cierrapuertas Series 2030-5030-6030",
                "marca": "LCN",
                "descripcion": "Dise�ado para ocultarse en un travesa�o m�nimo estrecho de aluminio de 1 3/4 pulgadas, que cumple con ANSI / BHMA A156.4 Grado 1 y la Ley Estadounidense de Discapacidades (ADA). Con regulaci�n separada de la velocidad de cierre general y la velocidad de enganche. Las articulaciones de brazo y la zapata de la serie 5030 se adaptan a los bordes irregulares.",
                "garantia": "15 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-3030-3130",
                "index": 17,
                "titulo": "Cierrapuertas Series 3030-3130",
                "imagen": "Cierrapuertas Series 3030-3130",
                "marca": "LCN",
                "descripcion": "Estos cierres utilizan brazos de palanca simple y doble para un control suave de las puertas mientras est�n completamente ocultos en puertas interiores en �reas de tr�fico medio a alto. Ambas series m�s cercanas cumplen con ANSI / BHMA A156.4 Grado 1 y la Ley de Discapacidades de los Estados Unidos (ADA).",
                "garantia": "15 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-3130SE-040SE",
                "index": 18,
                "titulo": "Cierrapuertas Series Sentronic 3130SE-040SE",
                "imagen": "Cierrapuertas Series Sentronic 3130SE-040SE",
                "marca": "LCN",
                "descripcion": "Dise�ado para puertas de barrera contra incendios y humo y cumple con las normas ANSI / BHMA A156.15 y NFPA 101 Life Safety Code. Permiten que la puerta permanezca abierta hasta que la interrupci�n actual libere el mecanismo de retenci�n. Est�n listados en cUL para puertas de cierre autom�tico sin retenci�n.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-2310ME-4310ME-4410ME",
                "index": 19,
                "titulo": "Cierrapuertas Series Sentronic 2310ME-4310ME-4410ME",
                "imagen": "Cierrapuertas Series Sentronic 2310ME-4310ME-4410ME",
                "marca": "LCN",
                "descripcion": "Proporcionan puntos de retenci�n ajustables para puertas de barrera contra incendios y humo. Los cerradores est�n listados por UL para barreras de humo met�licas o puertas cortafuegos etiquetadas. Tambi�n cumplen con las normas ANSI / BHMA A156.15 y NFPA 101 Life Safety Code.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4310HSA-4410HSA",
                "index": 20,
                "titulo": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "imagen": "Cierrapuertas Series Sentronic 4310HSA-4410HSA",
                "marca": "LCN",
                "descripcion": "Estos cierres con soporte controlado el�ctricamente est�n dise�ados para proporcionar un paso f�cil a trav�s de puertas de alto tr�nsito.Cuentan con una funci�n de retenci�n de apertura activada por esc�ner, con un per�odo de retenci�n de apertura ajustable.Cumplen con los est�ndares del C�digo de seguridad de vida ANSI / BHMA A156.15 y NFPA 101, y cuentan con una garant�a de 2 a�os.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4210-4510",
                "index": 21,
                "titulo": "Cierrapuertas Series Smoothee 4210-4510",
                "imagen": "Cierrapuertas Series Smoothee 4210-4510",
                "marca": "LCN",
                "descripcion": "Estos cierres para trabajos pesados, de alta seguridad y de montaje en superficie cuentan con componentes especiales para resistir la manipulaci�n y el vandalismo. Cumplen con las normas ANSI / BHMA A156.4 Grado 1. Los cerradores est�n listados por UL para puertas de cierre autom�tico y cuentan con una garant�a limitada de 30 a�os.",
                "garantia": "30 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-2210",
                "index": 22,
                "titulo": "Cierrapuertas Series 2210",
                "imagen": "Cierrapuertas Series 2210",
                "marca": "LCN",
                "descripcion": "Esta gu�a de alta resistencia y alta seguridad cuenta con ocultaci�n completa y un dise�o a prueba de manipulaciones. La serie cumple con ANSI / BHMA A156.4 Grado 1, cumple con los requisitos de fuerza de apertura reducidos de la Ley Estadounidense de Discapacidades (ADA) y est� listada por UL y cUL para puertas de cierre autom�tico, Grado 1.",
                "garantia": "15 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-4630-4640",
                "index": 23,
                "titulo": "Cierrapuertas Series Auto Equalizer 4630-4640",
                "imagen": "Cierrapuertas Series Auto Equalizer 4630-4640",
                "marca": "LCN",
                "descripcion": "Dise�ado principalmente para aplicaciones de apertura manual que a veces requieren una apertura autom�tica. cumplen con ANSI / BHMA 156.19, cumplen con los requisitos de la Ley de Discapacidades de los Estados Unidos (ADA) y ANSI A117.1 para accesibilidad. Proporcionan un f�cil acceso para las personas mayores y las personas con discapacidad. La caja de control digital proporciona ajustes r�pidos y precisos.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-9130-9140-9150",
                "index": 24,
                "titulo": "Cierrapuertas Series Benchmark 9130-9140-9150",
                "imagen": "Cierrapuertas Series Benchmark 9130-9140-9150",
                "marca": "LCN",
                "descripcion": "Los operadores electromec�nicos de baja energ�a est�n dise�ados principalmente para aberturas autom�ticas que a veces requieren una apertura manual. Las series cumplen con las normas ANSI / BHMA A156.19 y ANSI A117.1, cumplen con la Ley de Discapacidades de los Estados Unidos (ADA) y est�n en la lista UL. La funci�n Push 'N Go se hace cargo cuando un peat�n abre manualmente la puerta a cinco grados, luego mantiene la puerta completamente abierta con un retraso de 1 a 30 segundos. Power Boost proporciona fuerza de cierre adicional en vientos severos.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-9500-2800",
                "index": 25,
                "titulo": "Cierrapuertas Series Senior Swing 9500-2800",
                "imagen": "Cierrapuertas Series Senior Swing 9500-2800",
                "marca": "LCN",
                "descripcion": "Los operadores oscilantes senior de bajo consumo de energ�a son los operadores m�s resistentes de LCN, dise�ados para uso pesado en aplicaciones principalmente autom�ticas. Cumplen con los requisitos de accesibilidad de ANSI / BHMA 156.19, la Ley de Discapacidades de los Estados Unidos (ADA) y ANSI A117.1. El aumento de potencia proporciona una fuerza de cierre adicional en vientos severos. La activaci�n sin interruptor Push �N Go se hace cargo cuando un peat�n abre manualmente la puerta a 5 �.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-2610-4810-4820-4840",
                "index": 26,
                "titulo": "Cierrapuertas Series Auto Equalizer 2610-4810-4820-4840",
                "imagen": "Cierrapuertas Series Auto Equalizer 2610-4810-4820-4840",
                "marca": "LCN",
                "descripcion": "La serie de ecualizadores autom�ticos son de accionamiento neum�tico. Estos operadores silenciosos est�n dise�ados para aplicaciones principalmente manuales que ocasionalmente requieren una apertura autom�tica. Cumplen con los requisitos de la Ley de Discapacidades de los Estados Unidos (ADA) para la accesibilidad.",
                "garantia": "2 a�os",
                "precio": "$261.000",
                "solicitud": "ya"
            }
        ],

        "6 Sensores y cantoneras electr�nicas": [
            {
                "_id": "SCH-M400",
                "index": 0,
                "titulo": "Cantonera electromagnetica Series M400",
                "imagen": "Cantonera electromagnetica Series M400",
                "marca": "Schlage",
                "descripcion": "Dise�ado espec�ficamente con el cliente en mente para ser robusto y f�cil de configurar. Diecis�is modelos cubren una amplia gama de necesidades con opciones de fuerza de retenci�n de 500, 1000 y 1500 lb. en configuraciones simples y dobles, con y sin egreso retrasado",
                "garantia": "9 a�os",
                "precio": "$421.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-M390RFK",
                "index": 1,
                "titulo": "Cantonera electromagnetica Series M390RFK",
                "imagen": "Cantonera electromagnetica Series M390RFK",
                "marca": "Schlage",
                "descripcion": "El bloqueo electromagn�tico de 1500lb serie M390RFK se instala como parte de una soluci�n de seguridad electr�nica que generalmente se utiliza con barras de empuje, dispositivos de salida y lectores de credenciales. La serie ofrece una alternativa f�cil de instalar a una huelga el�ctrica o un producto de cerradura el�ctrica.",
                "garantia": "9 a�os",
                "precio": "$421.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-320M",
                "index": 2,
                "titulo": "Cantonera electromagnetica Series 320M",
                "imagen": "Cantonera electromagnetica Series 320M",
                "marca": "Schlage",
                "descripcion": "La cerradura electromagn�tica de 500lb para puertas correderas est� dise�ada para interactuar con los sistemas de control de acceso electr�nico, los operadores de puertas autom�ticas y los sistemas de detecci�n de incendios o peligros, para proporcionar una salida ante una emergencia detectable.",
                "garantia": "9 a�os",
                "precio": "$350.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-GF3000",
                "index": 3,
                "titulo": "Cantonera electromagnetica Series GF3000",
                "imagen": "Cantonera electromagnetica Series GF3000",
                "marca": "Schalge",
                "descripcion": "Los cinco modelos de 3000lb cubren una amplia gama de necesidades y ofrecen el control electr�nico de microprocesador con la fuerza de retenci�n m�s alta de Schlage. El dise�o patentado incorpora pesta�as de bloqueo en el conjunto del im�n con ranuras de acoplamiento en la placa de la armadura.",
                "garantia": "9 a�os",
                "precio": "$409.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-M490G",
                "index": 4,
                "titulo": "Cantonera electromagnetica Series M490G",
                "imagen": "Cantonera electromagnetica Series M490G",
                "marca": "Schlage",
                "descripcion": "La cerradura de compuerta electromagn�tica M490G est� construida para soportar los rigores del uso exterior.Cuenta con la certificaci�n ANSI / BHMA para manejar el roc�o de sal y las temperaturas de congelaci�n al aire libre. 1500 libras de fuerza de retenci�n configurada para operaci�n de 12 o 24 VCC.",
                "garantia": "9 a�os",
                "precio": "$367.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-600",
                "index": 5,
                "titulo": "Pulsadores Serie 620 631",
                "imagen": "Pulsadores Serie 620 631",
                "marca": "Schlage",
                "descripcion": "Los pulsadores de las series 620 y 631 proporcionan una amplia selecci�n de opciones de dise�o, acabados y mensajes. Se ofrecen en placas de ancho estrecho y ancho est�ndar con m�ltiples configuraciones de botones y opciones de acabado para brindar un atractivo arquitect�nico mejorado.",
                "garantia": "5 a�os",
                "precio": "$376.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-700",
                "index": 6,
                "titulo": "Pulsadores Serie 700",
                "imagen": "Pulsadores Serie 700",
                "marca": "Schlage",
                "descripcion": "Control de pulsador simple para la salida en una puerta giratoria o deslizante. La placa de acero inoxidable con acabado satinado es de calidad comercial y se ofrece en anchos de montante est�ndar y estrecho.",
                "garantia": "5 a�os",
                "precio": "$390.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-DPS",
                "index": 7,
                "titulo": "Interruptores de posici�n Serie 674-679-7700",
                "imagen": "Interruptores de posici�n Serie 674-679-7700",
                "marca": "Schlage",
                "descripcion": "Vienen en una variedad de formas y tama�os, dise�ados para monitorear el estado de las puertas, las escotillas de los techos y m�s.",
                "garantia": "7 a�os",
                "precio": "$411.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-1910",
                "index": 8,
                "titulo": "Alarmas Electr�nicas Serie 1910",
                "imagen": "Alarmas Electr�nicas Serie 1910",
                "marca": "Schlage",
                "descripcion": "Las bocinas tienen seis combinaciones de volumen mediante un tono continuo o intermitente que son f�ciles de configurar. Los modelos de enganche pueden configurarse para que suenen cuando un cerrojo de la puerta se retrae o se abre la puerta. Los modelos de luz estrobosc�pica tambi�n est�n disponibles.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            }
            {
                "_id": "LCK-CS",
                "index": 9,
                "titulo": "Cantonera Electr�magnetica Serie CS",
                "imagen": "Cantonera Electr�magnetica Serie CS",
                "marca": "Locknetics",
                "descripcion": "Las series el�ctricas CS de perfil bajo, est�n dise�adas para su uso vers�til con cerraduras cil�ndricas y cerraduras de embutir.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCK-NC450",
                "index": 10,
                "titulo": "Cantonera Electr�magnetica Serie NC450",
                "imagen": "Cantonera Electr�magnetica Serie NC450",
                "marca": "Locknetics",
                "descripcion": "Se puede utilizar para convertir los juegos de cerraduras cil�ndricas en un sistema de bloqueo de acceso electr�nico controlado. No se requiere ning�n corte en el marco. Simplemente ajuste la funci�n de alineaci�n vertical a la l�nea central del perno de cierre e inst�lela.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCK-MDS100",
                "index": 11,
                "titulo": "Cantonera Electronica Serie MDS100",
                "imagen": "Cantonera Electronica Serie MDS100",
                "marca": "Locknetics",
                "descripcion": "La huelga el�ctrica de la serie MDS100 est� dise�ada para usarse con cerraduras de embutir para trabajos pesados y cerraduras cil�ndricas. Se incluyen cinco placas frontales diferentes para la flexibilidad opcional de instalaci�n en marcos de madera o metal.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCK-WMG",
                "index": 12,
                "titulo": "Cantonera Electromagnetica Serie WMG",
                "imagen": "Cantonera Electromagnetica Serie WMG",
                "marca": "Locknetics",
                "descripcion": "Dise�ado para aberturas de alto perfil que requieren una cerradura a prueba de manipulaciones con un aspecto est�ticamente agradable.Dise�ado para resistir hasta 600 lb.o 1200 lb.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCK-MG",
                "index": 13,
                "titulo": "Cantonera Electromagnetica Serie MG",
                "imagen": "Cantonera Electromagnetica Serie MG",
                "marca": "Locknetics",
                "descripcion": "Perfil delgado y soluci�n confiable para una variedad de aplicaciones. Dise�ado para resistencias de hasta 600 lb. o 1200 lb. para cerraduras electromagn�ticas simples y dobles.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCK-EMS",
                "index": 14,
                "titulo": "Sensores series EMS",
                "imagen": "Sensores series EMS",
                "marca": "Locknetics",
                "descripcion": "Este sensor vers�til puede montarse en la superficie por encima de cualquier puerta, as� como en el techo o la pared. La flexibilidad y el dise�o de perfil bajo lo convierten en un sensor efectivo para administrar la seguridad del edificio y el flujo de tr�fico.",
                "garantia": "9 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-SEM7800",
                "index": 15,
                "titulo": "Sensores series Magnets SEM 7800",
                "imagen": "Sensores series Magnets SEM 7800",
                "marca": "Lcn",
                "descripcion": "El im�n de la serie se libera cuando el panel de alarma contra incendios entra en una condici�n de alarma y se interrumpe la corriente el�ctrica, lo que permite que la puerta funcione de forma manual hasta que vuelva la energ�a. El dise�o de triple voltaje proporciona 35 libras de fuerza de retenci�n. Cumplen con ANSI / BHMA 156.15 y est�n listados en UL para barreras de humo met�licas o puertas cortafuegos con etiquetas.",
                "garantia": "2 a�os",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "LCN-8310",
                "index": 16,
                "titulo": "Sensores y actuadores series 8310",
                "imagen": "Sensores y actuadores series 8310",
                "marca": "Lcn",
                "descripcion": "Estos productos coinciden con la funci�n y el dise�o para completar la instalaci�n de los operadores autom�ticos. Incluyen montajes de superficie cuadrada y doble superficie cuadrada; actuadores de longitud completa de 36 x 6 pulg. Para la mayor�a de los tr�ficos, se requiere un actuador tanto en el interior como en el exterior de la puerta. Los sensores detectan peatones y obstrucciones para garantizar una apertura y cierre seguros. Los accesorios individuales incluyen interruptores de posici�n de la puerta, interruptores de llave y balanc�n, transformadores, soportes de falso techo, cubiertas protectoras, kits de conversi�n inal�mbricos, kits de m�dulos de seguridad, arneses de m�dulos de seguridad, transmisores inal�mbricos, postes de bolardos, filtros de l�nea, m�dulos de rel� programables y cables de reacondicionamiento.",
                "garantia": "2 years",
                "precio": "$240.000",
                "solicitud": "ya"
            }, 
            {
                "_id": "VONDUPRIN-EI",
                "index": 17,
                "titulo": "Interruptores electronicos",
                "imagen": "Interruptores electronicos",
                "marca": "Von Duprin",
                "descripcion": "Dise�ado para monitorear aberturas directamente desde el dispositivo de salida o el tablero de control. Estos interruptores se pueden combinar con accesorios, como una bocina independiente, para proporcionar niveles de seguridad adicionales. Hay varias opciones de conmutaci�n disponibles para satisfacer las necesidades de la aplicaci�n, incluida la solicitud de salida (RX), el control de cerrojo (LX) y los conmutadores de se�al (SS).",
                "garantia": "2 years",
                "precio": "$240.000",
                "solicitud": "ya"
            },
            {
                "_id": "VONDUPRIN-EI",
                "index": 18,
                "titulo": "Accesorios electronicos y mecanicos Von Duprin",
                "imagen": "Accesorios electronicos y mecanicos Von Duprin",
                "marca": "Von Duprin",
                "descripcion": "Desde montantes extra�bles con llave, hasta fuentes de alimentaci�n y transferencias de energ�a el�ctrica (EPT), que proporcionan una ruta de cableado desde la puerta hasta el marco, permitiendo que los productos que est�n en la puerta o alrededor de ella reciban energ�a. Los montantes son soportes verticales en una abertura que proporcionan un rendimiento de una sola puerta en las aberturas de puertas dobles que utilizan dispositivos de cantonera.",
                "garantia": "2 years",
                "precio": "$240.000",
                "solicitud": "ya"
            }
        ],

        "7 Redes cableado estructurado": [
            {
                "_id": "AMG-100C",
                "index": 0,
                "titulo": "AMG 100C Fingerprint",
                "imagen": "AMG 100C Fingerprint",
                "marca": "AMG",
                "descripcion": "",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "ATS",
                "index": 1,
                "titulo": "ATS Reloj Proximidad",
                "imagen": "ATS Reloj Proximidad",
                "marca": "ATS",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$63.000",
                "solicitud": "ya"
            },
            {
                "_id": "Dahua",
                "index": 2,
                "titulo": "Dahua Productos",
                "imagen": "Dahua Productos",
                "marca": "Dahua",
                "descripcion": "",
                "garantia": "20 years",
                "precio": "$350.000",
                "solicitud": "ya"
            },
            {
                "_id": "DSC",
                "index": 3,
                "titulo": "DSC Prodcutos",
                "imagen": "DSC Prodcutos",
                "marca": "DSC",
                "descripcion": "",
                "garantia": "15 years",
                "precio": "$51.000",
                "solicitud": "ya"
            },
            {
                "_id": "DVR",
                "index": 4,
                "titulo": "DVR 32-16-8-4 canales HD-TVI",
                "imagen": "DVR 32-16-8-4 canales HD-TVI",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$300.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-DOMO-2MP",
                "index": 5,
                "titulo": "Hikvision Domo IP 2MP",
                "imagen": "Hikvision Domo IP 2MP",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-DOMOMOTORIZADO-2MP",
                "index": 6,
                "titulo": "HIKVISION Domo motorizado IP 2MP 25x 100m",
                "imagen": "HIKVISION Domo motorizado IP 2MP 25x 100m",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-BALA-EXT",
                "index": 7,
                "titulo": "Hikvision exteriores IP Dia-Noche",
                "imagen": "Hikvision exteriores IP Dia-Noche",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-BALA",
                "index": 8,
                "titulo": "Hikvision HD1080p",
                "imagen": "Hikvision HD1080p",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-DOMO-6MP",
                "index": 9,
                "titulo": "Hikvision IP 6MP",
                "imagen": "Hikvision IP 6MP",
                "marca": "Hikvision",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HIKVISION-TIMBRE",
                "index": 10,
                "titulo": "Hikvision Timbre inalambrico",
                "imagen": "Hikvision Timbre inalambrico",
                "marca": "Hikvision",
                "descripcion": "Timbre inalambrico 2,4 Ghz",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HILOOK-PRODUCTOS",
                "index": 11,
                "titulo": "Hilook Productos",
                "imagen": "Hilook Productos",
                "marca": "Hilook",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "HONETWELL-PRODUCTOS",
                "index": 12,
                "titulo": "Honeywell Productos",
                "imagen": "Honeywell Productos",
                "marca": "Honeywell",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "PARADOX-PRODUCTOS",
                "index": 13,
                "titulo": "Paradox Productos",
                "imagen": "Paradox Productos",
                "marca": "Paradox",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MSO350",
                "index": 14,
                "titulo": "Sagem biometric MSO350",
                "imagen": "Sagem biometric MSO350",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MSL",
                "index": 15,
                "titulo": "Sagem Morpho Sigma Lite Series",
                "imagen": "Sagem Morpho Sigma Lite Series",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MA500",
                "index": 16,
                "titulo": "Sagem Morphoaccess MA500",
                "imagen": "Sagem Morphoaccess MA500",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MSJ",
                "index": 17,
                "titulo": "Sagem Morphofingerprint J-Series",
                "imagen": "Sagem Morphofingerprint J-Series",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MA520",
                "index": 18,
                "titulo": "Sagem OMA520",
                "imagen": "Sagem OMA520",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MAS",
                "index": 19,
                "titulo": "Sagem Series Morpho access Sigma",
                "imagen": "Sagem Series Morpho access Sigma",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SAGEM-MSE",
                "index": 20,
                "titulo": "Sagem Series Sigma Extreme",
                "imagen": "Sagem Series Sigma Extreme",
                "marca": "Sagem",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-FH1000",
                "index": 21,
                "titulo": "Schlage Series F Handpunch 1000",
                "imagen": "Schlage Series F Handpunch 1000",
                "marca": "Schlage",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "SCH-FH2000",
                "index": 22,
                "titulo": "Schlage Series F Handpunch 2000",
                "imagen": "Schlage Series F Handpunch 2000",
                "marca": "Schlage",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "UNV-PRODUCTOS",
                "index": 23,
                "titulo": "UNV productos",
                "imagen": "UNV productos",
                "marca": "UNV",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "UVR-",
                "index": 24,
                "titulo": "UVR grabador de video",
                "imagen": "UVR grabador de video",
                "marca": "Uvr",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "WD-1TB",
                "index": 25,
                "titulo": "Western Digital Disco Duro TB",
                "imagen": "Western Digital Disco Duro TB",
                "marca": "Western Digital",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "ZKTECO-F22",
                "index": 26,
                "titulo": "ZKTeco F22",
                "imagen": "ZKTeco F22",
                "marca": "ZKTeco",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "ZKTECO-K20",
                "index": 27,
                "titulo": "ZKTeco K20",
                "imagen": "ZKTeco K20",
                "marca": "ZKTeco",
                "descripcion": "",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
        ],

        "8 Acceso suspendido en alturas": [
            {
                "_id": "1024537865klj",
                "index": 0,
                "titulo": "Cerradura electronica",
                "imagen": "Conjuntoproductos",
                "marca": "Schlage",
                "descripcion": "Connect Century",
                "garantia": "20 years",
                "precio": "$921.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024537866frt",
                "index": 1,
                "titulo": "Cerradura mecanica",
                "imagen": "AMG100CFingerprint",
                "marca": "Schlage",
                "descripcion": "Accent cromado manija",
                "garantia": "10 years",
                "precio": "$63.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024536865klj",
                "index": 2,
                "titulo": "Cierra puertas",
                "imagen": "FalconSC60AL",
                "marca": "Schlage",
                "descripcion": "Hidraulicos electricos",
                "garantia": "20 years",
                "precio": "$350.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024537860sre",
                "index": 3,
                "titulo": "Bisagras y Pivotes",
                "imagen": "BehavioralHealth",
                "marca": "Ives",
                "descripcion": "A piso",
                "garantia": "15 years",
                "precio": "$51.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024537868hjd",
                "index": 4,
                "titulo": "Salidas Push Emergencia",
                "imagen": "BarraAntiPanicoBriton378",
                "marca": "Von Duprin",
                "descripcion": "Vertical rod",
                "garantia": "30 years",
                "precio": "$1 300.000",
                "solicitud": "ya"
            },
            {
                "_id": "1782453686klj",
                "index": 5,
                "titulo": "Sensores y huelgas electronicas",
                "imagen": "FalconSC60AL",
                "marca": "Schlage",
                "descripcion": "Hidraulicos electricos",
                "garantia": "10 years",
                "precio": "$176.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024537860hjt",
                "index": 6,
                "titulo": "Redes cableado estructurado",
                "imagen": "BehavioralHealth",
                "marca": "Cuales",
                "descripcion": "Instalacion camaras",
                "garantia": "3 years",
                "precio": "$290.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024531268djd",
                "index": 7,
                "titulo": "Acceso suspendido alturas",
                "imagen": "BarraAntiPanicoBriton378",
                "marca": "SkyColoring",
                "descripcion": "Andamios y unidades permanentes",
                "garantia": "10 years",
                "precio": "$900.000",
                "solicitud": "ya"
            },
            {
                "_id": "1024531268djd",
                "index": 8,
                "titulo": "Mecanismos suspencion",
                "imagen": "BarraAntiPanicoBriton378",
                "marca": "Black Diamond",
                "descripcion": "Mosqueton",
                "garantia": "3 years",
                "precio": "$300.000",
                "solicitud": "ya"
            }

        ],

=======
const data = {
    "Productos": [

        {
            "_id": "1024537865klj",
            "index":0,
            "titulo": "Cerradura electronica",
            "imagen":  "Conjuntoproductos" ,
            "marca": "Schlage",
            "descripcion": "Connect Century",
            "garantia": "20 years",
            "precio": "$921.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024537866frt",
            "index": 1,
            "titulo": "Cerradura mecanica",
            "imagen": "{AMG100CFingerprint}",
            "marca": "Schlage",
            "descripcion": "Accent cromado manija",
            "garantia": "10 years",
            "precio": "$63.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024536865klj",
            "index": 2,
            "titulo": "Cierra puertas",
            "imagen": "FalconSC60AL",
            "marca": "Schlage",
            "descripcion": "Hidraulicos electricos",
            "garantia": "20 years",
            "precio": "$350.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024537860sre",
            "index": 3,
            "titulo": "Bisagras y Pivotes",
            "imagen": "BehavioralHealth",
            "marca": "Ives",
            "descripcion": "A piso",
            "garantia": "15 years",
            "precio": "$51.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024537868hjd",
            "index": 4,
            "titulo": "Salidas Push Emergencia",
            "imagen": "BarraAntiPanicoBriton378",
            "marca": "Von Duprin",
            "descripcion": "Vertical rod",
            "garantia": "30 years",
            "precio": "$1 300.000",
            "solicitud": "ya"
        },
        {
            "_id": "1782453686klj",
            "index": 5,
            "titulo": "Sensores y huelgas electronicas",
            "imagen": "FalconSC60AL",
            "marca": "Schlage",
            "descripcion": "Hidraulicos electricos",
            "garantia": "10 years",
            "precio": "$176.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024537860hjt",
            "index": 6,
            "titulo": "Redes cableado estructurado",
            "imagen": "BehavioralHealth",
            "marca": "Cuales",
            "descripcion": "Instalacion camaras",
            "garantia": "3 years",
            "precio": "$290.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024531268djd",
            "index": 7,
            "titulo": "Acceso suspendido alturas",
            "imagen": "BarraAntiPanicoBriton378",
            "marca": "SkyColoring",
            "descripcion": "Andamios y unidades permanentes",
            "garantia": "10 years",
            "precio": "$900.000",
            "solicitud": "ya"
        },
        {
            "_id": "1024531268djd",
            "index": 8,
            "titulo": "Mecanismos suspencion",
            "imagen": "BarraAntiPanicoBriton378",
            "marca": "Black Diamond",
            "descripcion": "Mosqueton",
            "garantia": "3 years",
            "precio": "$300.000",
            "solicitud": "ya"
        }
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
    ]
}

export default data;
