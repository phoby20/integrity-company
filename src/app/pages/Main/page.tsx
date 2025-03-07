'use client';

import Header from '@/src/app/ui/organisms/Header';
import MainBanner from '@/src/app/pages/Main/MainBanner';
import Services from '@/src/app/pages/Main/Services';
import Contact from '@/src/app/pages/Main/Contact';
import Process from '@/src/app/pages/Main/Process';
import Samples from '@/src/app/pages/Main/Samples';
import Footer from '@/src/app/ui/organisms/Footer';

export default function Main() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Services />
      <Process />
      <Samples />
      <Contact />
      <Footer />
    </div>
  );
}
