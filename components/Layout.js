import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          MARVEL IBD - Mitochondrial Antioxidant Therapy to Resolve Inflammation
          in Ulcerative Colitis
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="description"
          content="MARVEL IBD Study. Randomised controlled trial investigating the use of mitochondrial antioxidants as a treatment for ulcerative colitis."
        ></meta>
      </Head>
      <div className="flex flex-col bg-gradient-to-b from-gray-100 to-white min-h-screen">
        
        <div className=" container mx-auto bg-white text-gray-800 border shadow-lg mb-24 md:mt-4 rounded-lg md:py-4 md:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
