'use client';

import { motion } from 'framer-motion';
import axios from 'axios'

import styles from '../styles';
import styled from "styled-components";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, fadeIn } from '../utils/motion';



const StockReport = () => {
  const {query} = useRouter();
  const [wholeData, setWholeData] = useState('')

  useEffect(() => {
    const getCompanyData = async () => {
      const url = encodeURI('http://49.50.167.250:8000/Company/getCompanyThemeReasonNews2/'+ query.stockName)
        await axios.get(url)
          .then((Response)=>{
            setWholeData(Response.data)
          })
          .catch((Error)=>{console.log(Error)})
    }
    getCompanyData();
  }, []);

  const companyCode = wholeData.company?.companyCode
  //console.log(companyData['companyCode'])
  console.log(wholeData)
  

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
        <motion.h1 variants={textVariant(1.1)} className="text-[24px]">
          {companyCode}
        </motion.h1>
      </div>
      
      


    <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| 나만의 뉴스 추천" />
        <TitleText title={<>테마별 뉴스 📰</>} />
        <div>
          {wholeData.themeReasonList?.map((themeReason, i) => {
              return (
                <div key={i}>
                  <p>What❓: {themeReason.theme.themeName}</p>
                  <p>Why❓: {themeReason.reason}</p>
                </div>
              );
            })}
        </div>
      </motion.div>
    </motion.div>
  </section>
      

    </motion.div>
  </section>
  )
};

 
export default StockReport;