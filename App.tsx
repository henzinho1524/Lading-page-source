
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { BackgroundDecoration } from './components/BackgroundDecoration';

const App: React.FC = () => {
  return (
    <main className="relative selection:bg-source-blue selection:text-white bg-black">
      <BackgroundDecoration />
      <Navbar />
      <Hero />
      <PainSection />
      <Process />
      <Services />
      <Footer />
    </main>
  );
};

export default App;
