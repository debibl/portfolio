import Button from '@/components/Button'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'
import { LuArrowRight, LuDownload, LuMail } from 'react-icons/lu'
import { RxDiscordLogo } from 'react-icons/rx'
import { PiTelegramLogo } from 'react-icons/pi'
import { FiGithub } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

const getRandomPosition = () => `${Math.random() * 100}%`
const getRandomTime = () => `${15 + Math.random() * 20}s`
const getRandomDelay = () => `${Math.random() * 5}s`

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Vercel',
  'Tailwind',
  'CSS3',
  'HTML5',
  'Figma',
  'Git',
  'Bash',
  'GitHub Actions',
  'Vite',
  'Electron',
  'TypeScript',
  'React Native',
  'Expo',
  'Nginx',
  'Ansible',
  'Unix',
]

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src='/hero-bg.jpg'
          alt='futuristic background'
          className='w-full h-full object-cover opacity-40'
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: '#20B2A6',
              boxShadow: '0 0 2.5px #31c9bc',
              left: getRandomPosition(),
              top: getRandomPosition(),
              animation: `slow-drift ${getRandomTime()} ease-in-out infinite`,
              animationDelay: getRandomDelay(),
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container relative mx-auto px-6 pt-32 pb-20 z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full shadow-[0_0_2px] shadow-primary animate-pulse' />
                Frontend-разработчик • React
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4 animate-fade-in'>
              <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Создание
                <br />
                <span className='text-primary glow-text'> цифрового </span>
                опыта <br />
                <span className='text-nowrap'>
                  c<span className='text-serif italic'> вдохновением</span>.
                </span>
              </h1>
              <p className='text-md md:text-lg text-muted-foreground w-xs md:w-lg animate-fade-in animation-delay-200 text-balance'>
                Привет, я Василина Мирян - frontend-разработчица,
                специализирующаяся на React, JavaScript и Node.js. Я создаю
                адаптивные, кроссбраузерные веб-приложения, которые нравятся
                пользователям.
              </p>
            </div>

            {/* Calls To Action */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg'>
                Написать мне <LuArrowRight size={20} />
              </Button>
              <AnimatedBorderButton>
                <LuDownload size={20} />
                Скачать резюме
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              {[
                { icon: FiGithub, href: 'https://github.com/debibl' },
                { icon: PiTelegramLogo, href: 'https://t.me/hipoori' },
                {
                  icon: RxDiscordLogo,
                  href: 'https://discordapp.com/users/281129817145999361',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-200'
                >
                  {<social.icon size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column*/}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-sm md:max-w-md mx-auto'>
              <div
                className='absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse'
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img
                  src='/profile.jpg'
                  alt='profile photo'
                  className='w-full aspect[4/5] object-cover rounded-2xl'
                />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>В поиске работы</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>1+</div>
                  <div className='text-xs text-gray-400'>года опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-gray-400 mb-6 text-center'>
            Технологии, с которыми я работаю
          </p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
        <a
          href='#about'
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
        >
          <span className='text-xs uppercase tracking-wider'>Дальше</span>
          <IoIosArrowDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  )
}
