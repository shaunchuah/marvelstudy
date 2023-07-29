import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return (
    <>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
