import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/LOGO Beluga.jpg" 
                alt="Beluga Logo" 
                className="h-12 w-12 object-cover rounded-full"
              />
              <h3 className="text-2xl font-serif font-bold text-gold-400">Beluga</h3>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/beluga.restaurant_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              >
                <FaTripadvisor size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold-400">
              {t('contact.title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="text-gold-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  {t('contact.addressText')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-gold-400 flex-shrink-0" size={20} />
                <a href="tel:+355123456789" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  +355 69 310 6955
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="text-gold-400 flex-shrink-0" size={20} />
                <a href="mailto:info@belugarestaurant.al" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  info@belugarestaurant.al
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold-400">
              {t('contact.hours')}
            </h4>
            <p className="text-gray-400 mb-2">{t('contact.hoursText')}</p>
            <div className="mt-6">
              <Link
                to="/reservation"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                {t('nav.reservation')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Beluga Restaurant. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
