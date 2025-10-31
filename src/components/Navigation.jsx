import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const languages = [
    { code: 'sq', flag: '🇦🇱', name: 'Shqip' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/LOGO Beluga.jpg" 
              alt="Beluga Logo" 
              className="h-12 w-12 object-cover rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : isScrolled
                    ? 'text-gray-700 hover:text-gold-500'
                    : 'text-white hover:text-gold-400 text-shadow'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              to="/reservation"
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              {t('nav.reservation')}
            </Link>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-2xl transition-all duration-300 ${
                    language === lang.code
                      ? 'scale-110 opacity-100'
                      : 'scale-90 opacity-50 hover:opacity-80'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden text-3xl ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 font-medium ${
                      location.pathname === link.path
                        ? 'text-gold-500'
                        : 'text-gray-700 hover:text-gold-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <Link
                  to="/reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-full font-medium text-center"
                >
                  {t('nav.reservation')}
                </Link>

                <div className="flex items-center justify-center space-x-4 px-4 pt-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`text-3xl transition-all duration-300 ${
                        language === lang.code
                          ? 'scale-110 opacity-100'
                          : 'scale-90 opacity-50'
                      }`}
                      title={lang.name}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
