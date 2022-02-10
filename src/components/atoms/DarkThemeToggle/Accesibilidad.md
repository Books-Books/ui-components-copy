## Consideraciones de estilo

- Para que esto funcione adecuadamente, en la hoja de estilos principal tendremos que agregar las variables de root dentro de las clase `.light-mode` y `.dark-mode` para que los colores de los temas respectivos cambien:

```css
.light-theme {
  --clr-foreground: hsl(0 0% 0%);
  --clr-background: hsl(0 0% 100%);
}

.dark-theme {
  --clr-background: hsl(0 0% 0%);
  --clr-foreground: hsl(0 0% 100%);
}
```

- Si aparte de eso, se necesita que estas mismas variables del modo oscuro estén dentro de la media querie `prefers-color-scheme: dark`

```css
@media screen and (prefers-color-scheme: dark) {
  :root {
    --clr-background: hsl(0 0% 0%);
    --clr-foreground: hsl(0 0% 100%);
  }
}
```
