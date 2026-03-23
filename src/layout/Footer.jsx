import { LuGithub } from 'react-icons/lu'
import { PiTelegramLogo } from 'react-icons/pi'
import { RxDiscordLogo } from 'react-icons/rx'

const socialLinks = [
  { icon: LuGithub, href: 'https://github.com/debibl', label: 'GitHub' },
  { icon: PiTelegramLogo, href: 'https://t.me/hipoori', label: 'Telegram' },
  {
    icon: RxDiscordLogo,
    href: 'https://discordapp.com/users/281129817145999361',
    label: 'Discord',
  },
]

const footerLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#testimonials', label: 'Отзывы' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='py-12 border-t border-border'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Logo & Copyright */}
          <div className='text-center md:text-left'>
            <a
              href='#'
              className='text-xl font-bold tracking-tight hover:text-primary'
            >
              ВМ<span className='text-primary'>.</span>
            </a>
            <div className='flex flex-col gap-1 text-sm text-muted-foreground mt-2'>
              <p>© {currentYear} Василина Мирян.</p>
              <p>Все права защищены.</p>
            </div>
          </div>

          {/* Links */}
          <nav className='flex flex-wrap justify-center gap-6'>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
