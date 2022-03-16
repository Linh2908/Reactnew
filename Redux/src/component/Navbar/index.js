import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to=''>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>Gio Hang</Link>
                </li>
            </ul>
        </div>
     );
}

export default Navbar;