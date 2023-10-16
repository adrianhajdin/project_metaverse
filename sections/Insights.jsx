'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer, zoomIn } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Projets" textStyles="text-center" />
      <TitleText title={<>Quelques réalisations et travaux</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
      <a 
        href="https://github.com/wilson635/"
        target='_blank' rel="noreferrer"
      >
        <TypingText title="|Voir plus →" textStyles="text-center" />
      </a>
    </motion.div>
  </section>
);

export default Insights;
