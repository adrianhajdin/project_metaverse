'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-090 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About PsyDTrader" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">PsyDTrader  { }</span>
        the premier online destination for active traders. Our website offers a wide range of tools and resources to help you stay on top of the markets and make informed trades.
        {' '}
        <span className="font-extrabold text-white">
          Our key features include trading price alerts that notify you of important market movements, a trading journal to track your progress, 
        </span>{' '}
        and an accounting report to help you stay on top of your finances.{' '}
        <span className="font-extrabold text-white">Whether{'   '}</span>
        you're a seasoned professional or a new trader, PsyDTrader has everything you need to succeed in the markets.

        {' '}
        <span className="font-extrabold text-white">Sign up now</span> to start taking advantage
        of our powerful tools and resources!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
