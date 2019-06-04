import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productsActions';

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
        // console.log('saving...');
        // const { name, price, imageUrl } = this.state;

        const infoProduct = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.imageUrl 
        }

        this.props.addProduct(infoProduct);

        this.props.history.push('/');

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

export default connect(null, { addProduct }) (NewProduct);