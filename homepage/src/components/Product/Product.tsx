import { useEffect, useState } from "react"
import "./Product.css"
import Card from './Card.tsx'

interface Props {
  category: string;
}

const Product = ({category}:Props) => {
  
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products?cat=${encodeURIComponent(category)}`);
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); 

  return (
  <div>
      <ul className="card-wrapper">
        {data.map((item, index) => (<Card 
          image_url={item["image_url"]} 
          title={item["name"]}
          price={item["price"]}
          key={index}
        />))}
      </ul>
  </div>
  ) 
}

export default Product
