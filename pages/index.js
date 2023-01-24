import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-[#000] overflow-hidden">
    <Navbar />

    <div className='mt-2'> 
    <Hero />
    </div>

    <div className="relative">
      <About />
      <div className="gradient-09 z-0" />
      {/* <Explore /> */}
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-09 z-0" />
      <WhatsNew />

      <div className="gradient-09 z-0" />
      {/* <Feedback /> */}
    </div>
    <Footer />
  </div>
);

export default Home;
