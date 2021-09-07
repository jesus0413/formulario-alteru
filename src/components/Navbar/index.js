import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Navbar/logo.2.png';
import { Link } from 'react-router-dom';


export default function Navbar (){
    return <header className="header">
           <span><Link to="/"><img src={Logo} alt="logo"  className="logo"/></Link></span>
           <div className="links">
           <span><Link to="/Register" className="linkregister">Register</Link></span>
           <span><Link to="/" className="linkhome">Home</Link></span>
           </div>
         </header>
}
