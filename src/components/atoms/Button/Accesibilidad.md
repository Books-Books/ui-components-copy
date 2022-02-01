## Atributos para crear el componente

- **hasAriaLabel:** Determina si el componente tendrá un `aria-label` o no. Tiene dos valores:

  - `true`, que en ese caso, el valor que se use en _label_ será usado como un `aria-label`
  - `false` que en ese caso, el valor será usado como texto dentro del botón

## Consideraciones de estilo

- Mantener un borde transparente para que sea visible en modo de alto contraste.
- En caso de que el estado de focus no tenga un outline por decisión de diseño, _no_ usar la propiedad `outline: none` y en su lugar usar `outline-color: transparent` para que en el modo de alto contraste de Windows se pueda notar el estado de focus.
- Para este mismo modo, dejar la propiedad `text-decoration-color: transparent` en el elemento.
- Mantener el contraste necesario entre texto y fondo. El contraste mínimo dependiendo del estándar usado es de 5:1 para accesibilidad AA y 7:1 para accesibilidad AAA, para rectificar el contraste se puede usar [este medidor de contraste](https://webaim.org/resources/contrastchecker/).
- **No** usar opacidad al momento de estilizar un botón con el atributo `disabled` ya que puede hacer difícil verlo en algunos casos.
