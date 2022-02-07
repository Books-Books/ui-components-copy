## Atributos para crear el componente

- **roleDescription:** nombre del contenedor padre. Esto sirve para decirle a los usuarios de lectores de pantalla qué tipo de contenido puede esperar que esté dentro del slider. Por defecto este valor está como _Slider_ pero puede cambiar dependiendo del tipo. Por ejemplo, si es una lista con opciones de respuesta, el valor de `roleDescription` de este podría ser "Opciones de respuesta".
- **type:** nombre del tipo de contenido dentro del carrusel. Este estará presente en el live region del componente (que es el elemento al final con la clase `sr-only` y las propiedades `aria-live="polite"` y `aria-atomic="true"`) y en los botones de contenido anterior y siguiente. Por defecto este valor está como _Slide_ pero puede cambiar dependiendo del tipo de contenido. Por ejemplo, si se crea una lista con opciones de respuesta, el valor de `type` podría ser "Opción" **preferible mantenerlo de una palabra** de otro modo puede hacer que la información que den los lectores de pantalla sea excesiva.

## Consideraciones de maquetación

- Al crear el componente, es importante que los hijos directos del component Carrousel **sean el componente TabPanel** ya que está especialmente configurado para la funcionalidad del carrusel. Este componente tiene una propiedad llamada `roleDescription` que por defecto es el mismo atributo `type` del carrusel. Por ejemplo:

```jsx
<Carrousel type='Opción'>
  <TabPanel roleDescription='Opción'>// Contenido</TabPanel>
  <TabPanel roleDescription='Opción'>// Contenido</TabPanel>
  <TabPanel roleDescription='Opción'>// Contenido</TabPanel>
</Carrousel>
```

## Consideraciones de estilo

- Es importante mantener la propiedad `pointer-events: none` en los SVG dentro de los botones, de otro modo interfiere con el clic para moverse en el carrusel.
- al agregar estilo a los botones con el atributo `disabled` **no usar algún tipo de color con transparencia en el fondo** ya que puede hacer difícil verlo para algunos usuarios. En su lugar, mantener tonos de grises y usar la propiedad `pointer: not-allowed` para hacer notorio que no es posible usar el botón.
