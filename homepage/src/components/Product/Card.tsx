import './Card.css'
import { useState } from "react"

interface Props{
  image_url: string;
  title: string;
  price: string;
}

const Card = ({image_url, title, price}:Props) => {
  const [isClicked, setIsClicked] = useState(false)

  const toggleVisibility = () => {
    setIsClicked(!isClicked)
  }


  return (
    <div className="card" onClick={() => toggleVisibility()}>
      <h1>{title}</h1>
      <img src={image_url}/>
      <p>{price}</p>
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
            <button 
              style={{
                backgroundColor: "rgb(121,200,121,0.5)"
              }}
              onClick={() => toggleVisibility()}
            >⬆️</button>
            <h1 style={{fontSize:"3vw"}}>{title}</h1>
            <img style={{maxHeight:"50vh",width:"auto"}} src={image_url}/>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p style={{color:"red"}}>{price}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
