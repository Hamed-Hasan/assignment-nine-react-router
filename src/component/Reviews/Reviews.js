
import useCart from '../hooks/useCart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

import './Reviews.css'
const Reviews = () => {
   const [carts] = useCart();

    return (
<div className="container mx-auto">
    <h2 className='text-center text-3xl font-bold py-14 text-yellow-400'>What Our Customer Say !!!!</h2>
<div className='grid md:grid-cols-4 gap-10'>
  {
      carts.map(cart => <ReviewProduct 
      key={cart.id}
      cart={cart}
      />)
  }
        </div>
</div>
    );
};

export default Reviews;