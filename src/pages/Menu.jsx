import { useState } from 'react'
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

const Menu = () => {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: language === 'sq' ? 'Aperitivë' : language === 'it' ? 'Antipasti' : 'Appetizers', icon: '🥗' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'seafood', name: language === 'sq' ? 'Peshk' : language === 'it' ? 'Pesce' : 'Seafood', icon: '🦞' },
    { id: 'meat', name: language === 'sq' ? 'Mish' : language === 'it' ? 'Carne' : 'Meat', icon: '🥩' },
    { id: 'desserts', name: language === 'sq' ? 'Ëmbëlsira' : language === 'it' ? 'Dolci' : 'Desserts', icon: '🍰' },
    { id: 'drinks', name: language === 'sq' ? 'Pije' : language === 'it' ? 'Bevande' : 'Drinks', icon: '🍷' },
  ]

  const menuItems = {
    appetizers: [
      { name: 'Burrata con Pomodori', description: 'Creamy burrata with cherry tomatoes, basil, and aged balsamic', price: '€12' },
      { name: 'Carpaccio di Manzo', description: 'Thinly sliced beef with arugula, parmesan, and truffle oil', price: '€16' },
      { name: 'Antipasto Misto', description: 'Selection of Italian cold cuts, cheeses, and marinated vegetables', price: '€18' },
      { name: 'Calamari Fritti', description: 'Crispy fried calamari with lemon aioli', price: '€14' },
    ],
    pasta: [
      { name: 'Spaghetti alle Vongole', description: 'Spaghetti with fresh clams, white wine, garlic, and parsley', price: '€18' },
      { name: 'Linguine al Nero di Seppia', description: 'Black squid ink linguine with seafood', price: '€22' },
      { name: 'Ravioli di Aragosta', description: 'Lobster ravioli in creamy saffron sauce', price: '€26' },
      { name: 'Pappardelle al Tartufo', description: 'Wide pasta ribbons with black truffle and porcini mushrooms', price: '€24' },
      { name: 'Risotto ai Frutti di Mare', description: 'Creamy seafood risotto with Adriatic catch', price: '€20' },
    ],
    seafood: [
      { name: 'Branzino al Forno', description: 'Whole roasted sea bass with herbs and lemon', price: '€32' },
      { name: 'Grigliata Mista di Pesce', description: 'Mixed grilled seafood platter for two', price: '€65' },
      { name: 'Astice alla Catalana', description: 'Catalan-style lobster with fresh vegetables', price: '€45' },
      { name: 'Orata al Sale', description: 'Sea bream baked in sea salt crust', price: '€28' },
      { name: 'Gamberoni alla Griglia', description: 'Grilled king prawns with garlic butter', price: '€34' },
    ],
    meat: [
      { name: 'Bistecca Fiorentina', description: 'T-bone steak (1kg) grilled to perfection', price: '€55' },
      { name: 'Ossobuco alla Milanese', description: 'Braised veal shanks with saffron risotto', price: '€28' },
      { name: 'Tagliata di Manzo', description: 'Sliced sirloin steak with arugula and parmesan', price: '€30' },
      { name: 'Agnello al Forno', description: 'Roasted lamb with rosemary and roasted vegetables', price: '€32' },
    ],
    desserts: [
      { name: 'Tiramisù Classico', description: 'Traditional Italian coffee dessert', price: '€8' },
      { name: 'Panna Cotta', description: 'Vanilla cream with berry coulis', price: '€7' },
      { name: 'Cannoli Siciliani', description: 'Crispy pastry tubes filled with sweet ricotta', price: '€9' },
      { name: 'Affogato', description: 'Vanilla gelato drowned in espresso', price: '€7' },
      { name: 'Torta al Cioccolato', description: 'Rich chocolate cake with salted caramel', price: '€10' },
    ],
    drinks: [
      { name: 'Prosecco DOC', description: 'Italian sparkling wine', price: '€35' },
      { name: 'Chianti Classico', description: 'Red wine from Tuscany', price: '€45' },
      { name: 'Pinot Grigio', description: 'Crisp white wine', price: '€38' },
      { name: 'Aperol Spritz', description: 'Classic Italian aperitivo', price: '€10' },
      { name: 'Limoncello', description: 'Traditional lemon liqueur', price: '€6' },
    ],
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/beluga.restaurant__1750454903_3659403422090254919_74561928675.jpg')`,
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
            {t('nav.menu')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-shadow"
          >
            {language === 'sq' ? 'Një Udhëtim Shijesh Mesdhetare' : language === 'it' ? 'Un Viaggio di Sapori Mediterranei' : 'A Journey of Mediterranean Flavors'}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gold-400 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-beige-50 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gold-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gold-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-500 mb-12 text-center">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
            </FadeInSection>

            <div className="space-y-8">
              {menuItems[activeCategory].map((item, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-beige-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-serif font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-gold-500 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Notice */}
      <section className="py-16 bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h3 className="text-3xl font-serif font-bold mb-4">
              {language === 'sq' ? 'Menuja Speciale Ditore' : language === 'it' ? 'Menu Speciale del Giorno' : 'Daily Special Menu'}
            </h3>
            <p className="text-xl mb-6 text-ocean-100">
              {language === 'sq' 
                ? 'Pyesni kamarjerin tonë për specialitetet e freskëta të ditës' 
                : language === 'it' 
                ? 'Chiedi al nostro cameriere per le specialità fresche del giorno' 
                : 'Ask our waiter about today\'s fresh specials'}
            </p>
            <p className="text-lg text-ocean-200">
              * {language === 'sq' ? 'Të gjitha pjatat përgatiten me produkte të freskëta lokale' : language === 'it' ? 'Tutti i piatti sono preparati con prodotti locali freschi' : 'All dishes are prepared with fresh local ingredients'}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Wine List Banner */}
      <section className="py-24 bg-beige-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <div className="text-6xl mb-6">🍷</div>
              <h3 className="text-4xl font-serif font-bold text-ocean-500 mb-4">
                {language === 'sq' ? 'Lista Jonë e Verërave' : language === 'it' ? 'La Nostra Carta dei Vini' : 'Our Wine Selection'}
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                {language === 'sq' 
                  ? 'Zbuloni koleksionin tonë të kujdesur të verërave italiane dhe ndërkombëtare' 
                  : language === 'it' 
                  ? 'Scopri la nostra collezione curata di vini italiani e internazionali' 
                  : 'Discover our curated collection of Italian and international wines'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                {language === 'sq' ? 'Shiko Listën e Plotë të Verërave' : language === 'it' ? 'Vedi la Carta dei Vini Completa' : 'View Full Wine List'}
              </motion.button>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
