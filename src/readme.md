###### En este repositorio realizamos una interfaz para que el usuario pueda acceder a una base de datos de los campeones del popular juego MOBA "Legue of Leyends"

En la primera etapa del proyecto nos dedicamos a revisar la documentación e investigar para así crear un primer prototipo.

Para crear el wireframe nos basamos en las paginas similares, comentarios de usuarios en foros del juego (facebook), y la data con la que trabajaremos.
[Primer protitpo Figma](https://www.figma.com/file/9WYEj7znzqiSGsiTdSUJXa/Prototipo-legue-Data-lovers-LOL?node-id=0%3A1&t=SEiM0CA6IK0gdcTy-0 "Primer protitpo Figma")

De acuerdo a lo investigado podemos concluir que la pagina debe ser sencilla, amigable, debe mostrar la información relevante para los jugadores de forma rapida, y tambien debe permitir acceder a otros datos no tan relevantes para usuarios mas experimentados.

#### Como jugador de LOL quiero una tabla para ver campeones.
El objetivo es poder observar la data relevante de varios campeones al mismo tiempo, ya sea mediante una tabla o otros metodos, para poder comparar los mismos datos

**Criterios de aceptación:**
- Debe haber varios filtros que puedan ser manipulados por el usuario
- La data debe poder ordenarse de forma ascendente o de forma descendente
- En los filtros estaria bien que hubiera inputs tipo text para agilizar el filtrado

**Definición de terminado:**
Cuando la interfaz despliegue la data ademas esta pueda ser filtrada y ordenada desde la misma interfaz, y tengamos las pruebas unitarias realizadas, los errores solucionados y el codigo optimizado.

#### Como jugador de LOL quiero poder calcular el daño recibido en un combate de un campeon vs otro para encontrar a los campeones que me den ventaja
El objetivo es ver en un combate entre 2 campeones determinados por el usuario quien tendría la ventaja.

**Criterios de aceptación:**
- Debe haber 2 inputs para que en cada input el usuario ingrese el nombre del campeon
- En caso de que estos inputs esten vacios debe mostrarse un mensaje indicando que el input debe ser llenado
- Debe haber un boton de combate, que al ser pulsado indique el resultado de la batalla.
- Seria bueno que se mostrara que tanto daño recibio el campeon victorioso

**Definición de terminado:**
Cuando dentro de la interfaz se pueda ver el resultado de una batalla entre 2 campeones, que a su vez puedan ser seleccionados por el usuario, y tengamos las pruebas unitarias realizadas, los errores solucionados y el codigo optimizado.

#### Como jugador de LOL quiero recomendaciones de campeones segun mi estilo de juego para no perder tiempo investigando
El usuario debe poder ingresar ciertos datos sobre como prefiere jugar y combatir, y en base esto se le debe devolver recomendaciones de campeones con determinadas caracteristicas.

**Criterios de aceptación:**
- Debe haber varios inputs
- Estos inputs permiten ingresar información especifica
- Ningun input debe quedar vacio
- Debe haber un boton de recomendaciones, que al ser pulsado compute los datos ingresados por el usuario y le arroje un resultado

**Definición de terminado:**
Cuando al pulsar el boton de recomendaciones, obtengamos en la interfaz un resultado coherente a la data ingresada por el usuario, y tengamos las pruebas unitarias realizadas, los errores solucionados y el codigo optimizado.


#### Como jugador de LOL quiero quiero poder navegar en una interfaz agradable y familiar, para sentirme poder navegar facilmente.

**Criterios de aceptación:**
- El diseño debe tener como tema el juego
- Los colores usados deben ser similares a los del juego

**Definición de terminado:**
Cuando tengamos un diseño que al usuario le evoque facilmente al juego, y cumplamos con los principios basicos de diseño visual.