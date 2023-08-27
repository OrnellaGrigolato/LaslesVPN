
# LaslesVPN
[Read this in english](https://github.com/OrnellaGrigolato/LaslesVPN/blob/master/README.en.md)

LaslesVPN es una landing page que promociona el producto de una empresa.




## App en Funcionamiento

![App en Funcionamiento](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Secciones y Características

- Barra de Navegación.
    - Menu tipo hamburguesa animado en mobile.
- Sección de planes.
    - Contenido traído desde una API.
    - Botón para actualizar planes, con mensaje de feedback.
    - Efecto hover.
- Carrusel.
    - Contenido traído desde una API.
    - Botones de navegación que se activan y desactivan.
    - Navegación a traves de los puntos.
    - Posibilidad de mover mediante arrastre.
- Formulario de contacto.
    - Validación de formulario.
    - Mensajes de feedback al usuario.
    - Envío de información a una API.

- Además.
    - Página adaptable a dispositivos móviles.
    - Animación en el hover de los botones.
    - Favicon con logo de la empresa.
    - Página de error para urls no válidas.
    - Links a las redes sociales de la empresa.
    - Fecha de aviso de copyrigth se actualiza automáticamente.
    - Logo de Twitter actualizado.


## Dependencias y Librerias

LaslesVPN ha sido creada con [Typescript](https://www.typescriptlang.org/), [React](https://es.react.dev/) y [TailwindCSS](https://tailwindcss.com/), pero también hace uso de algunas librerías:

- [Embla Carousel](https://www.embla-carousel.com/), para crear un componente carrusel
- [React Hook Form](https://www.react-hook-form.com/) y [Yup](https://www.npmjs.com/package/yup) para validar el formulario
- [Classnames](https://www.npmjs.com/package/classnames), para colocar clases dinámicas en los puntos del carrusel
- [React Router Dom](https://reactrouter.com/en/main), para crear la navegación de la página
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction), para brindar mensajes de feedback al usuario.
## Cómo trabajé en este proyecto

Mi objetivo era simular un entorno de trabajo profesional 👩🏻‍💻.

Me base en un [diseño de Figma](https://www.figma.com/proto/IbAF9epoUByHcZ2GpV8QSU?type=design&node-id=0-1&mode=design&t=IWCweJbHxXzSZ94B-6), intentando cumplir con el concepto  'pixel perfect'.

Separé cada requerimiento en subtareas.

Escribí código ordenado y reutilizable, separé componentes en carpetas y segui el principio DRY (Don't Repeat Yourself).



## Cómo navegar por este proyecto: sus partes más interesantes


- Llamadas a API: [Código 1](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/Plan%20Section/PlanSection.tsx#L20) y [Código 2](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/CarruselSection/Carrusel.tsx#L52)

- Validación del formulario: [Código](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/Form%20Section/FormSection.tsx#L10)

- Estilos dinámicos de los puntos del carrusel: [Código](https://github.com/OrnellaGrigolato/LaslesVPN/blob/cd7655d94c093e9e2b8016ed0552f014baab2e70/src/Components/CarruselSection/Dots.tsx#L15)

## Que más agregaría a este proyecto? 🚀

A futuro me gustaría trabajar en las páginas faltantes, creando un diseño desde cero e integrandolas en la página. Agregaría la función de iniciar sección y registrarse, la posibilidad de comprar, etc.


## Instalación

1. Forkeá y cloná el repositorio.

2. Parado en la raíz del proyecto corré el comando

   ```
   npm install
   ```

    para instalar todas las dependencias del proyecto.

3. Usá 

   ```
   npm run dev
   ```

    para correr el proyecto.



    