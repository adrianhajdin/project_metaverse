import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Page;
