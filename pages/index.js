import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import NameCard from "../components/NameCard";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <SectionWrapper id="hero">
        <div className="flex lg:flex-row flex-col gap-8 items-center">
          <div className="lg:pl-16 lg:w-1/2 flex-none flex flex-col lg:items-start lg:text-left items-center">
            <div className="pt-8 lg:pt-0 w-1/2 lg:w-full">
              <Image
                src="/static/marvel_320x150.png"
                alt="MARVEL Logo"
                height="150"
                width="320"
                priority={true}
              />
            </div>
            <p className="pl-2 mt-2 mb-12 lg:mb-4 text-center lg:text-left leading-relaxed sm:text-2xl text-xl">
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
              className="p-2 mt-12 md:mt-16 text-center md:text-left text-gray-500 hover:text-[#008000]"
              href="https://www.ed.ac.uk/inflammation-research/research/gut-research-unit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex">
                A project by the Gut Research Unit
                <svg
                  className="ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </span>
              <br />
              Centre for Inflammation Research
              <br />
              University of Edinburgh
            </a>
          </div>
          <div className="lg:px-8">
            <div className="pb-8">
              <div className="bg-white border p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start">
                <div className="w-1/3 flex-none">
                  <Image
                    src="/static/podcast.jpg"
                    alt="Lisa Derr introducing MARVEL"
                    height="1024"
                    width="1024"
                    priority={true}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-xl">Introducing MARVEL</h2>
                  <p className="mb-6 text-sm">By Lisa Derr, Trial Manager</p>
                  <audio id="marvel_intro" controls className="mb-4">
                    <source
                      src="/static/marvel_introduction.mp4"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
            <div className="border p-8 rounded-lg  shadow-lg hover:text-[#008000]  ">
              <Image
                src="/static/marvel_study_overview.png"
                alt="Marvel Study Design Overview"
                height="650"
                width="1920"
                priority={true}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="intro">
        <div className="px-0 lg:px-16 w-full mx-auto text-center flex flex-col lg:flex-row items-center">
          <div className="lg:mr-24 mb-8 lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg lg:text-xl lg:max-w-prose">
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
          <div className="w-1/2 lg:flex-none">
            <Image
              src="/static/gth.jpg"
              alt="Gwo Tzer Ho"
              height="600"
              width="400"
              className="rounded-lg"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="sponsors">
        <SectionHeader title="Our Sponsors" />
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
      </SectionWrapper>

      <SectionWrapper id="centres">
        <SectionHeader title="Current Participating Centres" />
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden mb-2">
              <Image
                src="/static/glasgow.jpg"
                alt="Glasgow"
                height="667"
                width="1000"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900">
              Glasgow
            </h2>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden mb-2">
              <Image
                src="/static/edinburgh.jpg"
                alt="Edinburgh"
                height="667"
                width="1000"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900">
              Edinburgh
            </h2>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden mb-2">
              <Image
                src="/static/dundee.jpg"
                alt="Dundee"
                height="667"
                width="1000"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900">
              Dundee
            </h2>
          </div>
        </div>
        <div className="text-center font-medium text-2xl py-4 lg:py-6 mt-8 border-2 border-[#008000] text-[#008000] rounded-lg">
          More centres to follow... Stay tuned.
        </div>
      </SectionWrapper>
      <SectionWrapper id="team">
        <SectionHeader title="About Us" />
        <div className="grid lg:grid-cols-3 gap-4">
          <NameCard name="Dr Gwo-Tzer Ho" position="Chief Investigator" />
          <NameCard
            name="Professor Chris Probert"
            position="Chair, Trial Steering Committee"
          />
          <NameCard
            name="Professor Jonathan Rhodes"
            position="Chair, Data Monitoring Committee"
          />
          <NameCard
            name="Dr Rebecca Hall"
            position="Clinical Research Fellow"
          />
          <NameCard
            name="Dr Shaun Chuah"
            position="Clinical Research Fellow"
          />
          <NameCard name="Beena Pouloose" position="Clinical Research Nurse" />
          <NameCard name="Athena Oddy" position="Clinical Research Nurse" />
          <NameCard name="Lisa Derr" position="Trial Manager" />
          <NameCard name="Katherine Lewis" position="Trial Manager" />
        </div>
      </SectionWrapper>
    </main>
  );
}
