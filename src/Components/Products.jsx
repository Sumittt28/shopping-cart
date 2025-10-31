import React from 'react'
import {products} from '../Data/products'
import Product from './Product'
import styles from './Products.module.css'
import Container from './UI/Container'

function Products() {
  return (
    <Container>
        <h1>Trending...</h1>
        <div className={styles.products}>
            {products.map(product => <Product key = {product.id}{...product}/>)}
        </div>
    </Container>
  )
}

export default Products