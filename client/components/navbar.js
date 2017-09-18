import React from 'react';

import {Link, withRouter} from 'react-router-dom';
import {Searchbar} from './';
import {Categories} from './';



export default (props) => {

    return (
      <div>
        <button type="button" className="btn btn-primary">Home</button>
        <Link to='/categories'>

        <button type="button" className="btn btn-primary">Categories</button>
        </Link>

        <Searchbar />
        <button type="button" className="btn btn-success">Cart</button>
      </div>
    )
}




