/*
import fs from 'fs';
import path from 'path';

import 'dotenv/config';

import mongoose from 'mongoose';

const __dirname = import.meta.dirname;
const dataPath = path.join(__dirname, '../../data/productos.json')

export const getAllProducts = () => {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
};
*/

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true
    },
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    precio: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// id incremental simple
productSchema.pre('save', async function () {
  if (!this.isNew) return;

  const count = await mongoose.model('Product').countDocuments();
  this.id = count + 1;
});

const Product = mongoose.model('Product', productSchema);

export default Product;