import React from 'react';


const AddProductForm = (props) => {
    // console.log("FORM PROPS",props)
    const categories = props.categories
     return (
         <div>
            
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input name='productName' onChange={props.handleChange}></input>
                    </div>
                    <br/>

                <div className="form-group">
                    <label>Product Description</label>
                    <textarea name='productDescription' onChange={props.handleChange}></textarea>
                    </div>
                    <br/>

            <div className="form-group">
                <label>Quantity In Stock</label>
                <input name='quantityInStock' onChange={props.handleChange}></input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Price</label>
                <input name='productPrice' onChange={props.handleChange}></input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Image URL</label>
                <input name='productUrl' onChange={props.handleChange}></input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Category</label>
                <select name='productCategory' onChange={props.handleChange}>
                {
                    categories.map(category=>{
                        return (
                            <option
                                    key={category.id}
                                    value={category.id}>{category.name}</option>
                        )
                    })
                }
                </select>
                </div>
                <br/>
                <br/>

            <button className="btn btn-success">Add Product</button>
            </form>
         </div>
        )
 
   }
 
   export default AddProductForm
