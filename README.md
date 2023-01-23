# Data Lovers: Studio Ghibli

## Índice

* [1. Definición del Producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-resumen-del-proyecto)
* [3. Diseño de la Interfaz de Usuario](#3-objetivos-de-aprendizaje)
* [4. Implementación de la Interfaz de Usuario](#4-implementacion-de-la-interfaz-de-usuario)


***

## 1. Definición del Producto

Se busca como objetivo crear un directorio en el cual la usuaria pueda encontrar un listado de las películas de Studio Ghibli existentes, con sus respectivas características: año de lanzamiento, director, productor, etc. A esta web la hemos titulado Wiki Ghibli.

En este proyecto se creó una web con el objetivo de ordenar, categorizar, filtrar y llamar la información requirida por nuestro usuario.


## 2. Historias de usuario

Las historias de usuario son el primer paso para construir WikiGhibli, ya que responden a las necesidades específicas de quien vaya a hacer uso de esta interfaz.

A continuación se enumeran las historias de usuario a partir de las cuales trabajamos:

### Historia N°1: "Como amante de todo tipo de películas me gustaría saber las películas de Studio Ghibli que existen para poder verlas más adelante."

* Definición de terminado: que se muestre la lista de películas con sus respectivos títulos y portada.

* Criterios de aceptación: tener una estructura definida, ordenada e intuitiva para el usuario, que permita de forma fácil acceder a la lista completa de títulos.

### Historia N°2: "Como estudiante universitaria de Cine quiero revisar el listado de películas por director para conocer el trabajo de cada uno de ellos."

* Definición de terminado: crear un filtro que contenga el listado de directores de Ghibli, y que al seleccionarlo muestre todas sus películas.

* Criterios de aceptación: el filtro está ubicado en la sección de All Movies en la parte superior, con la finalidad de mantener el orden visual y que facilite el acceso para el usuario.

### Historia N°3: "Como estudiante trabajando en su Tésis de Cine me gustaría conocer el porcentaje de participación de los directores de Studio Ghibli para agregarlo a mi investigación sobre el impacto de la animación japonesa en la actual industria del Cine."

* Definición de terminado: se incluyen tanto el porcentaje como la cantidad de películas dirigidas por director, en el encabezado de la sección de All Movies.

* Criterios de aceptación: que los porcentajes varíen y se muestren de acuerdo al director seleccionado.

### Historia N°4: "Como cinéfilo/a quiero revisar el listado de películas por orden alfabético"

* Definición de terminado: en la sección de All Movies se encontrará un botón que ordenará las películas de forma ascendente y descendente.

* Criterios de aceptación: el botón de orden alfabético es simple pero entendible para el usuario. Además se le incluye la propiedad de que cambie de color al momento de hacer hover.


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
* quitamos las antiguas categorías para hacerlo más User Friendly e intuitivo.
* quitamos la sección de películas más votadas y dejamos solo las películas destacadas.
* agregamos un botón con posición fija en la esquina derecha inferior, que cumple la función de hacer scroll hacia el comienzo de la página, en vez de tener varios botones con esa misma funcionalidad por cada sección.
* modificamos el diseño de las secciones de Directores por una mucho más simplificada: ahora se mostrará tan solo un selector con una lista con los nombres, los cuales al hacerles click desplegarán una lista de películas ya filtrada. 


### Prototipo de baja fidelidad

- [ ] **Prototipo creado en lápiz y papel**

  Cada una presentó 2 propuestas hechas a mano, de las cuales surgió el primer prototipo de alta fidelidad.
  Tomamos elementos de ambas, además de las referencias vistas anteriomente.

  <details><summary>Link a Miro</summary><p>

  * [link a Miro](https://miro.com/app/board/uXjVP__1nCo=/)
</p></details>

### Prototipo de alta fidelidad

- [ ] **Prototipo creado en Figma**

  Nos dividimos los prototipos de alta fidelidad: una trabajó la versión de escritorio y la otra trabajó la versión mobile.
  Después del Test de Usuario como dupla decidimos modificar algunos elementos a partir del feedback recibido.
  Finalmente nos basamos en el prototipo ya modificado para dar paso a la estructura del HTML y CSS.

  <details><summary>Link a Figma</summary><p>

  * [link a Figma](https://www.figma.com/file/wBokzPBra2q1C5qM7OZQmR/Studio-Ghibli?node-id=0%3A1&t=xQpVGPyar71Ge23m-1)
</p></details>

### Testeos de usabilidad

- [ ] **Test de usuarios a través de Maze**

  A partir del feeback recibido por los usuarios se realizaron modificaciones, implementando un mensaje de bienvenida para contextualizar e introducir qué es lo que se mostrará en nuestra página web. Además agregamos una imagen de fondo en el landing, y utilizamos colores contrastantes para guiar visualmente al usuario.

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

* Se tiene "==" cuando se espera "===".
* Se tienen 4 espacios de sangría cuando se esperan 2.
* "Personajes" dentro del array de titleList no existe, dice que es "undefined" debido a que en la lista original se hace el llamado a través de "people", no "personajes".
* Tuvimos que reformular la función peliculasDirector que filtra las películas por director para poder testearla, ya que dentro de ésta hacía un llamado a otra función y por temas de scope no se podía utilizar en el archivo data.spec.js