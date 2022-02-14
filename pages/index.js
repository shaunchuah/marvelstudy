import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full flex-1">
      <section className="px-4 flex md:flex-row flex-col gap-8 py-12 md:py-24 items-center">
        <div className="md:pl-16 md:w-1/2 flex-none flex flex-col md:items-start md:text-left items-center">
          <div className="pt-8 md:pt-0 w-1/2 md:w-full">
            <Image
              src="/static/marvel_320x150.png"
              alt="MARVEL Logo"
              height="150"
              width="320"
              priority={true}
            />
          </div>
          <p className="pl-2 mt-2 mb-12 md:mb-4 text-center md:text-left leading-relaxed sm:text-2xl text-xl">
            Mitochondrial Antioxidant Therapy to Resolve Inflammation in
            Ulcerative Colitis
          </p>
          <div className="flex flex-row items-center gap-2">
            <Link href="/participants">
              <button className="ml-2 border-2 border-[#008000] bg-[#008000] text-white hover:text-[#008000] hover:bg-green-100 py-2 px-6 rounded text-lg">
                For Participants
              </button>
            </Link>
            <Link href="/investigators">
              <button className="ml-2 border-2 border-[#008000] text-[#008000] hover:bg-green-600 hover:text-white py-2 px-6 rounded text-lg">
                For Investigators
              </button>
            </Link>
          </div>
          <a
            className="p-2 mt-12 md:mt-24 text-center md:text-left text-gray-500 hover:text-[#008000]"
            href="https://www.ed.ac.uk/inflammation-research/research/gut-research-unit"
            target="_blank"
            rel="noopener noreferrer">
            <span className="inline-flex">
              A project by the Gut Research Unit
              <svg
                class="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </span>
            <br />
            Centre for Inflammation Research
            <br />
            University of Edinburgh
          </a>
        </div>
        <div className="">
          <div className="pb-8">
            <div className="bg-white border p-8 rounded-lg shadow">
              <h2 className="text-2xl mb-4">Introducing MARVEL</h2>

              <audio id="marvel_intro" controls className="mb-4">
                <source
                  src="/static/marvel_introduction.mp4"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
              <p>By Lisa Derr, Trial Manager</p>
            </div>
          </div>
          <div className="border p-8 rounded-lg  shadow-lg hover:text-[#008000]  ">
            <a href="/static/marvel_study_overview.png" target="_blank">
              <Image
                src="/static/marvel_study_overview.png"
                alt="Marvel Study Design Overview"
                height="650"
                width="1920"
                priority={true}
              />
              <div className="flex flex-row gap-1 items-center ">
                <div>MARVEL Overview</div>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:py-24">
        <div className="px-0 md:px-16 w-full mx-auto text-center flex flex-col lg:flex-row items-center">
          <div className="lg:mr-24 mb-8 lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-xl sm:max-w-prose">
              I'm delighted to take forward the research findings over the last
              10 years from my scientific team into a human clinical trial. This
              has been a journey involving many scientists, clinicians and also
              our patients. The MARVEL study will provide very much needed data
              to show whether this new treatment approach will work in
              Ulcerative Colitis.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-[#008000] mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-semibold title-font tracking-wider">
              DR GWO-TZER HO
            </h2>
            <p className="text-gray-500">
              Chief Investigator <br /> Centre for Inflammation Research <br />{" "}
              University of Edinburgh
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

      <section className="text-gray-600 body-font">
        <div className="px-5 py-12 md:py-24">
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
        <div className="px-5 py-12 md:py-24">
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
  );
}
