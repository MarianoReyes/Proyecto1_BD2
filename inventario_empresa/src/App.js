import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './productos.js'

function App() {
  return (
    <div className="body_wrapper">
      <div className="section">
        <div className="row my-4">
          <div className="col-lg-12">
            <h1>Estos son los productos disponibles</h1>
          </div>
        </div>
        <Productos/>
      </div>

    </div>
  );
}

export default App;
