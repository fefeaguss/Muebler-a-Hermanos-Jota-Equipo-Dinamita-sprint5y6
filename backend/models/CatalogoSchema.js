import mongoose from 'mongoose';


const CatalogoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export const Catalogo = mongoose.model('Catalogo', CatalogoSchema);

 