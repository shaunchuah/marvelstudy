import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col py-2">
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

      <header class="text-gray-600 body-font mb-4 border-b-4 border-green-700">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-gray-900 h-10"
            href="/"
          >
            <Image
              src="/static/marvellogo.png"
              alt="MARVEL Logo"
              height="50"
              width="110"
            />
          </a>
          <nav class="mt-4 md:mt-0 md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
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
          </span>
        </div>
      </header>

      <main className="flex flex-col items-center  w-full flex-1">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/1280x800"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                MARVEL
              </h1>
              <p class="mb-8 leading-relaxed text-xl">
                Mitochondrial Antioxidant Therapy to <br />
                Resolve Inflammation in Ulcerative Colitis
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Participant Information Sheet
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
              <p class="leading-relaxed text-xl">
                In this randomised controlled trial, we are investigating the
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
                    We are now open and recruiting adults in Edinburgh.
                    Paediatric recruitment to miniMARVEL will hopefully follow
                    shortly. Glasgow and Dundee to follow. Stay tuned...
                  </p>
                </div>
              </div>

              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    NEWS
                  </span>
                  <span class="text-sm text-gray-500">30 Aug 2020</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    MHRA Approval Granted
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
        <div class="container px-5 pt-10 mx-auto border-t-2 border-green-700">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                USEFUL LINKS
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://samples.musicstudy.uk"
                  >
                    G-Trac Sample Management
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
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
              <h3 class="font-medium">Email</h3>
              <p class="mb-4">
                <a href="mailto:marvelstudy@ed.ac.uk">marvelstudy@ed.ac.uk</a>
              </p>

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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trial Registration
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://www.ed.ac.uk/about/website/website-terms-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://www.ed.ac.uk/data-protection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Data Protection
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://www.ed.ac.uk/about/website/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
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
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/static/marvellogo.png"
                alt="MARVEL Logo"
                height="50"
                width="110"
              />
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
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
