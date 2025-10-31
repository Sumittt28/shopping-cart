import React from 'react'
import {useCart} from "../context/CartProvider"
import CartItem from './CartItem';
import styles from "./Cart.module.css"

function Cart() {
  const {cart} = useCart();
  const totalAmount = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
  }, 0);

  if (cart.length === 0) return <h1>No item added!</h1>
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
        <div>
            {cart.map(cartItem => <CartItem key = {cartItem.id} {...cartItem}/>)}
        </div>
        <h2>TotalAmount: &#8377; {totalAmount}</h2>
    </div>  
  )
}

export default Cart