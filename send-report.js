
const express = require('express');
const app = express();
const PORT = 3001;

// Middleware CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta que simula el envío exitoso
app.post('/api/report', (req, res) => {
  res.json({ ok: true, message: 'Reporte enviado correctamente (simulado).' });
});

// Aquí puedes agregar otras rutas o lógica si lo necesitas

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
