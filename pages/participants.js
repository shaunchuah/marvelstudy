import MotionPage from "../components/MotionPage";

export default function Participants() {
  return (
    <MotionPage>
      <section className="px-5 py-6 md:py-12 w-full">
        <div className="flex flex-col">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Participant Information Sheet
            </h1>
            <div className="h-1 w-20 bg-[#008000] rounded"></div>
          </div>
        </div>

        <object
          data="/static/files/marvel_patient_info_v5.0.pdf"
          type="application/pdf"
          width="100%"
          height="1080px"
        >
          This browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a href="/static/files/marvel_patient_info_v5.0.pdf" target="_blank">
            Download Patient Information Sheet.
          </a>
        </object>

        <div className="mt-8">
          <div className="flex flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Downloads
              </h1>
              <div className="h-1 w-20 bg-[#008000] rounded"></div>
            </div>
          </div>
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
        </div>
      </section>
    </MotionPage>
  );
}
