import { useState } from 'react'
import { LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu'

const testimonials = [
  {
    quote:
      'Василина, ну когда уже реально зарабатывать будешь? Сидишь только за своим компьютером! Вон у тети Люды Игорюшка уже на квартиру накопил, жене машину присматривает! Ну и что, что он в нотариальной конторе отца работает, ты тоже могла бы хорошее место найти!',
    author: 'Мама',
    role: 'Директор, ООО "Семья"',
    avatar: '/people/mom-sq.jpg',
  },
  {
    quote:
      'Вася, да зачем тебе это программирование? Люди вообще не созданы чтобы в мегаполисе жить и за компом сидеть. Давай просто в деревню махнем, купим избушку, будем картошку выращивать да в лесу шишки собирать.',
    author: 'Екатерина',
    role: 'HR, ОАО "Лучшие друзья"',
    avatar: '/people/friend-sq.jpg',
  },
  {
    quote:
      'Вась, да кому сейчас фронтенд нужен? Вот я знаю реально перспективную темку, там можно деньги буквально на хайпе лутать. Не-не-не, это не букмейкерская контора с криптой... Ладно, это она, но послушай-',
    author: 'Михаил',
    role: 'Финансовый консультант, ЗАО "Реальная Темка"',
    avatar: '/people/temka-sq.jpg',
  },
  {
    quote:
      'Василина, ты же программист, у меня тут двигатель в тракторе что-то гудеть начал, не посмотришь?',
    author: 'Дед',
    role: 'Главный механик, OOO "Сельская жизнь"',
    avatar: '/people/ded-sq.jpg',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }
  return (
    <section id='testimonials' className='py-30 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 size-180 bg-primary/5 rounded-full  blur-3xl -translate-x-1/2 -translate-y-1/2' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='mx-w-3xl mx-auto mb-16 text-center'>
          <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              Что говорят люди
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100  text-secondary-foreground text-balance'>
            Добрые слова от
            <span className='text-serif italic font-normal text-white'>
              {' '}
              замечательных людей
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Main Testimonial */}
            <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
              <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex-center'>
                <LuQuote size={30} />
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 font-pretty'>
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className='flex items-center gap-4'>
                <img
                  src={testimonials[activeIndex].avatar}
                  alt='person avatar'
                  className='size-14 rounded-full object-cover ring-2 ring-primary/20'
                />
                <div>
                  <div className='font-semibold'>
                    {testimonials[activeIndex].author}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className='flex-center gap-4 mt-8'>
              <button
                className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
                onClick={previousTestimonial}
              >
                <LuChevronLeft size={20} />
              </button>

              <div className='flex gap-2'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
                onClick={nextTestimonial}
              >
                <LuChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
