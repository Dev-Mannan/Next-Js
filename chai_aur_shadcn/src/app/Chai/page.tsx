import { Button } from "@/components/ui/button"


function ChaiPage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
    <div>ChaiPage $</div>

        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
        <br/>
        <Button variant='destructive' size='sm'>Shadcn Button</Button>

    
    </main>
  )
}

export default ChaiPage