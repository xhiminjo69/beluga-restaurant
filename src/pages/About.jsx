import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

const About = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/beluga.restaurant__1751389246_3667241255303853794_74561928675.jpg')`,
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
            {t('about.title')}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gold-400 mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-500 mb-8 text-center">
                {t('about.heading')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>{t('about.description')}</p>
                <p>{t('about.story1')}</p>
                <p>{t('about.story2')}</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-beige-50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-500 mb-16 text-center">
              {t('about.valuesTitle')}
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🌊</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">{t('about.values.freshness.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.values.freshness.description')}
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">👨‍🍳</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">{t('about.values.excellence.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.values.excellence.description')}
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">❤️</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">{t('about.values.hospitality.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.values.hospitality.description')}
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInSection>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-500 mb-6">
                  {t('about.locationTitle')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('about.location1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('about.location2')}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center p-4 bg-beige-100 rounded-lg">
                    <p className="text-3xl font-bold text-ocean-500">360°</p>
                    <p className="text-sm text-gray-600">{t('about.stats.seaViews')}</p>
                  </div>
                  <div className="text-center p-4 bg-beige-100 rounded-lg">
                    <p className="text-3xl font-bold text-ocean-500">200+</p>
                    <p className="text-sm text-gray-600">{t('about.stats.seats')}</p>
                  </div>
                  <div className="text-center p-4 bg-beige-100 rounded-lg">
                    <p className="text-3xl font-bold text-ocean-500">5★</p>
                    <p className="text-sm text-gray-600">{t('about.stats.rating')}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/beluga.restaurant__1752155854_3673672030144213989_74561928675.jpg"
                  alt="Restaurant View"
                  className="rounded-lg shadow-xl"
                />
                <img
                  src="/beluga.restaurant__1752861423_3679590769368761731_74561928675.jpg"
                  alt="Dining Area"
                  className="rounded-lg shadow-xl mt-8"
                />
                <img
                  src="/beluga.restaurant__1751531164_3668431747047575215_74561928675.jpg"
                  alt="Terrace"
                  className="rounded-lg shadow-xl -mt-8"
                />
                <img
                  src="/beluga.restaurant__1750686627_3661347257666133338_74561928675.jpg"
                  alt="Interior"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
