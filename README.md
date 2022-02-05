### CinemaADA

TP FINAL - ADA  - Curso Desarrolladora FrontEnd

Este repositorio fue creado trabajo práctico final para la culminación del curso de Desarrollo Frontend de ADA.

CinemaADA es una app de gestión de contenidos cinematográficos. El ADMIN gestiona que contenidos estarán disponibles en línea para los USERS agregando o eliminando las películas o series disponbles. Desde la interface de USUARIO se puede ver el detalle de los contenidos e indicar si fueron vistos o no.

Está realizado en REACTJS y TYPESCRIPT. Los formularios validan información con YUP y REACT FORMS. Se utiliza CONTEXT para tener disponible la información de usuarios a lo largo de toda la aplicación y REACT QUERY para tener cacheados ciertos que se replican en varias páginas. Los estilos se implementaron con Bootstrap, componentes de MUI y algunas propiedades sobre-escritas en el CSS ./index

La validación de USERS se da a través de un TOKEN almacenado en el LocalStorage. 


## Consignas del TP

https://tp-final-ada.netlify.app/narrativa


## USERS 

Admin
email: adrian@ada.com
Password: ada12345

User
email: ada@ada.com
Password: ada12345

## Requisitos para su utilización

Terminal
Para poder ejecutar el código vamos a usar la terminal, se puede abrir la Terminal directamente, o ejecutarla desde el VSCode. 
Es necesario tener instalado Node, React y Typescript.
Ejecutar npm install para la descarga de los paquetes requeridos para el funcionamiento (lista en package.JSON). 


## Estructura

./home
Movies and Series page

./login
Sign in page

./signup
Add User Page

./movies
Movies Page

./series
Series Page

./users
Fichas de usuarios registrados. Solo se accede a los datos logueado como admin.

./admin
Interface de gestión de contenidos disponibles para users. Solo se accede a los datos logueado como admin.

./detail
Tab que se renderiza cuando se clickea desde user una card de contenidos.

./logout
Botón de Logout


## Observaciones del trabajo:
- Se realizó una branch por cada función, add o fix. 
- Diseño web responsive para mobile mediaScreen 500px


## Deploy en 

https://cinemaada-1f3ab.web.app

### Desarrolladora: 
- Mariana Deleau: [portafolio] (https://marianadeleau.github.io/ada-8va-portafolio/)