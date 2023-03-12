import Link from 'next/link';
import { Footer, Navbar } from '../components';
import { Games, Explore, Feedback, GetStarted, Logo, WhatsNew, } from '../sections';

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
    <Link href="/Rig">Rig<div><h1>Rig</h1></div></Link>
  </div>
);

export default Home;
