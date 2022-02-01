## Consideraciones de maquetación

- Al seleccionar uno de estos, su atributo `aria-selected` pasa a ser `true` mientras los demás selectores de sección del componente pasen a ser `false`
- La semántica de `role="presentation"` en el `li` y `role="tab"` en el `a` deben conservarse, ya que su contenedor es un `li` con el atributo `role="tablist"` y todo esto es necesario para darle contexto a usuarios que usan lectores de pantalla.

## Consideraciones de estilo

- Al añadir estilos al tab seleccionado, por favor añadirlos usando el selector `.BtnSec[aria-selected='true']` como se ve a continuación:

  ```css
  .BtnSec[aria-selected='true'] {
    background: var(--primaryColorDark);
    transform: scale(1.1);
  }
  ```

- En caso de que el estado de focus no tenga un outline por decisión de diseño, _no_ usar la propiedad `outline: none` y en su lugar usar `outline-color: transparent` para que en el modo de alto contraste de Windows se pueda notar el estado de focus.
- Para este mismo modo, dejar la propiedad `text-decoration-color: transparent` en el `a`.
