import React from 'react';
import Buttonfunction from './Buttonfunction';
import './App.css';

const Card = ({ item, setItem }) => {
  let data = [
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Fancy Product',
      price: ' $40.00 - $80.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Special Item',
      price: ' $18.00',
      orgprice:'$20.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Sale Item',
      price: ' $25.00',
      orgprice:'$50.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Popular Item',
      price: '$40.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Sale Item',
      price: ' $25.00',
      orgprice:'$50.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Fancy Product',
      price: ' $40.00 - $80.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Special Item',
      price: ' $18.00',
      orgprice:'$20.00'
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Popular Item',
      price: '$40.00'
    }
  ];

  return (
    <>
      {data.map((e, i) => (
        <div key={i} className="col mb-5">
          <div className="card h-100">
            {/* Sale badge */}
            {e.product === 'Special Item' || e.product === 'Sale Item' ? (
              <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                Sale
              </div>
            ) : null}
            {/* Product image */}
            <img className="card-img-top" src={e.img} alt="..." />
            {/* Product details */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name */}
                <h5 className="fw-bolder">{e.product}</h5>
                {/* Product reviews */}
                {e.product === 'Special Item' || e.product === 'Popular Item' ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                ) : null}
                {e.product === 'Special Item' || e.product === 'Sale Item' ? (
                  <span className="text-muted text-decoration-line-through">{e.orgprice}</span>
                ) : null}
                {e.price}
              </div>
            </div>
            {/* Product actions */}
            <Buttonfunction item={item} setItem={setItem} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
