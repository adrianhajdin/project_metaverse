'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />

        <div>
          <h4 className="font-bold sm:text-[14px] text-[14px] sm:leading-[10.32px] leading-[16.32px] text-white">
            Ally Black
          </h4>
          <p className="mt-[8px] font-normal sm:text-[12px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder of Metaverse
            <img
          src="/blackowl.png"
          alt="planet-09"
          className="w-lg:h-[110px] lg:h-[110px] h-auto min-h-[110px] object-cover rounded-[90px]"
        />
          </p>
        </div>

        <p className="mt-[14px] font-normal sm:text-[14px] text-[8px] sm:leading-[25.6px] leading-[19.6px] text-white">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </p>
        <p> .</p>
        <div>
          <h4 className="font-bold sm:text-[14px] text-[14px] sm:leading-[10.32px] leading-[16.32px] text-white">
            Returner
          </h4>
          <p className="mt-[8px] font-normal sm:text-[12px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            CoFounder of Metaverse <img
          src="/pinkbook.png"
          alt="planet-09"
          className="w-lg:h-[110px] lg:h-[110px] h-auto min-h-[110px] object-cover rounded-[90px]"
        />
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[14px] text-[8px] sm:leading-[25.6px] leading-[19.6px] text-white">
          “I am so excided that we can use this new tehnology”
        </p>

      </motion.div>

    </motion.div>
  </section>

);

export default Feedback;
