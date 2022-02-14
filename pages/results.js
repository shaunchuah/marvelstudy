import MotionPage from "../components/MotionPage";

export default function Results() {
  return (
    <MotionPage>
      <section className="px-5 pb-12 md:pb-24 w-full mt-12">
        <div className="flex flex-col">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Results
            </h1>
            <div className="h-1 w-20 bg-[#008000] rounded"></div>
          </div>
        </div>
        <div className="flex justify-center text-xl items-center h-72">
          Results will be released here when available.
        </div>
      </section>
    </MotionPage>
  );
}
