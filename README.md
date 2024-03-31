# Books-API
Proyecto FrontEnd:

Una web de libros de los Best Sellers del New York Times, en la cual puedas filtrar por genero de libro. Al seleccionar el genero saldrán toda la lista de libros, cada uno con una foto de la portada con el titulo, autor y una breve descripción, además de un enlace a Amazon.

Tecnologias:
- Html
- CSS
- JavaScript
  
Requisitos:

- Manipulación dinámica del DOM
- Manejo de ES6
- Asincronía
- Sin frameworks ni librerias externas en la medida de lo posible
- Gestión del proyecto en Github desde el principio. Uso de ramas.
- Código limpio, buenas prácticas
- Diseño responsive, mobile first, semántica HTML5

Enlace a GitHub Pages:
- https://vegas-in.github.io/Books-API/


Especificaciones(Fase I):

- Incluir una animación mientras esperamos la carga del contenido.
- Al cargar la web deben de aparecer todas las listas con los siguientes datos:
  - Nombre completo de la lista
  - Fecha del libro más antiguo en la lista
  - Fecha del último libro incorporado
  - Frecuencia de actualización
  - Link para poder cargar la lista
- Al pinchar en el link de una lista especifica, el DOM debe cambiar e incluir los siguientes datos:
- Un botón para volver atras y recargar la disposición anterior
- Los libros deben estar organizados según el orden de la lista oficial
- Incluir
  - Carátula del libro
  - Cantidad de semanas que lleva en la lista
  - Descripción
  - Titulo y la posición que ocupa en la lista ( #1 titulo.... #2 titulo....)
  - Link para poder comprar el libro en amazon (debe abrirse en otra pestaña)

Especificaciones (Fase II - Firebase):

- Autenticación con Firebase auth: Los usuarios que se autentiquen podrán guardar sus favoritos
- Añadir un botón de favoritos en cada libro
- Los favoritos se guardarán en en Firebase Firestore
- Necesitarás una vista extra en el front para que cada usuario pueda ver sus favoritos

Extra (Fase III - Firebase cloud Storage):

- Los usuarios que se registren podrán subir su foto al sistema
- La foto se guardará en Firebase Cloud Storage y la URL de la foto en el documento del usuario en Firebase Firestore

![Diseño sin título](https://github.com/Vegas-in/Books-API/assets/158770667/3c98ecca-d9e8-40fd-9949-0a35f5ee4a3b)
