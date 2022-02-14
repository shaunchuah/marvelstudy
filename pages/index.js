import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
      <div className="flex flex-col bg-gray-100">
        <div className="container mx-auto bg-white text-gray-800 shadow-lg sm:px-4 sm:py-2 sm:rounded-xl sm:mt-2 lg:py-4 lg:rounded-2xl lg:mt-4 mb-24 lg:px-8  ">
          <header className="mb-4">
            <div className="flex justify-between flex-wrap p-4 flex-col md:flex-row items-center border-b-2 border-[#008000]">
              <a className="flex items-center sm:mr-5 sm:pb-1 pb-2" href="/">
                <Image
                  src="/static/marvellogo.png"
                  alt="MARVEL Logo"
                  height="51"
                  width="109"
                />
              </a>
              <nav className="flex items-center justify-center sm:text-xl">
                <a class="mr-5 ">Home</a>
                <a class="mr-5 ">Participants</a>
                <a class="mr-5 ">Investigators</a>
                <a class="mr-5 ">Results</a>
                <a class="mr-5 ">Contacts</a>
              </nav>
            </div>
          </header>

          <main className="flex flex-col items-center w-full flex-1">
            <section className="md:w-5/6 px-4 flex md:flex-row flex-col gap-8 py-4 md:py-24 items-center">
              <div className="w-full flex flex-col md:items-start md:text-left items-center">
                <Image
                  src="/static/marvel_320x150.png"
                  alt="MARVEL Logo"
                  height="150"
                  width="320"
                />
                <p className="pl-2 mb-8 leading-relaxed sm:text-2xl text-xl">
                  Mitochondrial Antioxidant Therapy to Resolve Inflammation in
                  Ulcerative Colitis
                </p>
                <button className="ml-2 bg-[#008000] text-white hover:bg-green-600 border-0 py-2 px-6 rounded text-lg">
                  Participant Information Sheet
                </button>
              </div>
              <div className="">
                <div className="border p-8 rounded-lg  shadow-lg hover:text-[#008000] ">
                  <a href="/static/marvel_study_overview.png" target="_blank">
                    <Image
                      src="/static/marvel_study_overview.png"
                      alt="Marvel Study Design Overview"
                      height="650"
                      width="1920"
                    />
                    <div className="flex flex-row gap-1 items-center ">
                      <div>MARVEL Overview</div>
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <section className="text-gray-600 body-font px-5 py-24">
              <div className="px-16 w-full mx-auto text-center flex flex-col lg:flex-row items-center">
                <div className="lg:mr-24 mb-8 lg:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-xl max-w-prose">
                    I'm delighted to take forward the research findings over the
                    last 10 years from my scientific team into a human clinical
                    trial. This has been a journey involving many scientists,
                    clinicians and also our patients. The MARVEL study will
                    provide very much needed data to show whether this new
                    treatment approach will work in Ulcerative Colitis.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#008000] mt-8 mb-6"></span>
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider">
                    DR GWO-TZER HO
                  </h2>
                  <p className="text-gray-500">
                    Chief Investigator <br /> Centre for Inflammation Research{" "}
                    <br /> University of Edinburgh
                  </p>
                </div>
                <div className="flex-none">
                  <Image
                    src="/static/gth.jpg"
                    alt="Gwo Tzer Ho"
                    height="600"
                    width="400"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </section>

            <section className="px-5 py-12 md:py-24 w-full">
              <div className="flex flex-col">
                <div className="lg:w-1/2 w-full mb-6">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    Overview
                  </h1>
                  <div className="h-1 w-20 bg-[#008000] rounded"></div>
                </div>
              </div>
              <div className=" py-16">
                <div className="bg-white border-2 p-4 rounded-lg  shadow-lg">
                  <h2>Lisa Derr, Trial Manager</h2>
                  <audio id="marvel_intro" controls className="mb-3">
                    <source
                      src="/static/marvel_introduction.mp4"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                <div className="border shadow-lg rounded p-4">
                  <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                    Design
                  </h2>
                  <p>
                    MARVEL is a randomised, double-blind, multi-centre trial in
                    patients with a moderate flare of ulcerative colitis.
                  </p>
                </div>
                <div className="border shadow-lg rounded p-4">
                  <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                    Aims
                  </h2>
                  <p>
                    MARVEL aims to test the validity of mitochondrial
                    antioxidant therapy in the context of a UC flare.
                  </p>
                </div>
                <div className="border shadow-lg rounded p-4">
                  <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                    Setting
                  </h2>
                  <p>
                    MARVEL will initially open in Edinburgh, Glasgow and Dundee
                    with a plan for 20 sites in total across the UK.
                  </p>
                </div>
                <div className="border shadow-lg rounded p-4">
                  <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                    Population
                  </h2>
                  <p>
                    MARVEL plans to recruit 250 adult patients. In parallel with
                    our paediatric trial MiniMARVEL, this will form the first
                    ever all ages IBD trial.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-gray-600 body-font">
              <div className="px-5 py-24">
                <div className="flex flex-col">
                  <div className="lg:w-1/2 w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Participating Centres
                    </h1>
                    <div className="h-1 w-20 bg-[#008000] rounded"></div>
                  </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/glasgow.jpg"
                        alt="Glasgow"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                      Glasgow
                    </h2>
                  </div>
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/edinburgh.jpg"
                        alt="Edinburgh"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                      Edinburgh
                    </h2>
                  </div>
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <Image
                        src="/static/dundee.jpg"
                        alt="Dundee"
                        height="667"
                        width="1000"
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                      Dundee
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-gray-600 body-font">
              <div className="px-5 py-24">
                <div className="flex flex-wrap w-full mb-6">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Our Sponsors
                    </h1>
                    <div className="h-1 w-20 bg-[#008000] rounded"></div>
                  </div>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/jonmoulton.png"
                      alt="Jon Moulton Charity Trust"
                      height="354"
                      width="709"
                    />
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/cir.png"
                      alt="Centre for Inflammation Research"
                      height="354"
                      width="709"
                    />
                  </div>

                  <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/static/nhslothian.png"
                      alt="NHS Lothian"
                      height="354"
                      width="354"
                    />
                  </div>
                  <div className="hidden md:w-1/4 md:block xl:hidden"></div>
                  <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
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

          <footer className="text-gray-600 body-font">
            <div className="px-5 pt-10 border-t-2 border-[#008000]">
              <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    USEFUL LINKS
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://samples.musicstudy.uk"
                      >
                        G-Trac
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://ecrf.igmm.ed.ac.uk/index.php?action=myprojects"
                      >
                        RedCap
                      </a>
                    </li>
                  </nav>
                </div>

                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    CONTACT DETAILS
                  </h2>
                  <h3 className="font-bold">Email</h3>
                  <p className="mb-4">
                    <a
                      href="mailto:MARVEL.Trial@ed.ac.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#008000]"
                    >
                      MARVEL.Trial@ed.ac.uk
                    </a>
                  </p>

                  <h3 className="font-bold">Address</h3>
                  <p className="mb-10">
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
                <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    LEGAL
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://clinicaltrials.gov/ct2/show/NCT04276740"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Trial Registration
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/about/website/website-terms-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/data-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Data Protection
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
                        href="https://www.ed.ac.uk/about/website/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-[#008000]"
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
            <div>
              <div className="px-5 py-6 flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <Image
                    src="/static/marvellogo.png"
                    alt="MARVEL Logo"
                    height="51"
                    width="109"
                  />
                </a>
                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
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
