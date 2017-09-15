import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postReview } from '../store/products.js';
import axios from 'axios';


export default class PostReviewForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            reviewInput: '',
            ratingInput: ''
        }
        this.handleChangeReview= this.handleChangeReview.bind(this)
        this.handleChangeRating= this.handleChangeRating.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(evt){

        // this.props.addReview(newReview)
        evt.preventDefault()
        const newReview = {
            userId: 1,
            productId: this.props.productId,
            text: this.state.reviewInput,
            rating:+this.state.ratingInput
        }
        axios.post('/api/reviews',newReview)
        .then(res=>res.data)
        .then(newReview => {
            this.props.refreshReviews()
        })
        this.setState({
            reviewInput: '',
            ratingInput: ''
        })
        console.log("SUBMITTED")
    }

    handleChangeReview(evt){
        this.setState({reviewInput: evt.target.value})
    }
    handleChangeRating(evt){
        this.setState({ratingInput: evt.target.value})
    }
    render(){
        console.log("STATE",this.state)
        return(
                <form onSubmit={this.handleSubmit}>
                
                <div className="form-group">
                    <label>Review</label>
                    <input onChange={this.handleChangeReview} name="review"></input>
                </div>
                <div className="form-group">
                <label>Rating</label>
                <input onChange={this.handleChangeRating} name="rating"></input>
                </div>
                <div>
                <button className="btn btn-info">Submit Review</button>
                </div>
            </form>)
    }
}


