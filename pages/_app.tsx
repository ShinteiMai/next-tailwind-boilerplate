import React from "react";
import App from "next/app";
import Layout from "../components/UI/Layout";
import { AnimatePresence, motion, Transition } from "framer-motion";
import "../index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring: Transition = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren",
    };

    return (
      <>
        <Layout>
          <div className="relative">
            <AnimatePresence>
              <div>
                <motion.div
                  transition={spring}
                  key={router.pathname}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  id="page-transition"
                >
                  <Component {...pageProps} key={router.pathname} />
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </Layout>
        
        <style jsx global>
          {`
            html {
              margin: 0;
              padding: 0;
            }

            body {
              margin: 0;
              padding: 0;
              background: #323030;
              color: #cacaca;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
