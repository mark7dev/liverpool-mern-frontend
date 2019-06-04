import React, { Component } from 'react';

class NewProduct extends Component {

    state = {
        name: '',
        price: '',
        imageUrl: '',
        // error: false
    }

    infoProduct = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    saveProduct = e => {
        e.preventDefault();
        console.log('jala');
        const { name, price, imageUrl } = this.state;
        
    }

    render() {
        return (
            <div className="newProduct">
                <form onSubmit={this.saveProduct}>
                    <label>Producto</label>
                    <input type="text" onChange={this.infoProduct} name="name" required/>
                    <label>Precio</label>
                    <input type="number" onChange={this.infoProduct} name="price" required/>
                    <label>Imágen</label>
                    <input type="text" placeholder="Ingrese la url de la imágen" onChange={this.infoProduct} name="imageUrl" required/>
                    <button>AGREGAR</button>
                </form>
            </div>
        );
    }
}

export default NewProduct;