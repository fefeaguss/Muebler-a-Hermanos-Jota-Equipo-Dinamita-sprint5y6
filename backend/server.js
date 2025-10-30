
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './database/db.js';
import { Catalogo } from './models/CatalogoSchema.js';


dotenv.config();
const app = express();
app.use(cors());



app.use(express.json());

await connectDB();
// Rutas
app.get('/', (req, res) => {
  res.send('API de la Mueblería Hermanos Jota');
});

// Ruta para obtener todos los catálogos
app.get('/catalogos', async (req, res) => {
  try {
    const catalogos = await Catalogo.find();
    res.json(catalogos);
  } catch (error) {
    console.error('❌ Error al obtener catálogos:', error);
    res.status(500).json({ error: 'Error al obtener catálogos' });
  }
});

export default app;

