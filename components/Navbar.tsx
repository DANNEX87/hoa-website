'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const pathname = usePathname()
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About & Contact' },
    { href: '/directory', label: 'Directory' },
  ]

  return (
    <nav className="bg-brand-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight hover:text-brand-100 transition">
          🏡 Timbered Estates
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-brand-100 transition ${pathname === link.href ? 'text-white underline underline-offset-4' : 'text-brand-100'}`}
            >
              {link.label}
            </Link>
          ))}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-brand-700 px-4 py-1.5 rounded-lg font-semibold hover:bg-brand-50 transition text-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
