import {
  LuCircleAlert,
  LuCircleCheck,
  LuMail,
  LuMapPin,
  LuSendHorizontal,
} from 'react-icons/lu'
import { PiTelegramLogo } from 'react-icons/pi'
import Button from '@/components/Button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  {
    icon: LuMail,
    label: 'Email',
    value: 'v.miryan@ya.ru',
    href: 'mailto:v.miryan@ya.ru',
  },
  {
    icon: PiTelegramLogo,
    label: 'Telegram',
    value: '@hipoori',
    href: 'https://t.me/hipoori',
  },
  {
    icon: LuMapPin,
    label: 'Местоположение',
    value: 'Санкт-Петербург, Россия',
    href: '#contact',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      console.log('test')

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.',
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      )

      setSubmitStatus({
        type: 'success',
        message: 'Письмо отправлено! Я свяжусь с вами, как только смогу.',
      })
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.log('EmailJS error: ', error)
      setSubmitStatus({
        type: 'error',
        message:
          error.text ||
          'Не получилось отправить письмо. Пожалуйста, попробуйте позже.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Связаться со мной
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Давайте работать
            <span className='italic font-normal text-white text-serif'>
              {' '}
              вместе
            </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Рассматриваю возможности для профессионального развития. Оставьте
            сообщение ниже - обсудим, как я могу быть полезна вашей команде.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  Имя
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='Ваше имя...'
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }}
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border 
                  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='ваша@почта.ru'
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }}
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border 
                  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  Сообщение
                </label>
                <textarea
                  id='message'
                  rows={5}
                  placeholder='Ваше сообщение...'
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }}
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border 
                  focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                  transition-all resize-none'
                />
              </div>

              <Button
                className='w-full'
                type='submit'
                size='lg'
                disable={isLoading.toString()}
              >
                {isLoading ? (
                  <>Письмо отправляется...</>
                ) : (
                  <>
                    Отправить <LuSendHorizontal size={20} />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex item-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <LuCircleCheck size={20} className='shrink-0' />
                  ) : (
                    <LuCircleAlert size={20} className='shrink-0' />
                  )}
                  <p className='text-sm'>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-6 animate-fade-in animation-delay-400'>
            <div className='glass rounded-3xl p-8'>
              <h3 className='text-xl font-semibold mb-6'>
                Контактная информация
              </h3>
              <div className='space-y-4'>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group'
                  >
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <item.icon className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <div className='text-sm text-muted-foreground'>
                        {item.label}
                      </div>
                      <div className='font-medium'>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className='glass rounded-3xl p-8 border border-primary/30'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium'>Доступна для найма</span>
              </div>
              <p className='text-muted-foreground text-sm'>
                В настоящее время я открыта для новых возможностей и интересных
                проектов. Если вам нужен разработчик на полную ставку или
                коллега в команду проекта, буду рада пообщаться с вами!
              </p>
            </div>
          </div>
        </div>

        {/* End */}
      </div>
    </section>
  )
}
