import React, { useState, useCallback } from "react";
import styles from "./Portfolio.module.css";
import Grid from "@material-ui/core/Grid";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);

  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const content = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 2.8 },
    },
  };

  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const products = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        >
          <motion.svg className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect
                variants={text}
                className="w-full h-full text-gray-600 fill-current"
              />
            </pattern>
            <text
              className="text-4xl font-bold"
              text-anchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)", color: "white" }}
            >
              tailstore
            </text>
          </motion.svg>
        </motion.div>
      </div>
    );
  };
  // setTimeout(() => {
  //   onClick();
  // }, 3000);

  return (
    <Grid container justify="center">
      <Grid item>
        <svg className={styles.textLine1 + " " + styles.strokes}>
          <text className={styles.font} x="20%" y="90%" fontSize="2.5em">
            K
          </text>
          <text className={styles.font} x="35%" y="90%" fontSize="2.5em">
            e
          </text>
          <text className={styles.font} x="50%" y="90%" fontSize="2.5em">
            n
          </text>
          <text className={styles.font} x="65%" y="90%" fontSize="2.5em">
            n
          </text>
          <text className={styles.font} x="80%" y="90%" fontSize="2.5em">
            y
          </text>
        </svg>
      </Grid>
    </Grid>
    // <motion.section exit={{ opacity: 0 }}>
    //   <InitialTransition />

    //   <motion.div
    //     initial="initial"
    //     animate="animate"
    //     variants={content}
    //     className="space-y-12"
    //   >
    //     <motion.h1
    //       variants={title}
    //       className="text-6xl font-black text-center"
    //       style={{ color: "white" }}
    //     >
    //       Welcome to tailstore!
    //     </motion.h1>

    //     <motion.section
    //       variants={products}
    //       className="text-gray-700 body-font"
    //     ></motion.section>
    //   </motion.div>
    // </motion.section>
  );
}

// exitBeforeEnter
