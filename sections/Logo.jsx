'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { ExploreCard, TitleText, TypingText, } from '../components';

const Logo = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    > <motion.div
      variants={slideIn('right', 'tween', 0.2, 2)}
      className="relative w-full md:-mt-[199px] -mt-[22px] -top-29"
      animate={{ opacity: 2, scale: 0.4 }}
      transition={{ duration: 2.5 }}
    >
      <a href="https://my.spline.design/untitled-744ffe01c8a7dd164cdedccc57c115a3">
        <img
          src="/damana.png"
          alt="hero_cover"
          className=" w-full  sm:h-[650px] h-[550px] object-cover rounded-tl-[20px] z-10 relative"
        />
      </a>
      </motion.div>
    </motion.div>
    <div className="flex justify-center -top-48 items-center flex-col relative z-10">
      <motion.h1 variants={textVariant(4)} className={styles.heroHeading}>
        Metaverse
      </motion.h1>
      <motion.div
        variants={textVariant(2.2)}
        className="flex top-3 flex-row justify-center items-center "
      />  <TypingText title="| About Damana Metaverse" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Gaming studio Damana Metaverse</span> is a new
        thing in the future, where you can enjoy playing games{' '}
        <span className="font-extrabold text-white">together with friends,
        </span>{' '}
        buying NFTs,{' '}
        <span className="font-extrabold text-white">Play to Earn</span> with games,{' '}
        <span className="font-extrabold text-white">explore</span> and enjoy.
      </motion.p>
    </div>

  </section>

);

export default Logo;
