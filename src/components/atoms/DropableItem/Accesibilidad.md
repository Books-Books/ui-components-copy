## Consideraciones de estilo

- Para agregar un estilo al botón que abre el acordeón al haber recibido clic (o a alguno de sus elementos internos) usar el selector `.c-collapsible-container-header[aria-expanded="true"]`

  ```css
  .c-collapsible-container-header[aria-expanded='true'] {
    background-color: grey;
  }
  ```

- Para agregar el estilo del contenido del acordeón ya expandida usar el selector `.c-collapsible-container-header[aria-expanded="true"] + .c-collapsible-container-body` a no ser que sea algo relacionado con animación, en cuyo caso se puede usar el selector `.c-collapsible-container-body.active`

  ```css
  .c-collapsible-container-header[aria-expanded='true']
    + .c-collapsible-container-body {
    display: block;
  }

  .c-collapsible-container-body.active {
    animation: show 0.5s 1;
  }
  ```
