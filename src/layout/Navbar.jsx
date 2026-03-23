import Button from '@/components/Button'
import { LuMenu, LuX } from 'react-icons/lu'
import { useEffect, useState } from 'react'

const navLinks = [
  {
    href: '#about',
    label: 'Обо мне',
  },
  {
    href: '#projects',
    label: 'Проекты',
  },
  {
    href: '#experience',
    label: 'Опыт',
  },
  {
    href: '#testimonials',
    label: 'Отзывы',
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500
        ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} 
        z-50`}
    >
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a
          href='#'
          className='text-xl font-bold tracking-tight hover:text-primary'
        >
          ВМ<span className='text-primary'>.</span>
        </a>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='hidden md:block'>
          <a href='#contact'>
            <Button size='sm'>Написать мне</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 text-foreground cursor-pointer'
          onClick={handleMenuClick}
        >
          {isMobileMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
          <div className='container mx-auto px-6 py-6 flex flex-col items-center gap-4'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-lg text-muted-foreground hover:text-foreground'
              >
                {link.label}
              </a>
            ))}

            <Button className='m-3' onClick={() => setIsMobileMenuOpen(false)}>
              Написать мне
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
