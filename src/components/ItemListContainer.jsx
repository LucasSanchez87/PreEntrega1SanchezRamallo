import React from 'react'
import ProductCard from "../components/ProductCard"

const ItemListContainer = ({ productsData }) => {
  return (
    <div>
      {
      productsData.map((product) => {
      return (
        <ProductCard key={product.id} productsData={product} />
      )
    }
      )}
    </div>
  )
}

export default ItemListContainer