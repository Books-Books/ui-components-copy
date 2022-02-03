## Atributos para crear el componente

- **content:** va a ser el código HTML que va dentro del toggletip. Tiene que ser código HTML porque esto va dentro de un div, así que no hay contexto semántico suficiente.

```jsx
const instruction = (
  <Fragment>
    <p>Contenido del toggletip</p>
    <p>
      Se usa para dar información más <em>detallada</em>
    </p>
  </Fragment>
)

<Toggletip content={instruction} />
```

## Consideraciones de estilo

- Agregar los estilos del toggletip al selector `.toggletip-content`

```css
.toggletip-content {
  padding: 0.5em 1em;
  background-color: black;
  color: whitesmoke;
  border-radius: 0.5em;
  width: 300%;
  max-width: 45ch;
  border: 2px solid transparent;
}
```
