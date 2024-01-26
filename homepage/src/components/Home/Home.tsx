import './Home.css'

const Home = () => {
  
  const toAdmin = () => {
    window.location.href = "/#"
  }

  return (
    <>
    <div className="home">
      <h1 className='title'>🌹Welcome to Lawn Depot🌻</h1>
        <div className='home-square'>
          <p style={{margin: 20, fontSize: "20px"}}>
          Welcome to Lawn Depot, the best place to find and publish beautiful
          ya rd decor. Log in to publish, or just browse existing items.
          </p>
          <button
            style={{margin: 20}}
            onClick={() => toAdmin()}>Admin Page</button>
        </div>
    </div>
    </>
  )
}

export default Home
