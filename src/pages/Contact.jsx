import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
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

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `📩 *New Contact Message - Beluga Restaurant*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📝 *Message:* ${formData.message}`
    
    const whatsappUrl = `https://wa.me/355693106955?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/beluga.restaurant__1751531164_3668431747047575215_74561928675.jpg')`,
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
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-shadow"
          >
            {t('contact.subtitle')}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gold-400 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-beige-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FadeInSection delay={0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiLocationMarker className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {t('contact.address')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.addressText')}
                </p>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPhone className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {t('contact.phoneLabel')}
                </h3>
                <a href="tel:+355123456789" className="text-ocean-500 hover:text-ocean-600 font-medium mb-2 block">
                  +355 69 310 6955
                </a>
                <a
                  href="https://wa.me/355693106955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t('contact.whatsapp')}
                </a>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiMail className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {t('contact.emailUs')}
                </h3>
                <a href="mailto:info@belugarestaurant.al" className="text-ocean-500 hover:text-ocean-600 font-medium break-all">
                  info@belugarestaurant.al
                </a>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiClock className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {t('contact.hours')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.hoursText')}
                </p>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Map */}
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-serif font-bold text-ocean-500 mb-8">
                  {t('contact.findUs')}
                </h2>
                <div className="h-[500px] rounded-xl overflow-hidden shadow-2xl mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.841103890928!2d19.471239!3d40.45665369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134531249909e52f%3A0xaa1c17dc7b1c4678!2sBeluga%20Restaurant%20%26%20Bar%20%26%20Brunch!5e0!3m2!1sen!2s!4v1761919208901!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beluga Restaurant Location"
                  ></iframe>
                </div>

                {/* Social Media */}
                <div className="bg-beige-50 rounded-xl p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6 text-center">
                    {t('footer.followUs')}
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <FaFacebook size={28} />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/beluga.restaurant_"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <FaInstagram size={28} />
                    </motion.a>
                    <motion.a
                      href="https://tripadvisor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <FaTripadvisor size={28} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={0.3}>
              <div>
                <h2 className="text-4xl font-serif font-bold text-ocean-500 mb-8">
                  {t('contact.formTitle')}
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6"
                  >
                    {t('contact.success')}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder={t('contact.name')}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder={t('contact.email')}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder={t('contact.message')}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    {t('contact.send')}
                  </motion.button>
                </form>

                <div className="mt-8 p-6 bg-ocean-50 rounded-lg border-l-4 border-ocean-500">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('contact.urgentInquiry', 'For immediate assistance or urgent inquiries, please call us directly at')}{' '}
                    <a href="tel:+355693106955" className="text-ocean-600 font-semibold hover:underline">
                      +355 69 310 6955
                    </a>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-ocean-500 mb-8">
              {t('reservation.ctaTitle', 'Ready to Dine with Us?')}
            </h2>
            <p className="text-xl mb-8 text-ocean-100 max-w-2xl mx-auto">
              {t('reservation.ctaSubtitle', 'Reserve your table now and experience the finest Italian cuisine on the Adriatic coast.')}
            </p>
            <motion.a
              href="/reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              {t('nav.reservation')}
            </motion.a>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

export default Contact
