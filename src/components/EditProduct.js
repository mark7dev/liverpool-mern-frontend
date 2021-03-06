import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showProduct, editProduct } from '../actions/productsActions';
import './styles/EditProduct.css';

class EditProduct extends Component {

    state = {
        name: '',
        price: '',
        image: '',
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.showProduct(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { name, price, image } = nextProps.product;

        this.setState({
            name,
            price,
            image
        })
    }

    infoProduct = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    updateProduct = e => {
        e.preventDefault();

        const { id } = this.props.match.params;
        const { name, price, image } = this.state;

        const infoProduct = {
            id,
            name,
            price,
            image
        }

        this.props.editProduct(infoProduct);

        this.props.history.push('/');

    }

    getFiles(files) {
        this.setState({image: files.base64})
    }

    render() {
        const { name, price, image } = this.state
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="editProduct">
                <form className="form__editProduct" onSubmit={this.updateProduct}>
                    <label>Producto</label>
                    <input defaultValue={name} type="text" onChange={this.infoProduct} name="name" required/>
                    <label>Precio</label>
                    <input defaultValue={price} type="number" onChange={this.infoProduct} name="price" required/>
                    <label>Url de la imágen</label>
                    <input defaultValue={image} type="text" placeholder="Ingrese la url de la imágen" onChange={this.infoProduct} name="image" required disabled/>
                    <button>GUARDAR CAMBIOS</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.products.product
})

export default connect(mapStateToProps, { showProduct, editProduct }) (EditProduct);