import Head from 'next/head';
import React from 'react';
import ProductItem from '../components/product/ProductItem';
import { products } from '../utils/constant';

function Home() {
  const handleCheck = (e) => {};
  return (
    <div className='home_page'>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className='products'>
        {products.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              handleCheck={handleCheck}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
