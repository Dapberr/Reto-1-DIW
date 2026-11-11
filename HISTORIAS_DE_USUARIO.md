# Entrega 1 · Parte 1.1 — Historias de usuario

**Proyecto:** MiColección Cine — gestión de colecciones cinematográficas
**Metodología:** Diseño Centrado en el Usuario (DCU)

## 1. Usuarios (perfiles)

| Perfil | Descripción | Necesidades principales |
|---|---|---|
| **Visitante** | Persona que llega a la web sin sesión iniciada. | Entender qué ofrece la aplicación, ver un ejemplo y poder acceder o contactar. |
| **Coleccionista (usuario registrado)** | Persona que posee copias de películas (DVD, Blu-ray, digital). | Tener su catálogo organizado y consultarlo rápido y con seguridad. |

## 2. Historias de usuario

Formato: *Como [perfil], quiero [acción], para [beneficio].*

### HU-01 · Conocer la aplicación
**Como** visitante, **quiero** ver una página inicial con la descripción de la aplicación y un listado de películas recientes, **para** entender qué puedo hacer antes de registrarme.
- **Criterios de aceptación:**
  - La página inicial muestra una descripción y las funciones principales.
  - Se muestra un listado ilustrativo de películas.
  - Hay enlaces visibles a *Iniciar sesión* y *Contacto*.
- **Prioridad:** Alta · **Entrega:** 1

### HU-02 · Iniciar sesión
**Como** coleccionista, **quiero** iniciar sesión con mi nombre de usuario y contraseña, **para** acceder a mi colección privada.
- **Criterios de aceptación:**
  - Formulario con usuario, contraseña y botón *Entrar*.
  - Si falta algún campo, se muestra un mensaje claro.
  - (Entrega 1: el proceso se simula; la autenticación real llega más adelante.)
- **Prioridad:** Alta · **Entrega:** 1 (maqueta) / 2 (lógica)

### HU-03 · Ver el listado de mis copias
**Como** coleccionista, **quiero** ver un listado con todas mis copias, **para** conocer de un vistazo qué películas tengo.
- **Criterios de aceptación:**
  - Tras iniciar sesión se muestra el listado con título, formato y año.
  - Solo aparecen mis copias, no las de otros usuarios.
- **Prioridad:** Alta · **Entrega:** 2

### HU-04 · Consultar el detalle de una copia
**Como** coleccionista, **quiero** abrir la ficha de una copia, **para** ver sus datos completos (formato, estado, fecha de adquisición, notas).
- **Criterios de aceptación:**
  - Desde el listado se accede a la ficha de cada copia.
  - La ficha permite volver al listado.
- **Prioridad:** Alta · **Entrega:** 2

### HU-05 · Cerrar sesión
**Como** coleccionista, **quiero** cerrar mi sesión, **para** proteger mi colección cuando uso un equipo compartido.
- **Criterios de aceptación:**
  - Existe una opción *Cerrar sesión* visible en todas las pantallas privadas.
  - Tras cerrar sesión, se vuelve a la página inicial y no se puede acceder a páginas privadas.
- **Prioridad:** Alta · **Entrega:** 2

### HU-06 · Contactar con el equipo
**Como** visitante o usuario, **quiero** enviar un mensaje mediante un formulario de contacto, **para** resolver dudas o hacer sugerencias.
- **Criterios de aceptación:**
  - Formulario con nombre, correo electrónico, mensaje y botón de envío.
  - Se valida que los campos no estén vacíos y que el correo sea válido.
  - Se muestra confirmación tras el envío (simulado en la Entrega 1).
- **Prioridad:** Media · **Entrega:** 1

### HU-07 · Navegar con coherencia
**Como** usuario, **quiero** una navegación igual en todas las pantallas, **para** moverme sin perderme.
- **Criterios de aceptación:**
  - La cabecera con *Inicio / Iniciar sesión / Contacto* aparece en todas las páginas.
  - La página actual queda resaltada.
  - Una ruta inexistente muestra una página 404 con enlace al inicio.
- **Prioridad:** Alta · **Entrega:** 1

### Otras funcionalidades consideradas (entregas futuras)
- **HU-08** Añadir una nueva copia a mi colección.
- **HU-09** Editar o eliminar una copia.
- **HU-10** Buscar y filtrar mi colección por título, formato o año.

## 3. Aplicación de la perspectiva del usuario (DCU)

- **Claridad:** la portada explica el propósito y ofrece dos acciones claras (entrar / contactar).
- **Consistencia:** misma cabecera, colores y pie en todas las páginas.
- **Retroalimentación:** los formularios muestran mensajes de error y de éxito.
- **Accesibilidad:** etiquetas `label` asociadas, enlace "Saltar al contenido", `aria-current`, buen contraste y foco visible.
- **Adaptación:** diseño responsive para móvil y escritorio.
