import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-900 text-white py-6 mt-8">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-sm mb-4">© 2024 Plant Lovers. All rights reserved.</p>
    <div className="space-x-4 mb-4">
      <Link href="https://facebook.com" target="_blank" className="text-white hover:text-green-400">Facebook</Link>

      <Link href="https://twitter.com" target="_blank" className="text-white hover:text-green-400">Twitter</Link>
    </div>
    <p className="text-sm">For inquiries, email us at <Link href="mailto:mehaksobi777@gmail.com" className="text-green-400 hover:underline">info@planthaven.com</Link></p>
  </div>
</footer>

    </div>
  )
}

export default Footer
