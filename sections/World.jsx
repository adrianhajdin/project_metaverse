'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Localisation dans le monde" textStyles="text-center" />
      <TitleText
        title={(
          <>Trouvez moi à travers le monde via ma géolocalisation
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute top-[42%] left-[42%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="SSII.png" alt="people" className="w-full h-full rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
