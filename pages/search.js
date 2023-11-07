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
      </motion.div>
      
      

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

        <div className="mt-[50px] flex flex-wrap lg:flex-column flex-column min-h-[70vh] gap-5">
        {wholeData.themeReasonList?.map((themeReason, i) => {
          return (
          <div key={i} className="relative flex items-center justify-center w-full h-[300px] cursor-pointer">
            <img
              src="/news.png"
              alt="news"
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-white rounded-b-[24px]">
              <div className={`${styles.flexCenter} w-[60px] h-[70px] rounded-[24px] glassmorphism mb-[16px]`}>
                <img
                  src="/stocks.png"
                  alt="stock"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <p className="font-normal text-[16px] leading-[2.16px] text-black uppercase">{themeReason.theme.themeName}</p>
              <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-black">{themeReason.reason}</h2>
            </div>
          </div>
              );
            })}
        </div>
        
        


      </motion.div>
    </motion.div>
  </section>
      

    
  )
};

 
export default StockReport;