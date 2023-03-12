
import { Footer, Navbar } from '../components';
import { Games, Explore, GetStarted, Logo, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Logo />
    <Games />
    <WhatsNew />
    <Explore />
    <GetStarted />
    <Footer />
  </div>
);

export default Home;
