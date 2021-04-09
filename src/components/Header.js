import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-betweeen">
            <div className="container">
                <h1>
                    <Link to={"/"} className="text-light">
                        CRUD - React, Redux, REST API & Axios                    
                    </Link>
                </h1>
            </div>
                <Link className="btn btn-danger nuevo-post" to={"/productos/nuevo"}>Agregar Producto &#43;</Link>
            
            
        </nav>
    )
}

export default Header;
