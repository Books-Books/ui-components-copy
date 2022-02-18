## Consideraciones de estilo

- Es importante mantener las propiedades del selector `.InputStyled` para mantener la funcionalidad del input y para que siga siendo visible para lectores de pantalla y para que mantenga la funcionalidad al hacer clic.

  ```css
  .InputStyled {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: inherit;
  }
  ```

- Debido a como está maquetado, el selector que se debe usar para agregarle estilos de focus al componente es `.CheckCont:focus-within .CheckBg`

  ```css
  .CheckCont:focus-within .CheckBg {
    outline: 0.125rem solid var(--outline-color);
    outline-offset: 0.1875rem;
  }
  ```

- Para modificar el color del outline al momento de seleccionar al elemento con teclado se debe modificar la custom property `outline-color` de los siguientes selectores

  - `.InputStyled ~ .CheckBg`
  - `.InputStyled[data-state='Error']:checked ~ .CheckBg`
  - `.InputStyled[data-state='Succes']:checked ~ .CheckBg`
