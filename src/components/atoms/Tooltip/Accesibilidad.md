## Atributos para crear el componente

- **id:** id del contenedor del tooltip.
- Cuando se cree un tooltip, hay que agregar un botón dentro del componente usando el componente `<Button>`. El componente Button debe tener el atributo `aria-labelledby` y el valor de este **debe coincidir con el atributo ID del componente `<Tooltip>`**, de otro modo _no funcionará en lectores de pantalla_.

  ```jsx
  <Tooltip addClass='prb' id='test' content='Descripción'>
    <Button
      styled='secondary'
      hasAriaLabel={false}
      label='Secondary button'
      aria-labelledby='test'
    />
  </Tooltip>
  ```

## Consideraciones de estilo

- Es importante que el tooltip se vea tanto al momento de poner el puntero sobre el elemento así como cuando se selecciona por teclado, por eso es importante hacerlo visible usando estos selectores de CSS `.TooltipCont button:hover + .TooltipItem, .TooltipCont button:focus + .TooltipItem`

  ```css
  .TooltipCont button:hover + .TooltipItem,
  .TooltipCont button:focus + .TooltipItem {
    display: block;
  }
  ```
