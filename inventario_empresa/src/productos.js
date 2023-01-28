import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Connect to the MongoDB database
    mongoose.connect('mongodb://localhost:27017/inventario_empresa', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      // Connected successfully
      console.log('Connected to MongoDB');
    });

    // Create a Mongoose model for the productos collection
    const ProductoSchema = new mongoose.Schema({
      title: String,
      price: Number,
      images: Array
    });
    const Producto = mongoose.model('Producto', ProductoSchema);

    // Retrieve all documents from the productos collection
    // eslint-disable-next-line array-callback-return
    Producto.find((err, productos) => {
      if (err) return console.error(err);
      setProductos(productos);
    });
  }, []);

  return (
    <div className="row">
      {productos.map(producto => (
        <div className="col-lg-3 col-sm-12" key={producto._id}>
            <img src={producto.images[0]} alt={producto.title}/>
            <h2>{producto.title}</h2>
            <p>{producto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
