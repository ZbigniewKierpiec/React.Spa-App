import React from 'react';
import {Link} from 'react-router-dom'
import Product from '../Product';
const ProductPage =({match})=>{
return(
<>

<div>Product page</div>
<Product id={match.params.id}/>
<Link to='/products'>Back to Product List</Link>
</>
)



}

export default ProductPage;