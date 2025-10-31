import React from 'react'
import { useCart } from '../context/CartProvider'
import styles from "./CartItem.module.css"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {ImCross} from "react-icons/im";

function CartItem({id, price, title, img, quantity}) {
    const {increaseQty, decreaseQty, removeQty} = useCart();
  return (
    <div className={styles.cartItem}>
        {/* ---left_Div--- */}
        <div className= {styles.imageAndTitle}>
            <div className={styles.imageContainer}><img src={img} alt = {title} className={styles.cartImage}/></div>
            <h3>{title}</h3>
        </div>

        {/* ----right_Div---- */}
        <div className={styles.otherControls}>
            <div className={styles.qtyInput}></div>
            <button onClick={() => {increaseQty(id)}}>
                <AiOutlinePlus/>
            </button>

            <span className={styles.quantityDisplay}>{quantity}</span>

            <button onClick={() => {if(quantity <= 1) {return;} decreaseQty(id)}}>
                <AiOutlineMinus/>
            </button>

            <p> &#8377; {price * quantity}</p>
            <button className={styles.removeItemBtn}  onClick={() => {removeQty(id)}}><ImCross/></button>
        </div>
    </div>
  )
}

export default CartItem