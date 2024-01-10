
import Image from 'next/image';
import page from '@/app/Products/pagess'

// Export the Home component
export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Home Page</h1>
          <pagess/>
      </div>
    </main>
  );
}
