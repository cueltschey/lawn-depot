import './Card.css'
import { useState } from "react"
import axios from 'axios'

interface Props{
  image_url: string;
  title: string;
  price: string;
  item_id: number;
  category: string;
}

const Card = ({image_url, title, price, item_id, category}:Props) => {
  const [isClicked, setIsClicked] = useState(false)

  const toggleVisibility = () => {
    setIsClicked(!isClicked)
  }
  const addToCart = async () => {
    const response = await axios.post("/cart", {
      product_id: item_id,
      user_id: 1,
      quantity: 1,
      category: category
    })
    console.log(response)
  }


  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={image_url}/>
      <p>{price}</p>
      <button onClick={() => toggleVisibility()}>+</button>
      {isClicked && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // Make sure it's above other elements
          }}
        >
          <div className='enlarged-card'>
           <h1 style={{fontSize:"3vw"}}>{title}</h1>
            <img style={{maxHeight:"40vh",width:"auto"}} src={image_url}/>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p style={{color:"red"}}>{price}</p>
            <button style={{color:"green"}} onClick={()=>addToCart()}>Add to cart</button>
            <button style={{color:"red"}} onClick={()=>toggleVisibility()}>X</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
