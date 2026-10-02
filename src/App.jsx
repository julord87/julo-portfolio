import { useEffect } from 'react';
import Header from './components/Header';
import DevSection from './components/DevSection';
import MusicProducerSection from './components/MusicProducerSection';
import TechnicalProducerSection from './components/TechnicalProducerSection';
import QuotesSlider from './components/QuotesSlider';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { initScrollFadeIn } from './helpers/handle-scroll-fn';



function App() {
  useEffect(() => initScrollFadeIn(), []);

  return (
    <>
      <Header />

      <DevSection />

      <TechnicalProducerSection />

      <Modal />

      <MusicProducerSection />

      <QuotesSlider />

      <Footer />
    </>
  )
}

export default App