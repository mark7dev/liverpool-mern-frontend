import React, { Component } from 'react';
import './styles/CardItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions/productsActions';

class Product extends Component {

    deleteProduct = () => {
        const {id} = this.props.info;
        this.props.deleteProduct(id);
    }


    render() {
        const { id, name, price, image } = this.props.info;
        return (
            <div className="cardItem">
                <div className="cardItem__btns__container">
                    <Link to={ `products/edit/${id}`}>
                        <button className="itemBtn">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </Link>
                    <button className="itemBtn" onClick={this.deleteProduct}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
                <img className="img" src={image} alt=""/>
                <p className="information">{name}</p>
                <p className="information price">${price}</p>
            </div>
        );
    }
}

export default connect(null, {deleteProduct}) (Product);