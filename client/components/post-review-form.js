import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postReview } from '../store/products.js';
import axios from 'axios';


export default class PostReviewForm extends Component {
    constructor(props){
        super(props)
        this.state = {

            reviewInput: '',
            ratingInput: '',
            dirtyReview: false,
            dirtyRating: false,
        }
        this.handleChangeReview= this.handleChangeReview.bind(this)
        this.handleChangeRating= this.handleChangeRating.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newReview = {
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
            ratingInput: '',
            dirtyRating: false,
            dirtyReview: false
        })
        console.log("SUBMITTED")
    }
    //handle changes for forms 
    handleChangeReview(evt){
        this.setState({
            reviewInput: evt.target.value,
            dirtyReview: true
        })
        
    }
    handleChangeRating(evt){
        this.setState({
            ratingInput: evt.target.value,
            dirtyRating: true
        })
        
    }
    render(){
        
        // console.log("POST-REVIEW-FORM STATE",this.state)
        const dirtyReview = this.state.dirtyReview
        const dirtyRating=this.state.dirtyRating
        const invalidNumber =  dirtyRating && isNaN(this.state.ratingInput)
                                ||dirtyRating && +this.state.ratingInput>5 
                                || dirtyRating && +this.state.ratingInput<1

        let warning;
            if(dirtyReview&& !this.state.reviewInput.length){
                warning="Please Enter a review"
            } else if( invalidNumber) {warning="Please Enter a rating between 1-5"}
            
        return(
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label>Review</label>

                    <input value ={this.state.reviewInput} onChange={this.handleChangeReview} name="review"></input>
                </div>
                <div className="form-group">
                <label>Rating</label>
                <input value ={this.state.ratingInput} onChange={this.handleChangeRating} name="rating"></input>
                </div>
                <div>
                <button 
                disabled={this.state.reviewInput.length<1 || isNaN(this.state.ratingInput)|| this.state.input>5||this.state.input<1}
                className="btn btn-info">
                         Submit Review</button>
                
                </div>
                <br/>
                <div className="alert alert-warning">{warning}</div>
            </form>)       

    }
}


