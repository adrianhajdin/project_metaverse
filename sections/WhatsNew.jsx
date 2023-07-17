'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newDesign, newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <>
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Mes matériaux" />
          <h4 className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-secondary-white'> 
            Consultez mon matériel pour obtenir une liste complète de tous les logiciels, gadgets et services que j'utilise.
          </h4>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>

    </section>
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TitleText title={<>Développement </>} />
        <h4 className='mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-secondary-white'> 
          Quelques logiciels et outils que j'utilise lorsque je programme pendant mon temps
        </h4>
        <div className="mt-[48px] grid lg:grid-cols-4 sm:grid-cols-2 justify-between gap-8">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TitleText title={<>Design </>} />
        <h4 className='mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-secondary-white'> 
          Les logiciels et services que j'utilise régulièrement en travaillant comme designer
        </h4>
        <div className="mt-[48px] grid lg:grid-cols-4 sm:grid-cols-2 justify-between gap-8">
          {newDesign.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  </>
);

export default WhatsNew;
