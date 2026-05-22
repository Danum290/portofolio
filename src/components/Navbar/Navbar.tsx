'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'Resume',
    href: '/#resume',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Contact Me',
    href: '/#contact',
  },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="bg-primary border-border h-16 overflow-hidden border-b">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <div className="text-primary-content md:hidden">_menu</div>
        ) : (
          <Link href="/">
            <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
              <Logo />
              <span className="text-primary-content">Danu Mahesa</span>
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary absolute top-16 left-0 z-50 h-[calc(100dvh-4rem)] w-full flex-col p-6 md:static md:flex md:h-full md:w-auto md:flex-row md:items-center md:gap-1 md:p-0`}>
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="flex items-center">
              <Link
                href={href}
                className={`text-tertiary-content hover:text-accent hover:bg-secondary/50 relative rounded-lg px-4 py-3 text-lg font-medium transition-all duration-300 md:px-5 md:py-2 md:text-sm lg:px-6 ${pathname === href ? 'text-accent bg-secondary/80' : ''}`}>
                {label}
                {pathname === href && (
                  <span className="bg-accent absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full md:hidden" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
