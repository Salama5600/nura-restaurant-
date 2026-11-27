/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {AppProvider, useApp} from './context/AppContext';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {GalleryPage} from './pages/GalleryPage';
import {HomePage} from './pages/HomePage';
import {MenuPage} from './pages/MenuPage';
import {ReservationPage} from './pages/ReservationPage';

const AppShell: React.FC = () => {
  const {currentPage} = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'reservation':
        return <ReservationPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-olive">
      <Header />
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
