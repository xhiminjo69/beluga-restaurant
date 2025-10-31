# 🐋 Beluga Restaurant Website

A luxurious, modern, and fully responsive website for **Beluga Restaurant** - an Italian fine-dining establishment located on the stunning Vlora seafront, overlooking the Adriatic Sea in Albania.

## ✨ Features

### 🎨 Design
- **Elegant Mediterranean Theme**: Warm beige tones, white, gold accents, and ocean blues
- **Luxury Typography**: Playfair Display (serif) for headings, Montserrat (sans-serif) for body text
- **Smooth Animations**: Framer Motion for scroll, fade-in, hover, and parallax effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, intuitive navigation with sticky header

### 🌍 Multi-Language Support
- 🇦🇱 **Albanian** (default)
- 🇮🇹 **Italian**
- 🇬🇧 **English**
- Easy language switching in navigation bar

### 📄 Pages

#### 1. **Home (Landing Page)**
Six visually distinct sections:
- **Hero Section**: Full-screen Adriatic sunset background with restaurant name and CTAs
- **About Section**: Brief introduction with interior images and values
- **Reservation Section**: Elegant booking form (name, email, phone, date, time, guests)
- **Gallery Section**: Beautiful grid of restaurant and food photos
- **Reviews Section**: Customer testimonials with star ratings
- **Contact Section**: Google Maps integration + contact form

#### 2. **About Page**
- Full restaurant story and philosophy
- Mediterranean culinary experience showcase
- Core values (Freshness, Excellence, Hospitality)
- Meet the team section
- Location highlights with statistics

#### 3. **Menu Page**
- Interactive category filtering (Appetizers, Pasta, Seafood, Meat, Desserts, Drinks)
- Detailed menu items with descriptions and prices
- Daily specials section
- Wine selection showcase

#### 4. **Gallery Page**
- Advanced image filtering (All, Food, Ambiance, Interior, Events)
- Lightbox modal for full-size image viewing
- Masonry grid layout with smooth animations
- Call-to-action for reservations

#### 5. **Contact Page**
- Contact information cards (Address, Phone, Email, Hours)
- Interactive Google Maps embed
- Contact form with validation
- Social media links (Facebook, Instagram, TripAdvisor)

#### 6. **Reservation Page**
- Comprehensive booking form
- Time slot selection
- Guest count options (1-20)
- Special requests textarea
- Success confirmation screen
- Important booking notes sidebar

## 🛠️ Technologies

- **React 18**: Modern JavaScript library for building user interfaces
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library
- **React Intersection Observer**: Scroll animations
- **Vite**: Fast build tool and dev server

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
beluga.restaurant_/
├── public/
│   ├── LOGO Beluga.jpg
│   └── [restaurant images...]
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Fixed navigation bar with language selector
│   │   └── Footer.jsx           # Footer with links and social media
│   ├── context/
│   │   └── LanguageContext.jsx # Multi-language state management
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with 6 sections
│   │   ├── About.jsx           # Full about page
│   │   ├── Menu.jsx            # Interactive menu with categories
│   │   ├── Gallery.jsx         # Image gallery with filtering
│   │   ├── Contact.jsx         # Contact page with map & form
│   │   └── Reservation.jsx     # Reservation booking page
│   ├── translations.js         # Multi-language content
│   ├── App.jsx                 # Main app component with routes
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Color Palette

- **Beige**: #faf8f5 → #b89978 (warm tones)
- **Ocean Blue**: #e6f3f7 → #0087b1 (sea-inspired)
- **Gold**: #d4af37 → #b69121 (luxury accents)
- **Neutral**: White, grays for text and backgrounds

## 🖼️ Image Placeholders

All images are currently using your provided restaurant photos. To update:

1. Place new images in the `public/` folder
2. Update image paths in component files
3. Supported formats: JPG, PNG, WebP

### Recommended Images:
- **Hero Background**: Adriatic sunset view (1920x1080+)
- **About Section**: Interior, chef in action (1200x800)
- **Gallery**: Mix of food, ambiance, interior shots (800x600+)
- **Contact/Reservation**: Waterfront or terrace views

## 🌐 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and keywords in `index.html`
- Open Graph tags ready for social sharing
- Fast loading with optimized images
- Accessible navigation and forms

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🎭 Animations

- **Scroll Animations**: Fade-in on scroll using Intersection Observer
- **Hover Effects**: Scale and color transitions on buttons and images
- **Page Transitions**: Smooth route changes
- **Parallax**: Background images move at different speeds
- **Mobile Menu**: Slide-in animation with backdrop

## 🔧 Customization

### Change Colors:
Edit `tailwind.config.js` theme colors

### Update Content:
Modify `src/translations.js` for all language content

### Add New Pages:
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

### Modify Menu Items:
Edit the `menuItems` object in `src/pages/Menu.jsx`

## 📞 Contact Information (Update in Code)

Current placeholders in the code:
- **Phone**: +355 123 456 789
- **Email**: info@belugarestaurant.al
- **Address**: Vlora Waterfront, Seafront, Vlora, Albania
- **Hours**: Monday - Sunday: 12:00 PM - 11:00 PM

Update these in:
- `src/translations.js`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 🚀 Deployment

### Option 1: Netlify (Recommended)
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Option 2: Vercel
```bash
npm run build
vercel --prod
```

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server

## 📝 Notes

- The Tailwind CSS warnings in the IDE are normal and will resolve when the project runs
- Forms are front-end only - integrate with backend API for actual reservations
- Google Maps embed uses a placeholder URL - update with your actual location
- All phone numbers and emails are placeholders

## 🎯 Future Enhancements

- [ ] Backend integration for reservations
- [ ] Email notification system
- [ ] Online ordering system
- [ ] Customer reviews integration (Google, TripAdvisor API)
- [ ] Blog section for news and events
- [ ] Newsletter signup
- [ ] Payment gateway integration
- [ ] Admin dashboard for managing reservations

## 📄 License

© 2024 Beluga Restaurant. All rights reserved.

---

**Built with ❤️ for Beluga Restaurant**

*Italian Fine Dining on the Adriatic*
