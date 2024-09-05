# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.


# Manejo de Inmutabilidad
En este proyecto, los ítems de productos están representados como objetos dentro de arrays que se utilizan a lo largo de diferentes páginas de la aplicación. Cuando un usuario selecciona un producto para agregarlo al carrito, el mismo objeto se transfiere por referencia al array del carrito.

Decisiones de Diseño
Opté por manejar los objetos por referencia por las siguientes razones:

Actualización Sincronizada: Al transferir el objeto por referencia al carrito, cualquier cambio en las propiedades del objeto, como la cantidad seleccionada, se refleja automáticamente en todas las listas de productos donde aparece ese objeto. Esto permite que la cantidad seleccionada por el usuario se actualice dinámicamente tanto en el carrito como en la lista de productos en la página correspondiente, proporcionando una experiencia de usuario más coherente.

Simplicidad: Este enfoque simplifica la gestión de los datos, evitando la necesidad de mantener múltiples copias del mismo objeto. De esta forma, se optimiza el rendimiento y se reduce la complejidad del código.

# Estructura de Componentes Reutilizables

En la carpeta `app/components` se alojan los componentes reutilizables que se utilizan en diferentes partes de la aplicación. Uno de los componentes clave es:

#### Componente `item-card`

Este componente es una tarjeta de producto que se utiliza en múltiples páginas de productos. Cada `item-card` muestra información básica del producto y tiene las siguientes funcionalidades:

- **Agregar al carrito**: Un botón que permite al usuario agregar el producto al carrito.
- **Ver detalles**: Un botón que, al presionarlo, muestra un componente hijo dentro del `item-card`, revelando más detalles sobre el producto.

El uso de este componente centralizado permite mantener una interfaz de usuario coherente y simplificar el mantenimiento, ya que cualquier cambio en la tarjeta de producto se verá reflejado en todas las páginas donde se usa.

#### Componente `header`

El `header` es un componente reutilizable ubicado en la carpeta `app/components` y se utiliza en toda la aplicación. Este componente contiene tres subcomponentes:

- **`boton-carrito`**: Es un botón que permite al usuario acceder al carrito y ver el resumen de la orden que ha pedido hasta el momento.
- **`buscador`**: Es un campo de búsqueda que, al ingresar letras, muestra coincidencias de productos en la página en la que el usuario se encuentra.
- **`menu`**: Un menú de navegación que permite al usuario moverse entre diferentes páginas de la aplicación.

El `header` proporciona una estructura coherente en la navegación y facilita la interacción del usuario con funcionalidades clave como la búsqueda de productos y la revisión de su pedido.


