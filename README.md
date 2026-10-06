# Bitácora de Operación de Planta — F-PP-05

App web para registrar la operación de una planta panelera (turno, preliminares,
proceso, vapor, producto, etc.), con historial, exportación a PDF y CSV, modo
guía con video, y funcionamiento sin internet.

## Archivos de este paquete

- `index.html` — la app completa (todo el código).
- `manifest.json` — datos de la app para que se pueda "instalar" (nombre, ícono, colores).
- `sw.js` — permite que funcione sin internet una vez se abrió por primera vez.
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — íconos de la app.
- `videos/` — aquí van tus videos de la guía (ver `videos/LEEME.txt`).

## 1. Subir a GitHub

1. Entra a github.com y crea una cuenta si no tienes.
2. Botón **New repository** → nómbralo, por ejemplo, `bitacora-planta`.
   - Si vas a cobrar por esta app, marca el repositorio como **Private**.
3. Dentro del repositorio: **Add file → Upload files**.
4. Arrastra TODOS los archivos de este paquete (manteniendo la carpeta `videos`
   tal cual, con tus videos adentro si ya los tienes).
5. Abajo, botón **Commit changes**.

## 2. Publicarlo como página web (GitHub Pages)

> Nota: si el repositorio es privado, confirma en tu cuenta de GitHub si tu plan
> incluye Pages en repos privados (depende del tipo de cuenta).

1. En el repositorio: **Settings → Pages** (en el menú de la izquierda).
2. En "Branch" elige `main` y la carpeta `/ (root)` → **Save**.
3. Espera 1-2 minutos. GitHub te dará un enlace parecido a:
   `https://tu-usuario.github.io/bitacora-planta/`
4. Ese enlace ya es tu app funcionando — ábrelo desde el celular o compártelo.

## 3. Generar el APK con PWABuilder

1. Entra a **pwabuilder.com**.
2. Pega el enlace de GitHub Pages del paso anterior y analiza.
3. Como ahora el `manifest.json` es un archivo real (a diferencia del intento
   anterior), debería detectarlo sin problema.
4. Ve a la pestaña **Android** → genera y descarga el `.apk`.
5. Copia el `.apk` al celular e instala (puede pedir permitir "instalar de
   fuentes desconocidas" la primera vez).

## Actualizar la app más adelante

Cualquier cambio: edita el archivo en GitHub (o sube uno nuevo con el mismo
nombre) → se actualiza solo en el enlace de GitHub Pages. Si quieres que el
APK también se actualice, hay que volver a generarlo en PWABuilder.
