import React from 'react';


const EditProductForm = (props) => {
    // console.log("FORM EDIT PRODUCT PROPS#@$#!$@!#",props)
    const categories = props.categories
    const product = props.product
     return (
         <div>
            
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input name='name' 
                    onChange={props.handleChange}
                    value={product.name}>
                    </input>
                    </div>
                    <br/>

                <div className="form-group">
                    <label>Product Description</label>
                    <textarea name='description' 
                    onChange={props.handleChange}
                    value={product.description}>
                    </textarea>
                    </div>
                    <br/>

            <div className="form-group">
                <label>Quantity In Stock</label>
                <input name='quantity' 
                onChange={props.handleChange}
                value={product.quantity}>
                </input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Price</label>
                <input name='price' 
                onChange={props.handleChange}
                value={product.price}></input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Image URL</label>
                <input name='image' 
                onChange={props.handleChange}
                value={product.image}></input>
                </div>
                <br/>

            <div className="form-group">
                <label>Product Category</label>
                <select name='categoryId' 
                onChange={props.handleChange}>
                <option>Please select a Category</option>
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

            <button className="btn btn-success">MAKE CHANGES</button>
            </form>
         </div>
        )
 
   }
 
   export default EditProductForm