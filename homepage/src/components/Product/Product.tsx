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
        const response = await fetch(`/products?cat=${encodeURIComponent(category)}`);
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); 

  const test_url = "https://cdn.britannica.com/89/131089-050-A4773446/flowers-garden-petunia.jpg"

  return (
  <div>
      <ul className="card-wrapper">
        <Card image_url={test_url} title="flower" price="0.00" item_id={1} />
        <Card image_url={test_url} title="flower" price="0.00" item_id={1} />
        <Card image_url={test_url} title="flower" price="0.00" item_id={1} />
        <Card image_url={test_url} title="flower" price="0.00" item_id={1} />
        {data.map((item, index) => (<Card 
          image_url={item["image_url"]} 
          title={item["name"]}
          price={item["price"]}
          item_id={item["id"]}
          key={index}
        />))}
      </ul>
  </div>
  ) 
}

export default Product
