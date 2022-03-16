import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import TodoList from './component/TodoList';

function App() {
  return (
    <div>
       <div className="App">
     <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route  index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='todolist' element={<TodoList/>}/>
        </Route>
     </Routes>
    </div>
    </div>
  );
}

export default App;
