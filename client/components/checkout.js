import React, { Component } from 'react';


export default class Checkout extends Component{
    render(){
        return(<div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
            <h1>Checkout</h1>
            {/* <h4>Your Total: ${{total}}</h4> */}
            <form action="/checkout" method="post" id="checkout-form">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" required name="name" />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" className="form-control" required name="address" />
                        </div>
                    </div>
                    <hr />
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="card-name">Card Holder Name</label>
                            <input type="text" id="card-name" className="form-control" required />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="card-number">Credit Card Number</label>
                            <input type="text" id="card-number" className="form-control" required />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="card-expiry-month">Expiration Month</label>
                                    <input type="text" id="card-expiry-month" className="form-control" required />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="card-expiry-year">Expiration Year</label>
                                    <input type="text" id="card-expiry-year" className="form-control" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="card-cvc">CVC</label>
                            <input type="text" id="card-cvc" className="form-control" required />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Buy now</button>
            </form>
        </div>
    </div>)
    }
}


