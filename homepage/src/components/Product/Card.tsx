import './Card.css'
import { useState } from "react"

interface Props{
  image_url: string;
  title: string;
  price: string;
}

const Card = ({image_url, title, price}:Props) => {
  const [isClicked, setIsClicked] = useState(false)


  return (
    <div className="card" onClick={() => setIsClicked(true)}>
      <h1>{title}</h1>
      <img src={image_url}/>
      <p>{price}</p>
      {isClicked? <div className="popup">TEST</div>: <></>}
    </div>
  )
}

export default Card
