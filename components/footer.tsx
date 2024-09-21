import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-muted/20 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 mb-4 md:mb-0">© 2024 RemitCache. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href={"/privacy-policy"} className="text-zinc-400 hover:text-zinc-100">Privacy Policy</Link>
            <Link href={"/terms-of-service"} className="text-zinc-400 hover:text-zinc-100">Terms of Service</Link>
            <Link href="/#contact" className="text-zinc-400 hover:text-zinc-100">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
