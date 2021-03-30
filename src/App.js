import './App.scss'
import ItemListContainer from './containers/ItemListContainer';
import RouterApp from './routes/RouterApp';


import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
      <RouterApp />
  );
}

export default App;
