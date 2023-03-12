
import { Footer, Navbar } from '../components';
import { Games, Explore, Feedback, GetStarted, Logo, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Logo />
    <Games />
    <WhatsNew />
    <Explore />
    <GetStarted />
    <Feedback />
    <Footer />
  </div>
);

export default Home;
