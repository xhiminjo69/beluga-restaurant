import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCalendar, HiClock, HiUserGroup, HiCheckCircle } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

const Reservation = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `🍽️ *New Reservation Request - Beluga Restaurant*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `👥 *Guests:* ${formData.guests}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `🕐 *Time:* ${formData.time}%0A` +
      `📝 *Special Requests:* ${formData.message || 'None'}`
    
    const whatsappUrl = `https://wa.me/355693106955?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      })
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/beluga.restaurant__1752155854_3673672030144213989_74561928675.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-serif font-bold mb-4 text-shadow-lg"
          >
            {t('reservation.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-shadow"
          >
            {t('reservation.subtitle')}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gold-400 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {submitted ? (
              <FadeInSection>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="bg-white rounded-2xl shadow-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <HiCheckCircle className="text-white text-6xl" />
                  </motion.div>
                  <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                    {t('reservation.confirmationTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {t('reservation.confirmationMessage')}
                  </p>
                  <div className="bg-beige-50 rounded-lg p-6 max-w-md mx-auto">
                    <h3 className="font-semibold text-gray-800 mb-4">{t('reservation.reservationDetails')}</h3>
                    <div className="space-y-2 text-left">
                      <p><strong>{t('reservation.name')}:</strong> {formData.name}</p>
                      <p><strong>{t('reservation.date')}:</strong> {formData.date}</p>
                      <p><strong>{t('reservation.time')}:</strong> {formData.time}</p>
                      <p><strong>{t('reservation.guests')}:</strong> {formData.guests}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    {t('reservation.anotherReservation')}
                  </motion.button>
                </motion.div>
              </FadeInSection>
            ) : (
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Form */}
                <div className="lg:col-span-3">
                  <FadeInSection>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                        {t('reservation.title')}
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            {t('reservation.name')} *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              {t('reservation.email')} *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              {t('reservation.phone')} *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                              placeholder="+355 69 310 6955"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              {t('reservation.date')} *
                            </label>
                            <div className="relative">
                              <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                              />
                              <HiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              {t('reservation.guests')} *
                            </label>
                            <div className="relative">
                              <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                              >
                                {[...Array(20)].map((_, i) => (
                                  <option key={i + 1} value={i + 1}>
                                    {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                                  </option>
                                ))}
                              </select>
                              <HiUserGroup className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            {t('reservation.time')} *
                          </label>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {timeSlots.map((time) => (
                              <label
                                key={time}
                                className={`cursor-pointer transition-all duration-300 ${
                                  formData.time === time
                                    ? 'bg-gold-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gold-100'
                                } px-3 py-2 rounded-lg text-center font-medium text-sm`}
                              >
                                <input
                                  type="radio"
                                  name="time"
                                  value={time}
                                  checked={formData.time === time}
                                  onChange={handleChange}
                                  required
                                  className="hidden"
                                />
                                {time}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            {t('reservation.message')}
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors resize-none"
                            placeholder="Any special requests or dietary requirements?"
                          ></textarea>
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:shadow-xl"
                        >
                          {t('reservation.submit')}
                        </motion.button>

                        <p className="text-center text-gray-600 text-sm">
                          * Required fields
                        </p>
                      </form>
                    </div>
                  </FadeInSection>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-2">
                  <FadeInSection delay={0.3}>
                    <div className="space-y-6 sticky top-32">
                      {/* Contact Info */}
                      <div className="bg-gradient-to-br from-ocean-500 to-ocean-600 text-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-serif font-bold mb-6">Need Help?</h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <HiClock className="text-gold-400 mt-1 flex-shrink-0" size={24} />
                            <div>
                              <p className="font-semibold mb-1">{t('contact.hours')}</p>
                              <p className="text-ocean-100 text-sm">{t('contact.hoursText')}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <svg className="text-gold-400 mt-1 flex-shrink-0" width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <div>
                              <p className="font-semibold mb-1">Call Us</p>
                              <a href="tel:+355123456789" className="text-ocean-100 hover:text-white text-sm">
                                +355 69 310 6955
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Special Notes */}
                      <div className="bg-beige-50 rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Important Notes</h3>
                        <ul className="space-y-3 text-gray-600 text-sm">
                          {t('reservation.reservationTips', { returnObjects: true }).map((tip, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-gold-500 mr-2">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Image */}
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src="/beluga.restaurant__1750622791_3660811767116332896_74561928675.jpg"
                          alt="Restaurant Ambiance"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-ocean-500 mb-16 text-center">
              Why Dine at Beluga?
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌊</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Stunning Views</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dine with panoramic views of the Adriatic Sea and watch breathtaking sunsets from your table.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Master Chefs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience authentic Italian cuisine prepared by our award-winning culinary team.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-beige-400 to-beige-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🐟</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Fresh Seafood</h3>
                <p className="text-gray-600 leading-relaxed">
                  Daily catch from the Adriatic, delivered fresh to your plate with unmatched quality.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reservation
