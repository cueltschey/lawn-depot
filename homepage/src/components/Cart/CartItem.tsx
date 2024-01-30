import "./CartItem.css"
import {useEffect,useState} from 'react'
import axios from 'axios'

interface Props{
  quantity: number;
  product_id: number;
}

const CartItem = ({quantity, product_id}:Props) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getProductData = async () => {
      const category = "none"
      const response = await axios.get('/products', {params:{cat: category, product_id: product_id}})
      setData(response.data)
    }
    getProductData()
  }, [])

  return (
    <div>
      {data.map((item: any, index: number) => (
      <li key={index} className="cart-item">
          <h1>{item["name"]}</h1>
        <img src={item["image_url"]}/>
          <p>Quantity: {quantity}</p>
      </li>
      ))}
    </div>
  )
}

export default CartItem
