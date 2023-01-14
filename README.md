# Data Lovers: Studio Ghibli

## Índice

* [1. Definición del Producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-resumen-del-proyecto)
* [3. Diseño de la Interfaz de Usuario](#3-objetivos-de-aprendizaje)
* [4. Implementación de la Interfaz de Usuario](#4-implementacion-de-la-interfaz-de-usuario)


***

## 1. Definición del Producto

Se busca como objetivo crear un directorio en el cual la usuaria pueda encontrar un listado de las películas de Studio Ghibli existentes, con sus respectivas características: año de lanzamiento, director, productor, personajes y sus características, etc. A esta web la hemos titulado WikiGhibli.

En este proyecto se creó una web con el objetivo de ordenar, categorizar, filtrar y llamar la información requirida por nuestro usuario.


## 2. Historias de usuario

Las historias de usuario son el primer paso para construir WikiGhibli, ya que responden a las necesidades específicas de quien vaya a hacer uso de esta interfaz.

A continuación se enumeran las historias de usuario a partir de las cuales trabajamos:

### Historia N°1: "Como amante de todo tipo de películas me gustaría saber las películas de Studio Ghibli que existen para poder verlas más adelante."

* Definición de terminado: que se muestre la lista de películas con sus respectivos títulos y portada.

* Criterios de aceptación: tener una estructura definida, ordenada e intuitiva para el usuario, que permita de forma fácil acceder a la lista completa de títulos.

### Historia N°2: "Como estudiante universitaria quiero revisar el listado de películas destacadas para adentrarme en el mundo de Ghibli."

* Definición de terminado: dedicar una sección para las películas más populares de Studio Ghibli.

* Criterios de aceptación: sección de destacados, donde se mostrarán los 5 títulos más populares. Los títulos junto con su respectiva portada deben presentarse de forma clara y ordenada.

### Historia N°3: "Como ilustradora me gustaría conocer los personajes de cada película (para dibujarlos)."

* Definición de terminado: dentro de la sección de Títulos se encontrará junto con los detalles de cada película un botón que desplegará el listado de personajes respectivos.

* Criterios de aceptación: botón desplegable al momento de seleccionar Personajes. Arrojará una lista con cada personaje y sus respectivas características.

### Historia N°4: "Como cinéfilo/a quiero revisar el listado de películas por orden alfabético/año."

* Definición de terminado: en la sección de Títulos se encontrará un selector desplegable el cual filtrará las películas por director, productor y año de lanzamiento según el usuario lo requiera.

* Criterios de aceptación: selector desplegable que arroje la lista de directores, productores y año de lanzamiento. Debe tener un botón para ordenar alfabéticamente de la A a la Z y viceversa, además de contar con un botón de Limpiar búsqueda.


## 3. Diseño de la Interfaz de Usuario

Nuestro proceso creativo consta principalmente de 4 etapas fundamentales:

* Búsqueda de referencias
* Diseño Centrado en el Usuario (DCU) - Historias de usuario
* Prototipado en baja y alta fidelidad
* Testeo de prototipo con usuarios

### Referencias

Buscamos páginas web que cumplieran más o menos con los mismos objetivos a los que apuntamos nosotras para considerarlas como posibles soluciones o bien hacer una combinación de todas ellas.

Todas las referencias que utilizamos, prototipos de baja fidelidad (4), propuestas de paleta de colores y categorías a trabajar las puedes encontrar en nuestro tablero de Miro en el siguiente enlace.

[](https://miro.com/app/board/uXjVP__1nCo=/)

### Diseño Centrado en el Usuario (DCU)

Como principio fundamental del Diseño UX hemos puesto a la usuaria al centro de todo, creando a partir de sus necesidades el prototipo y la toma de desiciones, también considerando los fundamentos del Visual Design e iterando a través del feedback que hemos conseguido con los Test de Usabilidad de nuestro prototipo de alta fidelidad.

Como cambios fundamentales en nuestro prototipo de alta fidelidad podemos mencionar:

* el uso de imágenes para contextualizar al usuario de qué se trata la web WikiGhibli.
* sintetizamos las categorías para hacerlo más User Friendly e intuitivo.
* quitamos la sección de películas más votadas y dejamos solo las películas destacadas.
* agregamos un botón con posición fija en la esquina derecha inferior, que cumple la función de hacer scroll hacia el comienzo de la página, en vez de tener varios botones con esa misma funcionalidad por cada sección.
* modificamos el diseño de las secciones de Directores y Productores por una mucho más simplificada: ahora se mostrará tan solo un selector con una lista con los nombres, los cuales al hacerles click desplegarán una lista de películas ya filtrada. 


### Prototipo de baja fidelidad

- [ ] **Prototipo creado en lápiz y papel**

  <details><summary>Link a Miro</summary><p>

  * [link a Miro](https://miro.com/app/board/uXjVP__1nCo=/)
</p></details>

### Prototipo de alta fidelidad

- [ ] **Prototipo creado en Figma**

  <details><summary>Link a Figma</summary><p>

  * [link a Figma](https://www.figma.com/file/wBokzPBra2q1C5qM7OZQmR/Studio-Ghibli?node-id=0%3A1&t=xQpVGPyar71Ge23m-1)
</p></details>

### Testeos de usabilidad

- [ ] **Test de usuarios a través de Maze**

  <details><summary>Link a Maze</summary><p>

  * [Link a los resultados del test de usuario interactivo](https://app.maze.co/projects/133003378/mazes/133003380/results)
</p></details>


## 4. Implementación de la Interfaz de Usuario (HTML/CSS/JS)

La implementación consta en:

* HTML: Muestra la data en una interfaz mediante listas.
Permite a la usuaria interactuar para obtener la infomación que necesita.

* CSS: Se agregaron estilos a cada sección correspondiente. La interfaz sigue los fundamentos del Visual Design.

Es responsive, se visualiza sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops. Se trabajó con media Queries y grillas.

* JavaScript: se encuentra una hoja con nombre data.js la cual contiene toda la lógica y las funciones de la web, la cual se exporta a otra hoja con nombre de main.js, que contiene toda la conexión con el DOM y sus eventos para que el usuario pueda interactuar con ella.


### Pruebas unitarias

#### Listado de problemas:

*
*
*
