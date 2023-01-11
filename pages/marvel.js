import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="introduction">
          <SectionHeader title="Marvel Study Overview" />
          <div className="flex justify-center">
            <div className="lg:w-2/3 border p-6 rounded-lg shadow mb-8">
              <Image
                src="/static/marvel_study_overview.png"
                alt="Marvel Study Design Overview"
                height="650"
                width="1920"
                priority={true}
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="centres">
          <SectionHeader title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-8 mb-4">

            {/* Center Card */}
            <div className="border shadow rounded-lg px-6 py-4 text-left">
              <h2 className="text-2xl font-medium mb-4 mt-2">Glasgow</h2>
              <div className="mb-4">
                <Image
                  src="/static/glasgow.jpg"
                  alt="Glasgow"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <p>Queen Elizabeth University Hospital</p>
              <p>Gartnavel General Hospital</p>
            </div>
            {/* End Center Card */}

            {/* Center Card */}
            <div className="border shadow rounded-lg px-6 py-4 text-left">
              <h2 className="text-2xl font-medium mb-4 mt-2">Edinburgh</h2>
              <div className="mb-4">
              <Image
                  src="/static/edinburgh.jpg"
                  alt="Edinburgh"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <p>Western General Hospital</p>
            </div>
            {/* End Center Card */}


            {/* Center Card */}
            <div className="border shadow rounded-lg px-6 py-4 text-left">
              <h2 className="text-2xl font-medium mb-4 mt-2">Dundee</h2>
              <div className="mb-4">
              <Image
                  src="/static/dundee.jpg"
                  alt="Dundee"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <p>Ninewells Hospital</p>
            </div>
            {/* End Center Card */}

            {/* Center Card */}
            <div className="border shadow rounded-lg px-6 py-4 text-left">
              <h2 className="text-2xl font-medium mb-4 mt-2">London</h2>
              <div className="mb-4">
              <Image
                  src="/static/london.jpg"
                  alt="London"
                  height="1080"
                  width="1620"
                  className="rounded-lg"
                />
              </div>
              <p>Chelsea and Westminster Hospital</p>
            </div>
            {/* End Center Card */}

            
          </div>
        </SectionWrapper>
        <SectionWrapper id="downloads">
          <SectionHeader title="Participant Information Sheet" />
          <object
            data="/static/files/marvel_patient_info_v5.0.pdf"
            type="application/pdf"
            width="100%"
            height="1080px"
          >
            This browser does not support PDFs. Please download the PDF to view
            it:{" "}
            <a
              href="/static/files/marvel_patient_info_v5.0.pdf"
              target="_blank"
            >
              Download Patient Information Sheet.
            </a>
          </object>
        </SectionWrapper>
        <SectionWrapper id="downloads">
          <SectionHeader title="Downloads" />
          <div className="text-xl">
            <a
              href="/static/files/marvel_patient_info_v5.0.pdf"
              target="_blank"
              className="flex flex-row items-center hover:text-[#008000]"
            >
              <svg
                className="w-8 h-8 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Participant Information Sheet v5.0
            </a>
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
