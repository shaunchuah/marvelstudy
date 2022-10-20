import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="centres">
          <SectionHeader title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-8 mb-4">
            <div>
              <div>
                <Image
                  src="/static/glasgow.jpg"
                  alt="Glasgow"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-medium title-font">Glasgow</h2>
            </div>
            <div>
              <div>
                <Image
                  src="/static/edinburgh.jpg"
                  alt="Edinburgh"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-medium title-font">Edinburgh</h2>
            </div>
            <div>
              <div>
                <Image
                  src="/static/dundee.jpg"
                  alt="Dundee"
                  height="667"
                  width="1000"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-medium title-font">Dundee</h2>
            </div>
          </div>
          <div className="text-center font-medium text-xl lg:text-2xl py-4 px-4 lg:py-6 mt-8 border-2 border-[#008000] text-[#008000] rounded-lg">
            More centres to follow... Stay tuned.
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
