import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheJollyDifference from './components/WhyChooseUs';
import OurCourses from './components/OurCourses';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Modal from './components/Modal';
import FloatingCTA from './components/FloatingCTA';
import MeetTheTutors from './components/MeetTheTutors';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-x-hidden">
      <Header onCTAClick={openModal} />
      <main>
        <Hero onCTAClick={openModal} />
        <TheJollyDifference />
        <OurCourses onCTAClick={openModal} />
        <HowItWorks />
        <MeetTheTutors />
        <Testimonials />
        <FAQ />
        <CallToAction onCTAClick={openModal} />
      </main>
      <Footer />
      <FloatingCTA onCTAClick={openModal} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default App;