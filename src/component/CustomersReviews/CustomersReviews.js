import React from 'react';
import useProducts from '../hooks/useProducts';
import ReviewProductThree from '../ReviewProductThree/ReviewProductThree';
import './CustomersReviews.css'
const CustomersReviews = () => {
    const [products, setProducts] = useProducts();
    const sliceProducts = products;
    const result = sliceProducts.slice(0,3)
    return (
        <div>
            <h1 className='text-center text-5xl font-bold py-10'>Customers Reviews  ({result.length})</h1>
{
    result.map(product => <ReviewProductThree 
    key={product.id}
    product={product}
    />)
}
        </div>
    );
};

export default CustomersReviews;