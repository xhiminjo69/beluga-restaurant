import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { HiStar } from 'react-icons/hi'
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

const Home = () => {
  const { t } = useLanguage()

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const message = `🍽️ *New Reservation Request - Beluga Restaurant*%0A%0A` +
      `👤 *Name:* ${formData.get('name')}%0A` +
      `📧 *Email:* ${formData.get('email')}%0A` +
      `📞 *Phone:* ${formData.get('phone')}%0A` +
      `👥 *Guests:* ${formData.get('guests')}%0A` +
      `📅 *Date:* ${formData.get('date')}%0A` +
      `🕐 *Time:* ${formData.get('time')}%0A` +
      `📝 *Special Requests:* ${formData.get('message') || 'None'}`
    
    const whatsappUrl = `https://wa.me/355693106955?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const message = `📩 *New Contact Message - Beluga Restaurant*%0A%0A` +
      `👤 *Name:* ${formData.get('name')}%0A` +
      `📧 *Email:* ${formData.get('email')}%0A` +
      `📝 *Message:* ${formData.get('message')}`
    
    const whatsappUrl = `https://wa.me/355693106955?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/beluga.restaurant__1748538995_3643331619848936385_74561928675.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-12 text-shadow">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/menu"
              className="bg-white text-ocean-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.viewMenu')}
            </Link>
            <Link
              to="/reservation"
              className="bg-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.makeReservation')}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-beige-50">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/beluga.restaurant__1751389246_3667241255303723309_74561928675.jpg')`,
          }}
        ></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-ocean-500 mb-4">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="relative">
                <img
                  src="/beluga.restaurant__1752861423_3679590769352002185_74561928675.jpg"
                  alt="Restaurant Interior"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-lg shadow-xl">
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div>
                <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
                  {t('about.heading')}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('about.description')}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-3xl mb-2">⭐</div>
                    <p className="text-sm font-semibold text-gray-700">{t('about.experience')}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-3xl mb-2">🍽️</div>
                    <p className="text-sm font-semibold text-gray-700">{t('about.quality')}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-3xl mb-2">👨‍🍳</div>
                    <p className="text-sm font-semibold text-gray-700">{t('about.service')}</p>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-block bg-ocean-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-ocean-600 transition-all duration-300 transform hover:scale-105"
                >
                  {t('nav.about')} →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/beluga.restaurant__1748541150_3643349695873120675_74561928675.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-500/90 to-ocean-600/90"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center text-white mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                {t('reservation.title')}
              </h2>
              <p className="text-xl text-ocean-100">
                {t('reservation.subtitle')}
              </p>
              <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder={t('reservation.name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder={t('reservation.email')}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder={t('reservation.phone')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.guests')}
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="20"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.date')}
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('reservation.time')}
                    </label>
                    <input
                      type="time"
                      name="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('reservation.message')}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder={t('reservation.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t('reservation.submit')}
                </button>
              </form>

              <p className="text-center text-gray-600 mt-6">
                {t('contact.phone')}: <a href="tel:+355123456789" className="text-ocean-500 font-semibold hover:text-ocean-600">+355 69 310 6955</a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-ocean-500 mb-4">
                {t('gallery.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('gallery.subtitle')}
              </p>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'beluga.restaurant__1750505933_3659831489032066881_74561928675.jpg',
              'beluga.restaurant__1756477458_3709924270848906932_74561928675.jpg',
              'beluga.restaurant__1750622791_3660811767116275888_74561928675.jpg',
              'beluga.restaurant__1752155854_3673672029859172468_74561928675.jpg',
              'beluga.restaurant__1756799562_3712626277154060394_74561928675.jpg',
              'beluga.restaurant__1751542901_3668530211655838539_74561928675.jpg',
            ].map((image, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
                >
                  <img
                    src={`/${image}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center">
              <Link
                to="/gallery"
                className="inline-block bg-ocean-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-ocean-600 transition-all duration-300 transform hover:scale-105"
              >
                {t('gallery.title')} →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/idea2group_events_1761497996_3752039595325022057_1689092482.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-beige-100/80 to-beige-200/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-ocean-500 mb-4">
                {t('reviews.title')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { review: t('reviews.review1'), author: t('reviews.author1') },
              { review: t('reviews.review2'), author: t('reviews.author2') },
              { review: t('reviews.review3'), author: t('reviews.author3') },
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-xl p-8 relative"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-gold-500 text-2xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">Verified Guest</p>
                    </div>
                  </div>
                  <div className="absolute top-6 right-8 text-6xl text-gold-200 font-serif">"</div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-ocean-500 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('contact.subtitle')}
              </p>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
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
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                  {t('contact.formTitle')}
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contact.name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contact.email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder={t('contact.message')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {t('contact.send')}
                  </button>
                </form>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-gold-500 mt-1">📍</div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.address')}</p>
                      <p className="text-gray-600">{t('contact.addressText')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-gold-500 mt-1">📞</div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.phone')}</p>
                      <a href="tel:+355123456789" className="text-ocean-500 hover:text-ocean-600">
                        +355 69 310 6955
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-gold-500 mt-1">✉️</div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.emailLabel')}</p>
                      <a href="mailto:info@belugarestaurant.al" className="text-ocean-500 hover:text-ocean-600">
                        info@belugarestaurant.al
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
