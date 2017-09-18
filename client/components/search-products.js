import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { writeInputValue } from '../store';
import ProductList from './products-list';


class SearchProducts extends Component {
    render(){
        console.log(this.props.products)
        console.log(this.props.match.params.inputValue)
        const inputVal = this.props.match.params.inputValue.toLowerCase();
        if(this.props.products.length) {
            const products = this.props.products.filter(product => {
                if(product.name.toLowerCase().includes(inputVal) ||
                   product.description.toLowerCase().includes(inputVal) ||
                   product.category.name.toLowerCase().includes(inputVal)) {
                    return product;
                }
            }
            )
            return(<ProductList products={products} />)
        } else {
        return(<div>Searching...</div>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

export default withRouter(connect(mapStateToProps)(SearchProducts))