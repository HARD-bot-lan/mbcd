# TechConnect Summit - Dynamic Event Landing Page

A modern, responsive event landing page built with React, TypeScript, and Tailwind CSS. This application showcases annual technology conferences with support for multiple editions, past event archives, and comprehensive event management features.

## 🚀 Features

### Core Functionality
- **Multi-Edition Support**: Dynamic routing for different event years (2022, 2023, 2024, 2025)
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Fast Loading**: Optimized performance with lazy loading and efficient rendering

### Event Management
- **Edition Navigation**: Dropdown menu to switch between different event editions
- **Status Indicators**: Clear visual distinction between past, current, and upcoming editions
- **Automatic Redirects**: Homepage redirects to current edition
- **Archive System**: Complete past editions with media content

### Interactive Components
- **Countdown Timer**: Real-time countdown to event start
- **Registration System**: Multi-step registration form (UI only, no payment integration)
- **Interactive Agenda**: Filterable schedule with timeline view
- **Speaker Profiles**: Professional speaker showcase with social links
- **Committee Display**: Organized committee member information
- **Partner Showcase**: Partnership tiers and collaboration opportunities

### Media & Content
- **Past Editions Gallery**: Images and videos from previous events
- **Media Modal**: Full-screen media viewer for images and videos
- **Social Media Integration**: Links to all social platforms
- **Newsletter Signup**: Email subscription functionality
- **Contact Information**: Direct contact options

### User Experience
- **Smooth Scrolling**: Seamless navigation between sections
- **Animations**: Framer Motion animations for enhanced UX
- **Loading States**: Proper loading indicators and transitions
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # Event description and highlights
│   ├── Agenda.tsx      # Interactive schedule
│   ├── Committee.tsx   # Committee member display
│   ├── CountdownTimer.tsx # Event countdown
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Newsletter.tsx  # Newsletter signup
│   ├── Partners.tsx    # Partner showcase
│   ├── PastEditions.tsx # Past events gallery
│   ├── Registration.tsx # Registration form
│   └── Speakers.tsx    # Speaker profiles
├── data/
│   └── eventData.ts    # Event data and configurations
├── pages/
│   └── EventPage.tsx   # Main event page component
├── types/
│   └── event.ts        # TypeScript type definitions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blockchain-crypto-days
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Event Data Structure

The application uses a comprehensive data structure to manage multiple event editions:

```typescript
interface EventEdition {
  year: number
  title: string
  subtitle: string
  dates: { start: string; end: string }
  location: { venue: string; city: string; country: string }
  theme: string
  status: 'past' | 'current' | 'upcoming'
  description: string
  highlights: string[]
  speakers: Speaker[]
  agenda: AgendaItem[]
  committee: CommitteeMember[]
  partners: Partner[]
  tickets: TicketType[]
  registrationOpen: boolean
  earlyBirdDeadline?: string
  media?: MediaContent[]
  pastEditions?: PastEdition[]
  countdownEnabled?: boolean
  socialMedia?: SocialMediaLinks
  newsletterSignup?: boolean
  contactEmail?: string
}
```

## 🎨 Customization

### Adding New Editions
1. Add new edition data to `src/data/eventData.ts`
2. Include all required fields and media content
3. Update navigation automatically

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles are in their respective files

### Content Management
- Update event information in `eventData.ts`
- Add new speakers, agenda items, and committee members
- Include media content for past editions

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:

```env
VITE_APP_TITLE=TechConnect Summit
VITE_APP_DESCRIPTION=Annual Technology Conference
```

### SEO Configuration
Update meta tags in `index.html` for better SEO:

```html
<meta name="description" content="TechConnect Summit - Annual Technology Conference">
<meta property="og:title" content="TechConnect Summit 2024">
<meta property="og:description" content="Join us for the most anticipated technology conference">
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimization

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting with Vite
- **Caching**: Efficient caching strategies

## 🔒 Security Considerations

- **Input Validation**: Form inputs are validated with Zod
- **XSS Prevention**: Proper sanitization of user inputs
- **Secure Links**: External links use proper rel attributes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: info@techconnect2024.com
- Documentation: [Project Wiki](wiki-url)
- Issues: [GitHub Issues](issues-url)

## 🗺️ Roadmap

- [ ] Payment integration for registration
- [ ] Live streaming capabilities
- [ ] Virtual event features
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Mobile app companion
- [ ] Integration with event management platforms

---

**Built with ❤️ for the tech community** 