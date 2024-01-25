import { useEffect, useState } from "react"


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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>{data}</div>
  )
}

export default Product
