import { LuArrowUpRight, LuGithub } from 'react-icons/lu'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: '"Femme FatalERROR" Games',
    description:
      'Первая коллективная работа, выполненная в рамках учебной практики. Представляет собой сборник браузерных игр, объединенных темой "программирование". Над созданием работало 6 человек. Я была тимлидом команды: координировала участников, вела отчетность, настроила деплой и Github Actions, создала макет и верстку главной страницы, а также игру "Виселица".',
    image: '/projects/PracticeGames-Mockup.jpg',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Figma',
      'CI/CD',
      'Github Actions',
      'Jira',
    ],
    link: 'https://debibl.github.io/practice-games/',
    github: 'https://github.com/debibl/practice-games',
  },
  {
    title: 'QRCodeGen',
    description:
      'Последняя коллективная работа, выполненная в рамках учебной практики. Представляет собой целую экосистему продуктов: рекламный лендинг, браузерное расширение и Телеграм бота. Тема: расширение для генерации и кастомизации QR-кодов. Я снова была тимлидом команды: координировала участников, создала макеты для всех продуктов и полностью разработала расширение для браузера.',
    image: '/projects/QRCodeGen-Mockup.jpg',
    tags: [
      'React',
      'Material UI',
      'MVC',
      'JavaScript',
      'Node.js',
      'Vite',
      'CSS3',
      'HTML5',
      'Figma',
      'Jira',
      'REST API',
      'CI/CD',
      'Manifest',
    ],
    link: 'https://hexlet-diploma.github.io/QR-Website/',
    github: 'https://github.com/orgs/hexlet-diploma/repositories',
  },
  {
    title: 'Book Tracker',
    description:
      'Пет-проект, созданный для решения личной проблемы. Представляет собой трекер книг с функционалом сортировки, редактирования и рандомизации. На данный момент проект приватный, в будущем планирую масштабирование и открытый доступ после получения хостинга.',
    image: '/projects/BookTracker-Mockup.jpg',
    tags: ['React', 'JavaScript', 'Tailwind', 'Vite', 'REST API', 'CI/CD'],
    link: '',
    github: '',
  },
]

export default function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* BG Glows */}
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
        <div className='container mx-auto px-6 relative z-10'>
          {/* Section Header */}
          <div className='text-center mx-auto max-w-3xl mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
              Некоторые работы
            </span>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground text-balance'>
              Проекты,
              <span className='text-serif italic font-normal text-white'>
                {' '}
                в которых рождается опыт
              </span>
            </h2>
            <p className='text-muted-foreground animate-fade-in animation-delay-200'>
              Небольшая подборка моих работ, от первого опыта до крупных
              коллективных проектов, которые решают реальные задачи.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-30' />

                {/* Overlay Links */}
                {project.link && project.github && (
                  <div className='absolute inset-0 flex-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full glass hover:bg-primary hover:text-white transition-all'
                    >
                      <LuArrowUpRight size={25} />
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full glass hover:bg-primary hover:text-white transition-all'
                    >
                      <LuGithub size={25} />
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  {project.link && (
                    <LuArrowUpRight
                      size={20}
                      className='text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                    />
                  )}
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground 
                      hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            Все проекты
            <LuArrowUpRight size={20} />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
