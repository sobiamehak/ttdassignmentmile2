import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image src="/logo.jpg" alt="logo" 
     width={100} height={100}/>
      <span className="ml-3 text-2xl font-serif text-green-800">Plants Haven</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-8 font-bold">
      <Link href={'/'} className="mr-5 hover:text-green-700 ">Home</Link>
      <Link href={'/plants'} className="mr-5 hover:text-green-700">Plants</Link>
      <Link href={'/about'} className="mr-5 hover:text-green-700">About</Link>
      <Link  href={'/caretip'} className="mr-5 hover:text-green-700">Care Tips</Link>
      
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar
