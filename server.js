const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos (CSS, JS del cliente, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de las páginas estáticas
const vista = (nombre) => (req, res) =>
  res.sendFile(path.join(__dirname, 'views', nombre));

app.get('/', vista('index.html'));
app.get('/login', vista('login.html'));
app.get('/contacto', vista('contacto.html'));

// Página 404 para cualquier otra ruta
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor en marcha: http://localhost:${PORT}`);
});
