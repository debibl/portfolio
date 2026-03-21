import { LuArrowUpRight, LuGithub } from 'react-icons/lu'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: '"Femme FatalERROR" Games',
    description:
      'Командный проект, реализованный в рамках учебной практики: сборник браузерных игр, объединённых темой программирования. В команде из 6 человек выступала в роли тимлида — координировала работу участников и организовывала процессы. Отвечала за разработку ключевых частей проекта: создала макет и верстку главной страницы, реализовала игру «Виселица», а также настроила деплой и CI/CD (GitHub Actions).',
    image: '/projects/PracticeGames-Mockup.jpg',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'UI/UX',
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
      'Финальный командный проект в рамках учебной практики: разработка набора продуктов для генерации и кастомизации QR-кодов (лендинг, браузерное расширение и Telegram-бот). В команде выполняла роль тимлида: координировала участников и организовывала работу. Отвечала за дизайн всех продуктов (Figma) и полностью разработала браузерное расширение (логика, UI/UX, интеграция с API).',
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
      'UI/UX',
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
      'Пет-проект для управления списком книг: позволяет отслеживать, редактировать и структурировать личную библиотеку, включая фильтрацию по статусу (прочитано / в процессе / планируется) и случайный выбор книг. При разработке уделила внимание UX, структуре данных и удобству взаимодействия с интерфейсом. Планируется дальнейшее развитие и публикация проекта.',
    image: '/projects/BookTracker-Mockup.jpg',
    tags: [
      'React',
      'JavaScript',
      'Tailwind',
      'Vite',
      'UI/UX',
      'REST API',
      'CI/CD',
    ],
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
              Небольшая подборка моих проектов - от учебных задач до командных
              решений с практическим смыслом.
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
                  <div className='hidden lg:block'>
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
          <a
            href='https://github.com/debibl'
            alt='github page'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AnimatedBorderButton>
              Все проекты
              <LuArrowUpRight size={20} />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}
