<div align="center">

# 🫒 OLEA

### Curated Cinema. Hand-picked. Beautifully organized.

---

<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" width="800">
  <defs>
    <linearGradient id="oliveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#5C6B47;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8A9A7B;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3E4A2E;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5C6B47;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Animated Chameleon -->
  <g transform="translate(50, 100)">
    <path d="M6 54c18-4 34-4 52 0" stroke="#8A9A7B" stroke-width="2.5" stroke-linecap="round" fill="none">
      <animate attributeName="d" dur="3s" repeatCount="indefinite"
        values="M6 54c18-4 34-4 52 0; M6 54c18-6 34-2 52 0; M6 54c18-4 34-4 52 0" />
    </path>
    <path d="M16 42c-7 1-10 9-4 12 5 2.6 10.5-1 9.5-6-.8-4-6.5-5-8-1.5" stroke="url(#oliveGrad)" stroke-width="3.5" stroke-linecap="round" fill="none">
      <animate attributeName="d" dur="2s" repeatCount="indefinite"
        values="M16 42c-7 1-10 9-4 12 5 2.6 10.5-1 9.5-6-.8-4-6.5-5-8-1.5; M16 44c-7 1-10 9-4 12 5 2.6 10.5-1 9.5-6-.8-4-6.5-5-8-1.5; M16 42c-7 1-10 9-4 12 5 2.6 10.5-1 9.5-6-.8-4-6.5-5-8-1.5" />
    </path>
    <path d="M16 42c1-12 12-21 24-21 9 0 15 5 17 11l5 2c2 .8 1.6 3.4-.6 3.9l-5.4 1.2C52 45 44 48 36 48c-8 0-16-2-20-6z" fill="url(#oliveGrad)">
      <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="1;0.85;1" />
    </path>
    <circle cx="47" cy="31" r="3.2" fill="#FDFBF7" />
    <circle cx="47.9" cy="31.2" r="1.5" fill="#1F2937">
      <animate attributeName="cx" dur="2s" repeatCount="indefinite" values="47.9;48.5;47.9" />
    </circle>
  </g>
  
  <!-- Title -->
  <text x="400" y="110" font-family="Georgia, serif" font-size="72" font-weight="bold" text-anchor="middle" fill="url(#textGrad)">
    OLEA
  </text>
  
  <!-- Subtitle -->
  <text x="400" y="150" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle" fill="#6B7280" letter-spacing="4">
    CURATED CINEMA
  </text>
</svg>

---

### 🎬 Discover Your Next Favorite Film

**Olea** is a beautifully crafted web app that helps you discover and curate your personal film collection across **10 hand-picked categories** featuring **400+ iconic movies** from around the world.

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Olea-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://your-vercel-app-url.vercel.app)

</div>

---

## ✨ Features

<div align="center">

| 🎨 **Beautiful Design** | 📱 **Mobile-First** | 🔍 **Smart Discovery** | 💾 **Local Storage** |
|:---:|:---:|:---:|:---:|
| Olive & cream theme with gradient accents | Responsive across all devices | 10 curated categories to explore | Your collection, always saved |

</div>

### 🎭 10 Curated Categories

### 🎥 400+ Films Across Genres

- **Hollywood**: The Godfather, Pulp Fiction, The Dark Knight...
- **Bollywood**: 3 Idiots, Dangal, Andhadhun, Sholay...
- **Blockbusters**: Avengers, Inception, Interstellar, Dune...
- **Classics**: 12 Angry Men, Casablanca, Psycho, Citizen Kane...
- **International**: Parasite, Spirited Away, Amélie, Oldboy...
- **Hidden Gems**: The Fall, Coherence, Moon, The Lighthouse...
- **Family**: Toy Story, The Lion King, Coco, WALL-E...
- **Documentaries**: Free Solo, Senna, 13th, Amy...
- **Feel Good**: The Grand Budapest Hotel, Good Will Hunting, The Princess Bride...
- **Cult Favorites**: Fight Club, The Big Lebowski, Blade Runner, Donnie Darko...

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

### 🎨 Design System

- **Colors**: Olive (#5C6B47) + Cream (#FDFBF7) + Muted Grey
- **Fonts**: Fraunces (serif) + Manrope (sans-serif)
- **Logo**: Animated chameleon SVG with olive-emerald gradient
- **UI**: Minimalist, editorial, magazine-inspired

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/olea-cinema.git

# Navigate to the project
cd olea-cinema

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure


---

## 🎯 Key Features Explained

### 📱 Mobile-First Design
- Responsive grid layouts that adapt beautifully to any screen size
- Touch-optimized interactions with smooth animations
- No horizontal overflow, ever

### 🎨 Dynamic Posters
- Real movie posters fetched from Wikipedia's public API
- Graceful fallback to gradient backgrounds when posters aren't available
- LocalStorage caching for instant loading on repeat visits

### 💾 Persistent Collection
- Your curated collection is saved in localStorage
- Works completely offline once loaded
- No account required, no backend needed

### 🎭 Category Exploration
- 10 unique categories with custom gradients and emojis
- Smooth transitions between category views
- Instant add/remove from collection

---

## 🌟 Why Olea?

In a world of algorithm-driven recommendations, **Olea** brings back the joy of **curated discovery**. Each film is hand-picked and organized into thoughtful categories that reflect moods, genres, and cinematic traditions from around the world.

> *"Pick a mood. Find your film."*

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add more films to `lib/movies.ts`
- Improve the UI/UX
- Add new categories
- Fix bugs or add features

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Movie data curated from various film databases and personal recommendations
- Posters sourced from [Wikipedia](https://www.wikipedia.org/) (public domain/fair use)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<div align="center">

### Made with 🫒 and ❤️ for film lovers

**If you enjoyed Olea, consider giving it a ⭐ on GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/olea-cinema?style=social)](https://github.com/yourusername/olea-cinema)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/olea-cinema?style=social)](https://github.com/yourusername/olea-cinema/fork)

</div>

---

<div align="center">

**[⬆ Back to Top](#-olea)**

</div>
