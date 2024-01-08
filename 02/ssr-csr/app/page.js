

'use client'

export function handlechange(e){

    console.log(e.target.value)
}

export default function Home() {

    function handleClick() {
      
    }


  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>Click me</button>
      <input onChange={handlechange}type="text" placeholder="Type here" className="text-black" />

    </main>
  )
}