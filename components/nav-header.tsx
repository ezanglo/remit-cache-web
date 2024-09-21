'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact Us', href: '/#contact' },
]

export default function NavHeader() {

  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(window.location.hash)
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <nav className="hidden md:block">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'text-sm font-medium text-muted-foreground hover:text-foreground px-3',
            `/${hash}` === item.href && 'text-foreground font-bold'
          )}
          onClick={() => setHash(item.href.replace('/', ''))}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
