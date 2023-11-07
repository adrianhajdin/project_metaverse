'use client';

import { motion } from 'framer-motion';
import axios from 'axios'

import styles from '../styles';
import styled from "styled-components";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText, StockTitleText } from '../components';
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
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| 나만의 뉴스 추천" />
        <TitleText title={<>테마별 뉴스 📰</>} />


        {wholeData.themeReasonList?.map((themeReason, i) => {
          return(
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
              <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[50px] text-[44px] text-black">
                  {<>{themeReason.theme.themeName}</>}
                </h4>
                <h4 className="font md:text-[40px] text-[40px] text-black">
                  {<>{themeReason.reason}</>}
                </h4>
              </div>
              {themeReason.newsList?.map((news, i) => {
                const newsUrl = news.newsLink
                return(
                <>
                  <motion.div
                    variants={staggerContainer}
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} h-[250px] mx-auto flex lg:flex-row flex-col gap-8`}
                  >
                    <motion.div
                      variants={fadeIn('right', 'tween', 0.2, 1)}
                      className={`flex-1 ${styles.flexCenter}`}
                    >
                      <a href={newsUrl} target="_blank" rel="noreferrer">
                        <img
                          src="/news.png"
                          alt="news"
                          className="object-cover"
                        />
                      </a>
                    </motion.div>
                    <motion.div
                      variants={fadeIn('right', 'tween', 0.2, 1)}
                      className="flex-[0.95] flex justify-center flex-col"
                    >
                      <h4 className="font-bold md:text-[40px] text-[40px] text-black">
                      {<>{news.newsTitle}</>}
                      </h4>
                      <div className="mt-[48px] flex flex-wrap justify-between gap-[12px]">
                        <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
                            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                              <img src="/task.png" alt="icon" className="w-1/2 h-1/2 object-contain" />
                            </div>
                            <p className="flex-1 mt-[16px] font-normal text-[18px] text-black leading-[32.4px]">
                              {<>{news.description}</>}
                            </p>
                          </div>

                          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
                            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                              <img src="/quality.png" alt="icon" className="w-1/2 h-1/2 object-contain" />
                            </div>
                            <p className="flex-1 mt-[16px] font-normal text-[18px] text-black leading-[32.4px]">
                              테스트용
                            </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  </>
                );
            })}
            </div>
          );
            
          
          /*return (
            <>
            <motion.div
              variants={staggerContainer}
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} h-[200px] mx-auto flex lg:flex-row flex-col gap-8`}
            >
              <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className={`flex-1 ${styles.flexCenter}`}
              >
                <img
                  src="/news.png"
                  alt="news"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.95] flex justify-center flex-col"
              >
                <TitleText title={<>{themeReason.theme.themeName}</>} />
                <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                  {newFeatures.map((feature) => (
                    <NewFeatures key={feature.title} {...feature} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
            </>
              );*/
            })}
          </motion.div>
        </motion.div>
  </section>
      

    
  )
};

 
export default StockReport;
