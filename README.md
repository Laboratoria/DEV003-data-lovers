# Data Lovers por Chris y Fernanda. 

## Índice

* [1. Introducción](#1-introducción)
* [2. Definir Usuario y Producto](#2-definir-usuario-y-producto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Prototipos Baja Fidelidad](#4-prototipos-baja-fidelidad)
* [5. Prototipos Alta Fidelidad](#5-prototipos-alta-fidelidad)
* [6. Áreas de Mejora](#6-áreas-de-mejora)
* [7. Test de Usabilidad](#7-test-de-usabilidad)
* [8. Boiler Plate](#8-boiler-plate)
* [9. Notas](#9-notas)
* [10. Checklist](#10-checklist)

***

## 1. Introducción

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play). Los usuarios del juego se convierten en "Maestros/ entrenadores de Pokémon". En este proyecto creamos una página con los pokemones de dos regiones de la app creando historias de usuario. En este readme encontrarás nuestro proceso y el link a nuestro proyecto, esperemos lo disfrutes. https://mafcht.github.io/DEV003-data-lovers/src/ 

Los principales objetivos de Pokemon GO son los siguientes:
Descubrir el mundo Pokémon: explorar y descubrir nuevos Pokémon allá donde vayan.
Atrapar distintos Pokémon para completar su Pokédex.
Pelear contra Pokémon de otros entrenadores y conquistar un gimnasio.
Competir en épicos combates contra otros entrenadores.
Hacer equipo con otros entrenadores para atrapar poderosos Pokémon durante las incursiones.

Hallazgos
Para entender mejor qué necesidades complementarias a la app tienen los usuarios, hicimos una rápida investigación (research) y estos son algunos de los hallazgos.
Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
Un maestro Pokémon antes de salir a cazar los Pokémon tiene que saber el top 10 de frecuencia de aparición de los Pokémon.
Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes cuando un maestro Pokémon elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los que tienen menos cantidad de debilidades y saber de qué tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 2 características.
Los Pokémon evolucionan y es importante para un maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.
Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber cuántos caramelos necesita un Pokémon para evolucionar.


## 2. Definir Usuario y Producto
Para investigar más el usuario y el producto, se creo una encuesta Pokémon con cinco preguntas para conocer la opinión de las personas y poder desarrollar el proyecto de la mejor manera. La investigación que se realizó fue con el fin de obtener distintas Historias de Usuario del proyecto.

¿Quiénes son los principales usuarios del producto?
Se hizo una pregunta sobre el rango de edades de los usuarios, descubrimos que los principales usuarios del producto son personas entre 22 y 35 años, deducimos esta respuesta por el fácil acceso a un dispositivo móvil e internet en todo momento. 
 ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/1.png?raw=true)

¿Cuáles son los objetivos de estos usuarios en relación con el producto?
En la segunda pregunta del cuestionario preguntamos qué les gustaría encontrar en una página web de Pokémon Go, sus principales objetivos son encontrar información específica sobre los pokémon como sus fortalezas y debilidades. Las respuesta que obtuvimos en la encuesta fueron las siguientes:
  ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/2.png?raw=true)

  ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/3.png?raw=true)

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Los datos más importantes que les gustaría encontrar en la interfaz según la encuesta que realizamos son su poder o fortaleza y los Puntos de Combate para poder escoger el mejor pokemon para tener una batalla. 
 ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/5.png?raw=true)

Así mismo preguntamos si les gustaría comparar el poder de los pokemones en la página web o aplicación y obtuvimos que al 85% de los usuarios si les gustaría compararlo.
 ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/4.png?raw=true)

¿Cuándo utilizan o utilizarían el producto?
El producto lo utilizarían en sus ratos libres ya que la mayoría de las personas juegan Pokemon GO por ocio, pero la podrán utilizar cuando quieran. El objetivo principal es que encuentren información relevante para poder tener un mejor juego. La información que podrán encontrar es la siguiente: tipo, debilidad, peso, fortalezas, multiplicador, evoluciones, y caramelos. También pedimos recomendaciones para poder generar una página web que les guste a los usuarios, ver sus necesidades y de qué manera podemos cubrirlas. 
 ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/6.png?raw=true)

 ![cuestionario](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Cuestionario/7.png?raw=true)

## 3. Historias de Usuario

Historia 1:

Como: Jugador de Pokémon Go.

Quiero: Ver información de los Pokémon.

Para: Para saber su nombre, Id, tipo y otros datos.

Criterios de Aceptación:
La página debe mostrar  todos los pokemons con su nombre, ID.
La página debe mostrar el detalle completo del pokémon elegido.
Debe correr test unitario

Definición de terminado:
Que el usuario pueda visualizar toda la información de los pokemones.

Historia 2:

Como: Jugador de Pokémon Go.

Quiero: Poder realizar búsquedas, según el tipo y debilidades y región.

Para: Saber el poder y capacidad de batalla de un pokémon específico según su tipo y debilidades. 

Criterios de Aceptación:
La página debe permitir al usuario buscar y filtrar los pokemones según su tipo y debilidad.
Buscar cuales son los pokemones por región. 
Debe correr test unitario

Definición de terminado:
Que el usuario pueda visualizar los pokemones según sus criterios de filtrado. 

Historia 3:

Como: Jugador de Pokémon Go.

Quiero: Poder ver las evoluciones de un pokemon. 

Para: Saber cuántos caramelos necesita para su siguiente evolución.

Criterios de Aceptación:
La página debe permitir ver las evoluciones por pokemon.
Desplegar los caramelos necesarios para cada evolución. 
Debe correr test unitario

Definición de terminado:
Que el usuario pueda visualizar las evoluciones y cuantos caramelos necesita para cada evolución. 

Historia 4:

Como: Jugador de Pokémon Go.

Quiero: Poder sacar el top 10 de frecuencia de aparición. (poder ver la frecuencia de aparición de un pokémon)

Para: Poder encontrar a los pokémons con mayor facilidad. 

Criterios de Aceptación:
La página debe permitir al usuario filtrar y visualizar el top 10 de pokemones con mayor frecuencia de aparición. (debe permitir ver el porcentaje de aparición del pokémon filtrado.
Debe correr test unitario

Definición de terminado:
Que el usuario pueda visualizar el top 10 de los pokémons con mayor frecuencia de aparición. 


## 4. Prototipos Baja Fidelidad

Los prototipos de baja fidelidad se crearon con lápiz y papel en primera instancia, luego se fueron mejorando para definir nuestra idea, posteriormente creamos prototipos en Canva con más estilo y probando una paleta de colores. 

Imágenes del Prototipo de Baja Fidelidad:

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/img_2169.jpeg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220732635~2.jpg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220651703~2.jpg?raw=true)

 ![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220524752~2.jpg?raw=true)

 ![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220353676~2.jpg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220319785~2.jpg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220117023~2.jpg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/IMG_20221213_220051584~2.jpg?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.21.17.png?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.03.png?raw=true)

 ![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.14.png?raw=true)

 ![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.25.png?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.35.png?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.45.png?raw=true)

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Captura%20de%20Pantalla%202022-12-14%20a%20la(s)%2012.23.52.png?raw=true)

