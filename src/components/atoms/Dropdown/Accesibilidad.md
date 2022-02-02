## Atributos para crear el componente

- **icon:** El ícono que irá al lado izquierdo del texto. Recomendablemente este debe ser un SVG y ser agregado como constante y agregado de esta manera

  ```jsx
  const playButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='svg-icon'
      focusable='false'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M8 5v14l11-7z'></path>
    </svg>
  )

  return <Dropdown icon={playButton} />
  ```

- Es importante que al momento de agregar los elementos del menú dropdown, agregar cada uno dentro de un li, de esta manera

  ```jsx
  <Dropdown icon={playButton}>
    <li>
      <p>Item 1</p>
    </li>
    <li>
      <p>Item 2</p>
    </li>
    <li>
      <p>Item 3</p>
    </li>
  </Dropdown>
  ```

- **svgHide:** determina si el ícono que está a la derecha de la descripción (el de la flecha hacia abajo) se ve o no. Por defecto es _false_ lo que lo hará visible. Si se cambia a _true_ se esconderá

## Consideraciones de estilo

- Para agregar un estilo al menú al haber recibido clic (o a alguno de sus elementos internos) usar el selector `.DropdownCont[aria-expanded="true"]`

  ```css
  .DropdownCont[aria-expanded='true'] {
    background-color: grey;
  }
  ```

- Para agregar el estilo de la lista ya expandida usar el selector `.DropdownCont[aria-expanded='true'] + .dropdownMenu`

  ```css
  .DropdownCont[aria-expanded='true'] + .dropdownMenu {
    display: block;
  }
  ```
