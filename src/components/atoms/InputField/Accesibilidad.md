## Consideraciones de estilo

- Debido a como está maquetado, el selector que se usa para darle estado de focus al componente es `.InputCont:focus-within`

  ```css
  .InputCont:focus-within {
    outline: 0.1875rem solid var(--colorbrBottom);
    outline-offset: 0.1875rem;
  }
  ```

- Mantener en cuenta las especificaciones de contraste del componente. Tal como está ahora el componente es especialmente notorio al momento de escribir donde el label no contrasta bien con el fondo. El contraste para accesibilidad AA es de de 4.5:1 y el de accesibilidad AAA de 7:1. Se puede revisar el contraste entre fondo y texto [usando este revisor de contraste](https://webaim.org/resources/contrastchecker/)
