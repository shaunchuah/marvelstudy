import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>MARVEL IBD Study</title>
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
      <div className="flex flex-col bg-gray-100">
        <div className="container mx-auto bg-white text-gray-800 shadow-lg sm:px-4 sm: py-2 sm:rounded-xl sm:my-2 lg:py-4 lg:rounded-2xl lg:my-4 lg:px-8  ">
          <header class="mb-4">
            <div class="flex flex-wrap p-4 flex-col md:flex-row items-center border-b-2 border-[#008000]">
              <nav class="flex items-center justify-center sm:text-lg">
                <a class="flex items-center mr-5 pb-1" href="/">
                  <Image
                    src="/static/marvellogo.png"
                    alt="MARVEL Logo"
                    height="51"
                    width="109"
                  />
                </a>
                {/* <a class="mr-5 text-gray-400">Trial Results</a> */}
              </nav>
            </div>
          </header>

          <main className="flex flex-col items-center w-full flex-1">
            <section class="text-gray-600 body-font">
              <div class="flex px-4 py-4 md:py-24 md:flex-row flex-col-reverse items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                  <img
                    class="object-cover object-center rounded"
                    alt="hero"
                    src="https://dummyimage.com/1280x800"
                  />
                </div>
                <div class="mb-10 md:mb-0 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <Image
                    src="/static/marvel_320x150.png"
                    alt="MARVEL Logo"
                    height="150"
                    width="320"
                  />
                  <p class="pl-2 mb-8 leading-relaxed sm:text-2xl text-xl">
                    Mitochondrial Antioxidant Therapy to <br />
                    Resolve Inflammation in Ulcerative Colitis
                  </p>
                  <button class="ml-2 bg-[#008000] text-white hover:bg-green-600 border-0 py-2 px-6 rounded text-lg">
                    Participant Information Sheet
                  </button>
                </div>
              </div>
            </section>

            <section class="text-gray-600 body-font">
              <div class="px-5 py-24">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-xl">
                    In this double-blind randomised controlled trial, we are
                    investigating the use of mitochondrial antioxidants as a
                    treatment for ulcerative colitis.
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-[#008000] mt-8 mb-6"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                    GWO-TZER HO
                  </h2>
                  <p class="text-gray-500">Chief Investigator</p>
                </div>
              </div>
            </section>

            <section class="text-gray-600 body-font">
              <div class="px-5 py-24">
                <div class="flex flex-col">
                  <div class="lg:w-1/2 w-full mb-6">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Participating Centres
                    </h1>
                    <div class="h-1 w-20 bg-[#008000] rounded"></div>
                  </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/glasgow.jpg"
                        alt="Glasgow"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                      Glasgow
                    </h2>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/edinburgh.jpg"
                        alt="Edinburgh"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                      Edinburgh
                    </h2>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/dundee.jpg"
                        alt="Dundee"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                      Dundee
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <section class="text-gray-600 body-font">
              <div class="px-5 py-24">
                <div class="flex flex-wrap w-full mb-6">
                  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Our Sponsors
                    </h1>
                    <div class="h-1 w-20 bg-[#008000] rounded"></div>
                  </div>
                </div>
                <div class="flex flex-wrap -m-4">
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/jonmoulton.png"
                      alt="Jon Moulton Charity Trust"
                      height="354"
                      width="709"
                    />
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/cir.png"
                      alt="Centre for Inflammation Research"
                      height="354"
                      width="709"
                    />
                  </div>

                  <div class="xl:w-1/6 md:w-1/4 p-4 w-1/2">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/nhslothian.png"
                      alt="NHS Lothian"
                      height="354"
                      width="354"
                    />
                  </div>
                  <div class="hidden md:w-1/4 md:block xl:hidden"></div>
                  <div class="xl:w-1/6 md:w-1/4 p-4 w-1/2">
                    <Image
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/accord.png"
                      alt="ACCORD"
                      height="354"
                      width="354"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer class="text-gray-600 body-font">
            <div class="px-5 pt-10 border-t-2 border-[#008000]">
              <div class="flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    USEFUL LINKS
                  </h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://samples.musicstudy.uk"
                      >
                        G-Trac
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://ecrf.igmm.ed.ac.uk/index.php?action=myprojects"
                      >
                        RedCap
                      </a>
                    </li>
                  </nav>
                </div>

                <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    CONTACT DETAILS
                  </h2>
                  <h3 class="font-bold">Email</h3>
                  <p class="mb-4">
                    <a
                      href="mailto:MARVEL.Trial@ed.ac.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-600 hover:text-[#008000]"
                    >
                      MARVEL.Trial@ed.ac.uk
                    </a>
                  </p>

                  <h3 class="font-bold">Address</h3>
                  <p class="mb-10">
                    Gut Research Unit
                    <br />
                    Centre for Inflammation Research
                    <br />
                    Queen's Medical Research Institute
                    <br />
                    47 Little France Crescent
                    <br />
                    Edinburgh EH16 4TJ
                  </p>
                </div>
                <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    LEGAL
                  </h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://clinicaltrials.gov/ct2/show/NCT04276740"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Trial Registration
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/about/website/website-terms-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/data-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Data Protection
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/about/website/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/about/website/accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Accessibility
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div class="">
              <div class="px-5 py-6 flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <Image
                    src="/static/marvellogo.png"
                    alt="MARVEL Logo"
                    height="51"
                    width="109"
                  />
                </a>
                <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                  © 2022 MARVEL Research Team
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
