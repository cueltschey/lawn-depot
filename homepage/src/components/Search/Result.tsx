import React, { useEffect, useState } from 'react'
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
      }
    }
    fetchData()
  }, [])


   const test = "https://www.marthastewart.com/thmb/jOxXFYCSU3Q7iYkMCrcM6ZSfEmo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dracula-monkey-face-orchid-0718-23c698bf2d7d4cada62ca2b2e7696084-horiz-0623-7213943b22454acca6fd40584c2e718b.jpg"
  return (
    <div>
      <ul className="card-wrapper">
        {data.map((item, index) => (<Card 
          image_url={item["image_url"]} 
          title={item["name"]}
          price={item["price"]}
          key={index}
        />))}
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
        <Card title="test" image_url={test} price="$10.00"/>
      </ul>
  </div>

  )
}

export default Result
