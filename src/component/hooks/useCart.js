import React, { useEffect, useState } from 'react';

const useCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, []);
    return [products, setProducts]
};

export default useCart;