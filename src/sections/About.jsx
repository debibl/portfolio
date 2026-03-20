import { LuCodeXml, LuRocket, LuUsers, LuLightbulb } from 'react-icons/lu'

const highlights = [
  {
    icon: LuCodeXml,
    title: 'Чистый код',
    description:
      'Написание поддерживаемого, масштабируемого кода, который выдерживает проверку временем.',
  },
  {
    icon: LuRocket,
    title: 'Производительность',
    description:
      'Оптимизация скорости и обеспечение молниеносного взаимодействия с пользователями.',
  },
  {
    icon: LuUsers,
    title: 'Сотрудничество',
    description:
      'Тесное сотрудничество с коллегами для воплощения идей в жизнь.',
  },
  {
    icon: LuLightbulb,
    title: 'Инновации',
    description:
      'Опережение конкурентов благодаря передовым технологиям и эффективным методам работы.',
  },
]

export default function About() {
  return (
    <section id='about' className='py-3 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-10'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                Обо мне
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100  text-secondary-foreground text-balance'>
              Создавая будущее,
              <span className='text-serif italic font-normal text-white'>
                {' '}
                компонент за компонентом.
              </span>
            </h2>

            <div className='space-y-5 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                Я увлеченный веб-разработчик с профильным образованием и
                практическим опытом работы над учебными и личными проектами. Мой
                путь в IT - это системное освоение технологий, начиная с основ
                программирования и заканчивая глубоким погружением в экосистему
                фронтенда.
              </p>
              <p>
                Сейчас работаю с JavaScript, React и Tailwind. Мне важно писать
                эффективный код и понимать, как устроено приложение, а не просто
                реализовывать отдельные функции. В данный момент активно
                развиваю навыки, необходимые для коммерческой разработки,
                включая работу с API, архитектурой и отладкой.
              </p>
              <p>
                В свободное время продолжаю развиваться: изучаю смежные области,
                улучшаю свои проекты и слежу за практиками в индустрии. Ищу
                возможность расти в команде и приносить реальную пользу
                продукту.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium font-pretty italic text-foreground'>
                «Моя миссия - постоянно развиваться как специалист и создавать
                продуманные решения, которые приносят реальную пользу
                пользователям и бизнесу.»
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, index) => (
              <div
                key={index}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex-center mb-4 hover:bg-primary/20'>
                  <item.icon size={20} className='text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
