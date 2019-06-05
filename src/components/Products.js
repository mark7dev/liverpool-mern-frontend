import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';
import './styles/Products.css';
import CardItem from './CardItem';

class Products extends Component {

    componentDidMount() {
        this.props.showProducts();
    }

    render() {
        const { products } = this.props;
        console.log(products);
        return (
            <div className="products">
                <h1>Total de artículos {this.props.products.length}</h1>
                <div className="cardsItem__container">
                    {
                        products.length !== 0 ?
                        (
                            products.map(product => (
                                <CardItem 
                                    key={product._id}
                                    info={product}
                                />
                            ))
                        )
                        : ""
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps, { showProducts }) (Products);