import React, { Component } from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to={'/'}>
                    <img id="logo" src="https://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="Liverpool"></img>
                </Link>
                <Link to="/products/new">
                    <button>Agregar producto
                        <i id="iconAdd" className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>
        );
    }
}

export default Header;