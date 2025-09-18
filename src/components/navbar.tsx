'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/work', label: 'WORK' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <Link href="/" className="logo">
          RONAK
        </Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}