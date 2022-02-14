import MotionPage from "../components/MotionPage";

export default function Participants() {
  return (
    <MotionPage>
      <section className="px-5 pb-12 md:pb-24 w-full mt-12">
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
          height="1080px">
          This browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a href="/static/files/marvel_patient_info_v5.0.pdf" target="_blank">
            Download Patient Information Sheet.
          </a>
        </object>
      </section>
    </MotionPage>
  );
}
