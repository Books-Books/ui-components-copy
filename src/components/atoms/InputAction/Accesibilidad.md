## Consideraciones de estilos

- Es importante que estos estilos se mantengan

  ```css
  .InputAction {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  ```

  Esto hace que el input de tipo file o color que ya viene en el HTML tenga efecto en todo el botón sin necesidad de usar JavaScript y sin entorpecer el uso de personas que usan teclado o que usan lectores de pantalla.

- Debido a como está maquetado, el selector que se debe usar para agregar estilos de focus es el siguiente: `.LabelStyled:focus-within`

  ```css
  .LabelStyled:focus-within {
    outline: 0.1875rem solid var(--focus-color);
    outline-offset: 0.1875rem;
  }
  ```
