import { useState, useEffect } from 'react'
import Product from './Product'
import Review from './Review';

function Admin() {
  const[show,setShow]=useState(true);
  return (
    <div>
      <button onClick={()=>setShow(!show)}>Toggle {show ? <span>Products</span> : <span>Reviews</span>} </button>
      {
        show? (<Product />): (<Review />)
      }
      
    </div>
  )
}

export default Admin