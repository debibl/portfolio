const experiences = [
  {
    period: 'Сентябрь 2022 - Июнь 2025',
    role: 'Студент',
    company: 'АНПОО "Хекслет Колледж"',
    description:
      'Обучалась по специальности 09.02.07 «Информационные системы и программирование» с упором на практическую разработку. В процессе участвовала в проектах, хакатонах и стажировках, работала с реальными задачами и командным взаимодействием. В июне 2025 года окончила колледж с красным дипломом и максимальным баллом на демонстрационном экзамене WorldSkills.',
    technologies: [
      'CSS3',
      'HTML5',
      'JavaScript',
      'PostgreSQL',
      'Docker',
      'React',
      'UI/UX',
      'DevOps',
    ],
    current: false,
  },
  {
    period: 'Январь 2025 - Май 2025',
    role: 'Стажер',
    company: 'АО "Эдутех Групп"',
    description:
      'Разрабатывала Telegram-бота для клиентского сервиса: реализовала бизнес-логику, работу с API и базой данных. Участвовала в развитии функциональности продукта и предлагала улучшения. Настроила инфраструктуру и процессы разработки: деплой в облаке, CI/CD и автоматизацию релизов. Взяла на себя организацию командной работы - внедрила pull request-процессы и координацию задач через Jira.',
    technologies: [
      'Node.js',
      'Telegram API',
      'Telegraf',
      'Yandex Cloud',
      'PostgreSQL',
      'CI/CD',
      'Docker',
      'Github Actions',
      'Jira',
      'Ansible',
      'Nginx',
      'Jest',
    ],
    current: false,
  },
  {
    period: 'Июль 2025 - Текущее время',
    role: 'Фриланс-разработчик',
    company: '',
    description:
      'Занимаюсь разработкой лендингов и небольших веб-приложений на заказ. Веду полный цикл работы: от уточнения требований и структуры страницы до реализации и развертывания проекта.\nВзаимодействую с заказчиками: помогаю формализовать задачи, предлагаю технические решения и оптимальные подходы к реализации. В работе учитываю адаптивность, базовую SEO-оптимизацию и производительность (в том числе через Lighthouse). Использую современные инструменты разработки: работаю с Git, настраиваю деплой, интегрирую API и уделяю внимание качеству и стабильности интерфейсов.',
    technologies: [
      'React',
      'Node.js',
      'Tailwind',
      'JavaScript',
      'UI/UX',
      'Figma',
      'Docker',
      'VPS',
      'CI/CD',
    ],
    current: true,
  },
]

export default function Experience() {
  return (
    <section id='experience' className='py-30 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full  blur-3xl -translate-y-1/2' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='mx-w-3xl mb-16'>
          <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              Карьерный путь
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100  text-secondary-foreground text-balance'>
            Опыт,
            <span className='text-serif italic font-normal text-white'>
              {' '}
              создающий результат
            </span>
          </h2>
          <p className='my-2 text-muted-foreground animate-fade-in animation-delay-200 max-w-3xl'>
            Путь моего профессионального развития, от учебных проектов до
            стажировок и первых коммерческих задач.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div
            className='timeline-glow absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 
          bg-linear-to-b from-primary/10 via-primary/30 to-transparent
          lg:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'
          />

          {/* Experience Items */}
          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='relative grid lg:grid-cols-2 gap-8 animate-fade-in'
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className='absolute lef-0 lg:left-1/2 top-0 size-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {exp.current && (
                    <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75' />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 lg:pl-0 ${
                    index % 2 === 0
                      ? 'lg:pr-16 lg:text-right'
                      : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className='text-sm text-primary font-medium'>
                      {exp.period}
                    </span>
                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                    {exp.company && (
                      <p className='text-muted-foreground'>{exp.company}</p>
                    )}
                    <p className='text-sm text-muted-foreground mt-4 text-balance text-left'>
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
