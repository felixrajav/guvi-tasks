import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from '../Home';
import Edit from '../Edit';
import Add from '../Add';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Edit/:id' Component={Edit}></Route>
        <Route path='/add' Component={Add}></Route>
      </Routes>
    </div>
  );
}

export default App;