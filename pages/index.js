import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>MARVEL IBD Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="text-gray-600 body-font mb-4 border-b-4 border-green-700">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-700 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">MARVEL Study</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact Us
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center  w-full flex-1">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/1280x800"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                MARVEL & miniMARVEL
                <br class="hidden lg:inline-block" />
                IBD Study
              </h1>
              <p class="mb-8 leading-relaxed">
                Mitochondrial Antioxidant therapy to ResolVE InfLammation in
                Ulcerative Colitis
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Participant Information Sheet
                </button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Our previous work suggests that mitochondrial chemical signals
                may be playing a role in keeping inflammation going in
                ulcerative colitis. With this trial, we are investigating the
                use of mitochondrial antioxidants as a treatment for ulcerative
                colitis.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                GWO-TZER HO
              </h2>
              <p class="text-gray-500">Chief Investigator</p>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="lg:w-1/2 w-full mb-6">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Trial Updates
                </h1>
                <div class="h-1 w-20 bg-green-700 rounded"></div>
              </div>
            </div>
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    NEWS
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">27 Aug 2021</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    MARVEL is now open to adults in Edinburgh
                  </h2>
                  <p class="leading-relaxed">
                    We are now open and recruiting adults in Edinburgh. Paediatric recruitment to miniMARVEL will hopefully follow shortly. Glasgow and Dundee to follow. Stay tuned...
                  </p>
                  
                </div>
              </div>
              
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="lg:w-1/2 w-full mb-6">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Participating Centres
                </h1>
                <div class="h-1 w-20 bg-green-700 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1203x503"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Glasgow
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-green-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1204x504"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Edinburgh
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-green-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1205x505"
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
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-6">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Our Sponsors
                </h1>
                <div class="h-1 w-20 bg-green-700 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />

                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jon Moulton Charity Trust
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/721x401"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Centre for Inflammation Research
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/722x402"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    ACCORD
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/723x403"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    NHS Lothian
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="text-gray-600 body-font">
        <div class="container px-5 pt-10 mx-auto border-t-2 border-green-700">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                USEFUL LINKS
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    G-Trac Sample Management
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">RedCap</a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT DETAILS
              </h2>
              <h3 class="font-medium">Email</h3>
              <p class="mb-4">marvelstudy@ed.ac.uk</p>

              <h3 class="font-medium">Address</h3>
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
                    class="text-gray-600 hover:text-gray-800"
                    href="https://clinicaltrials.gov/ct2/show/NCT04276740"
                  >
                    Trial Registration
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Data Protection
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Accessibility</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-green-700 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">MARVEL IBD Study</span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 MARVEL Research Team
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
