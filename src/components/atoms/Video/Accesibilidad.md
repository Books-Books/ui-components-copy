## Consideraciones de maquetación

- Los botones de reproducción y de pantalla completa deben ser `button`, de otro modo no podrán ser accesibles por teclado y no se podrán activar al presionar las teclas <kbd>Enter</kbd> o <kbd>Space</kbd>
- El controlador de volumen debe ser un `input` con el atributo `type="range"` con valores mínimos y máximos de 0 y 100 respectivamente porque este es el valor que se le indicará a un usuario que usa un lector de pantalla.
- Los íconos de preferencia deben ser un SVG y deberían tener como mínimo los atributos `aria-hidden="true"` para que los lectores de pantalla no lo lean y el atributo `focusable="false"` para que en Internet Explorer no sea seleccionable por teclado.
- Dicho input está dentro de un `label` y este tiene un `span` escondido visualmente. Esto es con el fin de que un lector de pantalla pueda darle el contexto suficiente a los usuarios.

## Consideraciones de estilos

- Mantener al mínimo la adición de estilos del input que se usa para controlar volumen. Se puede usar la propiedad `accent-color` para darle color a la parte de progreso. Esto es con el fin de que se vea bien en el modo de alto contrast de Windows y no genere confusión al usuario.
- Al estilizar los botones de reproducción y de pantalla completa, mantener un borde transparente de borde para que sea visible en este modo.
- Por esta misma razón, de usarse un estilo de focus que no sea un outline, mantener un outline transparente en ese estado.
