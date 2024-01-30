import { useEffect, useState } from 'react'
import Card from '../Product/Card';

interface Props {
  term: string;
}


const Result = ({term}:Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`/search?q=${encodeURIComponent(term)}`)
        const result = await response.json()
        setData(result)
      }
      catch(err){
        console.error(err)
        setData([])
      }
    }
    fetchData()
  }, [])


  return (
    <div>
      <ul className="card-wrapper">
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

export default Result
