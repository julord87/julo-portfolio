import { useEffect } from 'react';
import Header from './components/Header';
import DevSection from './components/DevSection';
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

      <TechnicalProducerSection />

      <DevSection />

      <Modal />

      <QuotesSlider />

      <Footer />
    </>
  )
}

export default App