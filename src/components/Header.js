import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img id="logo" src="https://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="Liverpool"></img>
                <button>Agregar producto
                    <i id="iconAdd" className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default Header;