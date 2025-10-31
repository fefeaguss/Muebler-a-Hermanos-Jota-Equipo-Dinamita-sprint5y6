
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './database/db.js';
import { Product } from './models/ProductSchema.js';


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
app.get('/Productos', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    console.error('❌ Error al obtener catálogos:', error);
    res.status(500).json({ error: 'Error al obtener catálogos' });
  }
});

const nuevoProducto = new Product({
  nombre: 'Mesa de Pino',
  descripcion: 'Mesa rústica artesanal',
  precio: 15000,
  imagen: 'https://mis-imagenes.com/mesa.jpg'
});

await nuevoProducto.save();

console.log(nuevoProducto._id); 

export default app;

