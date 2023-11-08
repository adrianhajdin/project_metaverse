import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew, World } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