## 5. Prototipos Alta Fidelidad

Los prototipos de alta fidelidad se realizaron en la aplicación de Figma en donde creamos 5 botones para las 5 paginas que queríamos mostrar, no se detallaron las páginas ya que iban a ser idénticas a excepción de unos pequeños cambios en el diseño, pero nos basamos en la planificación de nuestros prototipos de baja fidelidad. 

Imágenes del Prototipo de Alta Fidelidad:

![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/prototipo%20de%20alta%20fidelidad/Captura%20de%20Pantalla%202022-12-28%20a%20la(s)%2022.15.35.png?raw=true)

 ![prototipo de baja fidelidad](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/prototipo%20de%20alta%20fidelidad/figma%20flow.png?raw=true)


Paleta de Colores:

 ![paleta de colores](https://github.com/mafcht/DEV003-data-lovers/blob/main/src/Media/Prototipo%20Baja%20Fidelidad/Paleta%20de%20Colores.png?raw=true)

## 6. Áreas de Mejora

Finalizando el proyecto, al realizar los tests nos dimos cuenta que teníamos que restructurar el codigo de algunas de nuestras funciones, a continuación menciono cómo se resolvieron brevemente. 

En la Página Home deseábamos desplegar un pokemon random cada vez que la recargamos. 
Se resuelve usando el método estadístico Math.random()

En la Página Pokédex deseábamos darle más formato a las tarjetas y organizar su información por columnas y filas.
Se dio formato y uniformidad usando las propiedades de CSS Grid y CSS flex creando filas y columnas para facilitar el formato que queríamos dar. Asimismo usamos innerHTML para poder usar las secciones que creamos. 

En la Página Pokédex deseamos bloquear la pantalla de fondo cuando aparece la tarjeta de información y que no se agregue la información continuamente.
Se resolvió limpiando la card con un document.getElementById("scCard").innerHTML = '';

En todas las páginas deseamos desplegar un botón que los regresara al principio de cada página cuando ya estabas muy abajo. 
Se resolvió creando un botón en la sección de body para que apareciera en todas las páginas.

Página Evolutions Mostrar cuántos caramelos necesita para su siguiente evolución "candy-cost".
Se resolvió usando dot notation y corchetes sin comillas para extraer la información que deseábamos mostrar. 

## 7. Test de Usabilidad

Los problemas que detectamos a través de tests de usabilidad fueron los siguientes.

Al escribir el código completo sin pensar previamente en los test nos dimos cuenta que tenemos código que no es testable, necesitamos usar el método de Test Driven Development para hacer nuestro código en base a la planeación de los tests para los próximos proyectos y lograr un 100% en las pruebas unitarias de statements, functions y lines y branches.

Para no repetir código y acortarlo, así como evitar hacer test extras debemos estudiar más los métodos de objetos y usar el método REACTOR. 


## 8. Boiler Plate

.

├── EXTRA.md

├── README.md

├── READMEDataLovers.md

├── package.json

├── src

|  ├── data 

|  |  ├── pokemon

|  |  |  ├── pokemon.js

|  |  |  ├── pokemon.json

|  |  |  └── README.md

|  ├── data.js

|  ├── index.html

|  ├── main.js

|  └── style.css

└── test

   └── data.spec.js

directory: 7 file: 11

## 9. Notas

Como hacer una Historia de Usuario:

CCC
CARD : Son historias pequeñas que responden 3 preguntas:
¿Quién es el usuario y como?
¿Qué quiere o necesita hacer el usuario?
¿Para qué?
CONVERSATION: Es el feedback con stakeholders o coaches. 
CONFIRMATION: Son los criterios de aceptación y la definición de terminado.

INVEST 
Sirve para hacer las historias de usuario con las tres CCC, ya que deben cumplir los siguientes criterios:
Independiente
Negociable
Valiosa
Estimable
Small - Pequeña - 1 sprint
Testable


## 10. Checklist

A continuación marcamos los criterios de aceptación que cumplimos de este proyecto.

* [X] Usa VanillaJS.
* [X] Pasa linter (`npm run pretest`)
* [X] Pasa tests (`npm test`)
* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [X] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [X] Incluye historias de usuario en `README.md`.
* [X] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [X] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [X] Incluye link a Zeplin en `README.md`.
* [X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [X] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [X] UI: Permite ordenar data por uno o más campos (asc y desc).
* [X] UI: Permite filtrar data en base a una condición.
* [X] UI: Es _responsive_.

