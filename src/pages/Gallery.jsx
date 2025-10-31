import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX } from 'react-icons/hi'
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

const Gallery = () => {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const images = [
    { src: 'beluga.restaurant__1758128739_3723776223546725448_74561928675.jpg', category: 'ambiance', title: 'Sunset View' },
    { src: 'beluga.restaurant__1752861423_3679590769352002185_74561928675.jpg', category: 'interior', title: 'Elegant Dining' },
    { src: 'beluga.restaurant__1750505933_3659831489032066881_74561928675.jpg', category: 'food', title: 'Gourmet Dish' },
    { src: 'beluga.restaurant__1756477458_3709924270848906932_74561928675.jpg', category: 'food', title: 'Fresh Seafood' },
    { src: 'beluga.restaurant__1750622791_3660811767116275888_74561928675.jpg', category: 'food', title: 'Italian Pasta' },
    { src: 'beluga.restaurant__1752155854_3673672029859172468_74561928675.jpg', category: 'food', title: 'Dessert' },
    { src: 'beluga.restaurant__1756799562_3712626277154060394_74561928675.jpg', category: 'food', title: 'Signature Dish' },
    { src: 'beluga.restaurant__1751542901_3668530211655838539_74561928675.jpg', category: 'ambiance', title: 'Waterfront' },
    { src: 'beluga.restaurant__1751389246_3667241255303723309_74561928675.jpg', category: 'interior', title: 'Bar Area' },
    { src: 'beluga.restaurant__1751389246_3667241255303853794_74561928675.jpg', category: 'interior', title: 'Private Dining' },
    { src: 'beluga.restaurant__1752861423_3679590769368761731_74561928675.jpg', category: 'ambiance', title: 'Evening Atmosphere' },
    { src: 'beluga.restaurant__1751531164_3668431747047575215_74561928675.jpg', category: 'ambiance', title: 'Terrace View' },
    { src: 'beluga.restaurant__1750686627_3661347257666133338_74561928675.jpg', category: 'food', title: 'Appetizers' },
    { src: 'beluga.restaurant__1750454903_3659403422090254919_74561928675.jpg', category: 'food', title: 'Chef Special' },
    { src: 'beluga.restaurant__1750404223_3658978286623034340_74561928675.jpg', category: 'interior', title: 'Kitchen' },
    { src: 'beluga.restaurant__1752155854_3673672030144213989_74561928675.jpg', category: 'ambiance', title: 'Coastal View' },
    { src: 'beluga.restaurant__1751918779_3671683303628909216_74561928675.jpg', category: 'food', title: 'Wine Selection' },
    { src: 'beluga.restaurant__1761688023_3753633663293353250_74561928675.jpg', category: 'food', title: 'Fresh Catch' },
    { src: 'idea2group_events_1761497996_3752039595249504474_1689092482.jpg', category: 'events', title: 'Special Event' },
    { src: 'idea2group_events_1761497996_3752039595249523206_1689092482.jpg', category: 'events', title: 'Celebration' },
  ]

  const filters = [
    { id: 'all', label: language === 'sq' ? 'Të Gjitha' : language === 'it' ? 'Tutto' : 'All' },
    { id: 'food', label: language === 'sq' ? 'Ushqim' : language === 'it' ? 'Cibo' : 'Food' },
    { id: 'ambiance', label: language === 'sq' ? 'Ambiente' : language === 'it' ? 'Ambiente' : 'Ambiance' },
    { id: 'interior', label: language === 'sq' ? 'Brendësi' : language === 'it' ? 'Interni' : 'Interior' },
    { id: 'events', label: language === 'sq' ? 'Ngjarje' : language === 'it' ? 'Eventi' : 'Events' },
  ]

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/beluga.restaurant__1756799562_3712626277154060394_74561928675.jpg')`,
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
            {t('gallery.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-shadow"
          >
            {t('gallery.subtitle')}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gold-400 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gold-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gold-100'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-80"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={`/${image.src}`}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-gold-400 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <HiX />
            </button>
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/${selectedImage.src}`}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-serif font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h3 className="text-4xl font-serif font-bold mb-6">
              {language === 'sq' ? 'Jeni Gati të Përjetoni?' : language === 'it' ? 'Pronti a Vivere l\'Esperienza?' : 'Ready to Experience It?'}
            </h3>
            <p className="text-xl mb-8 text-ocean-100 max-w-2xl mx-auto">
              {language === 'sq' 
                ? 'Rezervoni tavolinën tuaj sot dhe krijoni kujtime të paharrueshme në Beluga Restaurant.' 
                : language === 'it' 
                ? 'Prenota il tuo tavolo oggi e crea ricordi indimenticabili al Beluga Restaurant.' 
                : 'Book your table today and create unforgettable memories at Beluga Restaurant.'}
            </p>
            <motion.a
              href="/reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              {t('nav.reservation')}
            </motion.a>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

export default Gallery
