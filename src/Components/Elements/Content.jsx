import React, { useEffect, useState } from 'react'

function Content() {

    const [products, setProduct] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(products => {
          console.log(products['products'])
          setProduct(products['products']);
        })
        .catch(error => {
          setError(error.message);
        });
    }, []);
  return (
    <div className='Content'>
    <div className="container py-5">
     <div className="row">
      {
       products.map((item)=>(
         <div className="col-md-4 mb-2">
         <div className="card mb-2" key={item.id}>
         <div class="card">
 <div class="card-body">
 <h4>{item.category}</h4>
   <h5 class="card-title">{item.title}</h5>
   <h6>Price: {item.price}$</h6>
   <p>{item.description}</p>
  

       <div>
         <img src={item.thumbnail} style={{height:"200px", width:"300px"}} className='img-fluid' alt="" />
       </div>
       <h5 className='mt-2'>Rating: {item.rating}</h5>
      
 </div>
</div>
         </div>
       </div>
       ))
    
      }
      
     </div>
    </div>
   </div>
  )
}

export default Content