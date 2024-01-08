'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Export the Home component
export default function Home() {
  // Define state for products
  const [products, setProducts] = useState([]);

  // Use useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Fetch Api Application</h1>
        <br />
        <h1>Product list</h1>
        {
          products.map((product) => (
            <h1 key={product.id}><span>Name: {product.title}</span></h1>
            
          ))
        }
      </div>
    </main>
  );
}
