'use client'
async function getProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data =  await res.json()
    console.log(data.products)
    
}

export default async function Products(){
    const products = await getProducts()

  return (
    <div>
        <h1>You're in Products page</h1>
        <h1>{products}</h1>

    </div>
    
  )
}
