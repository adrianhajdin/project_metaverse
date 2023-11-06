'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import React from "react";
import { useRouter } from "next/router";



const StockReport = () => {
  const {query} = useRouter();
  return(
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          {query.stockName}
        </motion.h1>
      </div>

    </motion.div>
  </section>)

};
 
export default StockReport;