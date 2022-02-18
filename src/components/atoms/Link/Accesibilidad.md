## Consideraciones de estilo

- En caso de que el estado de focus no tenga un outline por decisión de diseño, _no_ usar la propiedad `outline: none` y en su lugar usar `outline-color: transparent` para que en el modo de alto contraste de Windows se pueda notar el estado de focus.
- Para este mismo modo, dejar la propiedad `text-decoration-color: transparent` en el elemento para que sea fácil de reconocer el elemento en el modo de alto contraste.
- Mantener el contraste necesario entre texto y fondo. El contraste mínimo dependiendo del estándar usado es de 5:1 para accesibilidad AA y 7:1 para accesibilidad AAA, para rectificar el contraste se puede usar [este medidor de contraste](https://webaim.org/resources/contrastchecker/).
