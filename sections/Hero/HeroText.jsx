'use client';

import * as React from 'react';

import styles from '../../styles';

function heroText() {
  return (
    <div className={`${styles.flexCenter} `}>
      <p className={`${styles.heroDText} text-center text-white`}>
        Start your trades with full {'\n'}
        control of your risks
      </p>
    </div>
  );
}

export default heroText;
