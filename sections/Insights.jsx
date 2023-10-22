'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
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
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;

/* CODE EXPLANATION: 
The Insights component is a functional component that returns the rendered JSX. It makes use of the 'motion' and 'framer-motion' libraries to animate the elements in the component.

It renders a section with a classname of styles.paddings and relative z-10 and sets the styling of the section using the styles object imported from the styles module.

Within the section, it creates a motion.div element, and passes it the staggerContainer animation properties from the utils/motion module and sets its initial state to 'hidden' and whileInView to 'show'.

It has a classname of styles.innerWidth which sets the width of the element, and a mx-auto which centers it.

It contains a TypingText component which renders a title and textStyles props set to text-center.

It then has a TitleText component which receives the title prop with a string "Insight about metaverse". The textStyles prop is also set to text-center.

There's also a div with a classname of mt-[50px] which sets the top margin and a flex flex-col gap-[30px] which sets the element to a flex container, sets its main axis to column, and sets a gap of 30px.

Lastly, it maps over the 'insights' constant from the constants module and renders an InsightCard component for each item in the insights array. Each InsightCard component receives a key, item, and index props. The key prop is set to "insight-{index}" for each iteration, 
the item prop is passed the current item from the insights array, and the index prop is set to index + 1.

The component returns the rendered JSX.
*/
