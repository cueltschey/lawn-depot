import "./Cart.css"
import axios from 'axios'
import CartItem from "./CartItem.tsx"
import {useEffect, useState} from 'react'

interface Props{
  user_id: number;
}

const Cart = ({user_id}:Props) => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getCartItems = async () => {
      const response = await axios.get("/cart", {params:{user_id: user_id}})
      setItems(response.data)
    }
    getCartItems()
  }, []);
  return (
    <div className="cart">
      <ul>
       {items.map((item: any, index :number) => (
       <CartItem key={index} product_id={item["product_id"]} quantity={item["quantity"]}/>
       ))} 
      </ul>
    </div>
  )
}

export default Cart
