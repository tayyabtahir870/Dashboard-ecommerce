import React, { useEffect, useState } from 'react';

function Contact() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className='Contact'>
      <div className="container py-5">
        <div className="row">
          {products.map(item => (
            <div className="col-md-4 mb-2" key={item.id}>
              <div className="card mb-2">
               
                <h2>{item.id}</h2>
                <h6>Title: {item.title}</h6>
                <h5>Price: {item.price}</h5>
                <p>Description: {item.description}</p>
                <h6>Category: {item.category}</h6>
                <img className='p-3' src={item.image} alt="" width={200} />

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
