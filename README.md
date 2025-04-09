# README - Sistema de Gestión de Eventos con jQuery

## Descripción general

Este proyecto consiste en una aplicación web que demuestra el uso de eventos en JavaScript usando jQuery. La aplicación incluye tres funcionalidades principales: eventos de botones, eventos en una lista con selección de colores personalizable, y un evento para mostrar/ocultar un elemento de la página.

El sistema está construido siguiendo una arquitectura modular con separación de responsabilidades, principios SOLID y patrones de diseño para mantener el código limpio, mantenible y extensible.

## Estructura del proyecto

```
proyecto-eventos/
├── index.html               # Archivo HTML principal
├── css/
│   └── styles.css           # Estilos CSS
├── js/
│   ├── app.js               # Punto de entrada de la aplicación
│   ├── eventHandlers.js     # Manejadores de eventos
│   └── domManipulation.js   # Funciones de manipulación del DOM
└── lib/
    └── jquery.min.js        # Biblioteca jQuery (opcional, usamos CDN)
```

## Características principales

### 1. Eventos de botones
- **Click simple**: Muestra una animación y registra el evento en el log.
- **Doble click**: Detecta cuando un botón es presionado dos veces rápidamente.
- **Hover**: Reacciona cuando el cursor entra y sale del botón.

### 2. Eventos en lista con selección de colores
- **Selección de elementos**: Permite seleccionar uno o varios elementos de la lista.
- **Personalización de colores**: Incluye un selector de color para cambiar el fondo de los elementos.
- **Colores predefinidos**: Botones para selección rápida de colores comunes.
- **Reseteo de selección**: Opción para volver al estado inicial.

### 3. Control de visibilidad
- Botón para mostrar/ocultar el título "UNIVERSITARIA DE COLOMBIA" con efectos de transición.

### 4. Características adicionales
- **Log de eventos**: Panel que muestra en tiempo real todos los eventos que ocurren en la aplicación.
- **Contenido multimedia**: Incluye un video de YouTube y una imagen de referencia.
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla gracias a Bootstrap.

## Tecnologías utilizadas

- **jQuery**: Biblioteca principal para manipulación del DOM y gestión de eventos.
- **Bootstrap 5**: Framework CSS para el diseño responsivo.
- **JavaScript moderno**: Uso de ES6+ y patrones de diseño avanzados.

## Patrones de diseño implementados

1. **Patrón Módulo Revelador (Revealing Module Pattern)**: Cada archivo JavaScript implementa este patrón para encapsular la funcionalidad y exponer solo la API necesaria.

2. **Patrón Namespace**: Se utiliza para evitar la contaminación del espacio global de variables.

3. **IIFE (Immediately Invoked Function Expression)**: Crea scopes privados en cada módulo.

4. **Inyección de Dependencias**: Los módulos reciben sus dependencias para facilitar el testing y mantenimiento.

## Guía de uso

### Instalación
1. Clona o descarga el repositorio.
2. No se requiere instalación de dependencias, pues jQuery se carga desde un CDN.
3. Abre el archivo `index.html` en tu navegador.

### Uso de los eventos de botón
- Haz clic en el botón "Click Me" para ver el efecto simple.
- Haz doble clic en el botón "Doble Click Me" para ver el efecto.
- Pasa el cursor sobre el botón "Hover Me" para ver cómo reacciona.

### Uso del selector de colores para la lista
1. Haz clic en uno o más elementos de la lista para seleccionarlos.
2. Selecciona un color usando el selector de color o los botones predefinidos.
3. Haz clic en "Aplicar a seleccionados" para cambiar el color de fondo.
4. Usa "Reset" para devolver todos los elementos a su estado original.

### Control de visibilidad del título
- Haz clic en el botón "Mostrar/Ocultar Título Universidad" para alternar la visibilidad del elemento h2.

## Consideraciones técnicas

### Manipulación del DOM
- Todas las manipulaciones visuales se realizan con jQuery directamente, evitando cambios de clase CSS para los colores.
- La arquitectura separa la manipulación del DOM (en `domManipulation.js`) de la lógica de eventos (en `eventHandlers.js`).

### Gestión de eventos
- Los eventos se delegan apropiadamente para mejorar el rendimiento.
- Se implementan técnicas para evitar la duplicación de eventos.
- Los manejadores de eventos están organizados en funciones específicas por tipo.

### Rendimiento
- El log de eventos tiene un límite para evitar problemas de rendimiento.
- Las animaciones utilizan clases CSS cuando es posible para mejor rendimiento.
- La aplicación minimiza las manipulaciones del DOM directas.

## Extensión y personalización

Para extender la aplicación con nuevas características:

1. **Nuevos tipos de eventos**:
   - Añade nuevas funciones de configuración en `eventHandlers.js`.
   - Incorpora la llamada a la nueva función en el método `init()`.

2. **Cambios en el aspecto visual**:
   - Modifica `styles.css` para cambios generales.
   - Para cambios específicos de componentes, puedes usar jQuery o actualizar las clases de Bootstrap.

3. **Nuevas secciones**:
   - Añade el HTML necesario en `index.html`.
   - Crea los manejadores de eventos correspondientes.
   - Actualiza los estilos si es necesario.

## Solución de problemas comunes

### jQuery no está definido
- Asegúrate de que la conexión a internet funciona correctamente para cargar jQuery desde el CDN.
- Como alternativa, descarga jQuery y referencia el archivo local.

### Los eventos no funcionan
- Verifica que los selectores correspondan a los IDs/clases en el HTML.
- Comprueba el orden de carga de los scripts (jQuery debe cargarse primero).
- Revisa la consola del navegador para posibles errores.

### Problemas de visualización
- Asegúrate de tener Bootstrap cargado correctamente.
- Verifica que los estilos no estén siendo sobrescritos.

## Autor

Juan Camilo Solano Rodriguez

---

Este proyecto fue desarrollado como ejercicio práctico para demostrar el uso de eventos en jQuery, siguiendo buenas prácticas de desarrollo y arquitectura de software.