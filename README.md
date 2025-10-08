# Elghella - Algeria's Premier AgriTech Marketplace

A modern, comprehensive agricultural marketplace platform connecting farmers, buyers, and agricultural service providers across Algeria.

## 🌾 Features

- **Multi-Category Marketplace**
  - Livestock & Animals
  - Agricultural Equipment
  - Land Sales & Rentals
  - Vegetables & Produce
  - Plant Nurseries
  - Expert Consultations

- **Advanced Features**
  - Real-time interactive maps with satellite imagery
  - Weather alerts and agricultural insights
  - Multi-language support (Arabic, French, English)
  - Offline-first PWA capabilities
  - Advanced image optimization
  - Real-time updates

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/autonomyowner/elghella.git
cd elghella
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/autonomyowner/elghella)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel Dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Maps**: Leaflet, OpenStreetMap
- **Deployment**: Vercel

## 📱 Progressive Web App

The application is fully PWA-enabled with:
- Offline functionality
- Service worker caching
- Install to home screen capability
- Background sync

## 🔐 Authentication

Supports multiple authentication methods:
- Email/Password
- Magic Link
- Social Login (Google, Facebook)

## 🗺️ Map Features

- Interactive maps with real-time location
- Satellite imagery integration
- Weather overlays
- Location-based search
- Wilaya (province) boundaries

## 📄 License

Copyright © 2025 Elghella AgriTech. All rights reserved.

## 🤝 Contributing

This is a private project. For any inquiries, please contact the development team.

## 📞 Support

For support, please contact: support@elghella.com

---

Built with ❤️ for Algerian Agriculture