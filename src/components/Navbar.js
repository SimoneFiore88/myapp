import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Navbar(){
    return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
            
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/detail">Detail</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/profile">profile</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
