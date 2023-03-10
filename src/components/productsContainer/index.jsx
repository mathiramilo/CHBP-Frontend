import React from 'react'

import ProductCard from '../productCard'

import './styles.css'

const ProductsContainer = ({ products }) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}

export default ProductsContainer
