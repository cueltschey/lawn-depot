import "./Cart.css"

interface Props{
  user_id: number;
}

const Cart = ({user_id}:Props) => {
  const [items, setItems] = useEffect([]);
  useEffect(()=>{
    const getCartItems = async (user_id: number) => {
      const response = await axios.get("/cart", {user_id: user_id})
      const result = await response.json()
      setItems(result)
    }
  }, []);
  return (
    <div className="cart">
      <ul>
       {items.map((item, index) => (
       <li key={index}>{item["name"]}</li>
       ))} 
      </ul>
    </div>
  )
}

export default Cart
