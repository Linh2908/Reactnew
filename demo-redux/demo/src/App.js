import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Todolist from './component/TodoList';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route  index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='todolist' element={<Todolist/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
