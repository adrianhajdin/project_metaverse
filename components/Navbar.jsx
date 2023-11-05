'use client';

import axios from 'axios'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import styled from "styled-components";

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [stocks, setStock] = useState(null)
  const [searchHiddenBar, setSearchHiddenBar] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState(stocks)
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  

  axios.get('http://49.50.167.250:8000/Company/getAllCompanies')
  .then((Response)=>{
    setStock(Response.data)
    //console.log(stocks)
  })
  .catch((Error)=>{console.log(Error)})

  const router = useRouter();
  
  const handleSearch = () => {
    setSearchHiddenBar(searchHiddenBar => !searchHiddenBar);
  };

  const goToSearch = () => {
  }

  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false)
      setDropDownList([])
    } else {
      const stock = stocks.map(stock => stock.companyShortName)
      const choosenTextList = stock.filter(textItem =>
        textItem.includes(inputValue)
      )
      setDropDownList(choosenTextList)
    }
  }

  const changeInputValue = event => {
    setInputValue(event.target.value)
    setIsHaveInputValue(true)
  }

  const clickDropDownItem = clickedItem => {
    setInputValue(clickedItem)
    setIsHaveInputValue(false)
  }

  const handleDropDownKey = event => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === 'ArrowDown' &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1)
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1)
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex])
        setDropDownItemIndex(-1)
      }
    }
  }
  useEffect(showDropDownList, [inputValue])

  return(
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <NavRightLayout>
        {searchHiddenBar ? (
              <img src="/search.svg"
              alt="search"
              className="w-[24px] h-[24px] object-contain" onClick={handleSearch}/>
            ) : (
              <SearchBar isHaveInputValue={isHaveInputValue}>
                <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" onClick={handleSearch} />
                <SearchBarInput 
                  type='text'
                  value={inputValue}
                  onChange={changeInputValue}
                  onKeyUp={handleDropDownKey}
                />
                <SearchButton>
                  <img src="/search.png" className="w-[24px] h-[24px] object-contain" onClick={() => router.push("/search")} />
                </SearchButton>
                <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
              </SearchBar>
          )}
          {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                {dropDownItem}
              </DropDownItem>
            )
          })}
        </DropDownBox>
      )}
      </NavRightLayout>
      
      <NavMiddleLayout>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-black">
          금요주식회
        </h2>
      </NavMiddleLayout>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />  
    </div>
  </motion.nav>
  )
};

const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const NavRightLayout = styled.div`
  display: flex;
  position: relative;
`;

const NavMiddleLayout = styled.div`
  display: flex;
  position: fixed;
  left: 700px;
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;
  height: 22px;
`;

const SearchBarInput = styled.input`
  position: absolute;
  top : -5px;
  left : -20px;
  height: 32px;
  margin: 2px 0 0 59px;
  background-color: white;
  border: 2px solid white;
`;

const SearchButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 240px;
  top: 1px;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 220px;
  top: -2px;
`

const DropDownBox = styled.ul`
  display: block;
  position: absolute;
  top: 30px;
  left: 40px;
  width: 170px;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`

export default Navbar;