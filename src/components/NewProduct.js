import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productsActions';
import './styles/NewProduct.css';

class NewProduct extends Component {

    state = {
        // _id: '',
        name: '',
        price: '',
        image: '',
        // error: false
    }

    infoProduct = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    saveProduct = e => {
        e.preventDefault();
        // console.log('saving...');
        const { name, price, image } = this.state;

        const infoProduct = {
            // _id,
            name,
            price,
            image 
        }

        this.props.addProduct(infoProduct);

        this.props.history.push('/');

    }

    render() {
        return (
            <div className="newProduct">
                
                <form onSubmit={this.saveProduct} className="form__newProduct">
                    <h3>¿Qué producto deseas agregar?</h3>
                    <label>Producto</label>
                    <input type="text" onChange={this.infoProduct} name="name" required/>
                    <label>Precio</label>
                    <input type="text" onChange={this.infoProduct} name="price" required/>
                    <label>Imágen</label>
                    <input type="text" placeholder="Ingrese la url de la imágen" onChange={this.infoProduct} name="image" required/>
                    <button>AGREGAR</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addProduct }) (NewProduct);