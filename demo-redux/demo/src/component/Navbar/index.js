import { Link, Outlet } from 'react-router-dom';
import {connect} from  'react-redux';
function Navbar({todos}) {
    return ( 
        <div>
            <ul>
                <li><Link  to='/'>Home</Link></li>
                <li><Link  to='/about'>About</Link></li>
                <li><Link  to='/todolist'>Todo List : {todos && todos.length}</Link></li>
            </ul>
            <Outlet/>
        </div>
     );
};

const mapStateToProp = state => ({
    todos : state.todoReducer.todos,
}) 

export default connect(mapStateToProp, {})(Navbar);