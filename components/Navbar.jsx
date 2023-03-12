'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-03" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/damana.png"
        alt="stamp"
        className="w-[155px] h-[88px] lg:block hidden absolute -left-[0%] top-[12px]"
      />
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[45px] h-[45px] lg:block hidden absolute right-[111px] top-[15%]"

      />
    </div>
  </motion.nav>
);

export default Navbar;
