## Atributos al momento de crear el componente

- El argumento de `dataButton` tiene que tener un `label` para darle nombre al botón que abre el modal. También debe tener el atributo `hasAriaLabel` para determinar si tiene un `aria-label` (en ese caso el atributo `label` pasará a ser el valor del aria-label) o no (en ese caso el atributo label será el texto del botón).

  ```jsx
  <Modal
    dataButton: {
      label: 'Abrir modal',
      styled: 'primary',
      hasAriaLabel: false
    }
  />
  ```

## Consideraciones de maquetación

- El orden en el que debe estar en el HTML es primero el botón que abre el modal y luego el contenedor del modal. Eso es debido a que el orden de como está en el HTML impacta el como se lee en lectores de pantalla.
- Dentro de este modal, el botón que se usa para cerrar el modal debe estar de **último** en la maquetación y por lo tanto debe posicionarse adecuadamente con CSS. Esto es debido a que queremos que primero el usuario navegue por el contenido del modal y luego salga. Si se hace de otro modo, generaría mala navegación a personas que naveguen con teclado.
