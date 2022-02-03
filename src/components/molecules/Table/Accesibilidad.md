## Atributos para crear el componente

- **isHeaderRow:** Esto se tiene en cuenta al momento de crear un row y determina si es o no el encabezado de fila. Esto es muy importante para lectores de pantalla porque al seleccionar `isHeaderRow: true` el contenedor de la celda será un `th` con el atributo `scope="row"` y de no serlo, será un `td` normal

## Consideraciones de estilos

- Para encabezados de columna usar el selector `.table-content-item'[scope="col"]`
- Para encabezados de fila usar el selector `.table-content-item'[scope="row"]`
