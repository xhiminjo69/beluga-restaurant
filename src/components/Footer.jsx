import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'
import { getAssetUrl } from '../utils/getAssetUrl'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={getAssetUrl('LOGO Beluga.jpg')} 
                alt="Beluga Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
              />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold-400">Beluga</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
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
            <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-gold-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm sm:text-base">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm sm:text-base">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm sm:text-base">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm sm:text-base">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm sm:text-base">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-gold-400">
              {t('contact.title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="text-gold-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-xs sm:text-sm">
                  {t('contact.addressText')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-gold-400 flex-shrink-0" size={18} />
                <a href="tel:+355693106955" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-xs sm:text-sm">
                  +355 69 310 6955
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="text-gold-400 flex-shrink-0" size={18} />
                <a href="mailto:info@belugarestaurant.al" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-xs sm:text-sm break-all">
                  info@belugarestaurant.al
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-gold-400">
              {t('contact.hours')}
            </h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{t('contact.hoursText')}</p>
            <div className="mt-4 sm:mt-6">
              <Link
                to="/reservation"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              >
                {t('nav.reservation')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Beluga Restaurant. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
