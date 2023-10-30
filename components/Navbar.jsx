'use client';

import { motion } from 'framer-motion';
import React, { useState } from "react";
import styled from "styled-components";

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [searchHiddenBar, setSearchHiddenBar] = useState(true);

  const handleSearch = () => {
    setSearchHiddenBar(searchHiddenBar => !searchHiddenBar);
  };

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
              <SearchBar>
                <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" onClick={handleSearch} />
                <SearchBarInput />
              </SearchBar>
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
  width: 200px;
  height: 22px;
`;

const SearchBarInput = styled.input`
  position: absolute;
  top : -5px;
  left : -20px;
  height: 32px;
  margin: 2px 0 0 59px;
  background-color:transparent;
  border: 2px solid white;
`;

export default Navbar;
