import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productsActions';
import './styles/NewProduct.css';
import FileBase64 from './react-file-base64';

class NewProduct extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            image: '',
        }
    }


    infoProduct = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    saveProduct = e => {
        e.preventDefault();
        const { name, price, image } = this.state;

        const infoProduct = {
            name,
            price,
            image 
        }

        this.props.addProduct(infoProduct);

        this.props.history.push('/');

    }

    getFiles(files){
        this.setState({image: files.base64})
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
                    {/* <input type="text" placeholder="Ingrese la url de la imágen" onChange={this.infoProduct} name="image" required/> */}

                    <FileBase64
                        multiple={ false }
                        onDone={ this.getFiles.bind(this) }
                    />

                    <button>AGREGAR</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addProduct }) (NewProduct);