import MotionPage from "../components/MotionPage";

export default function Contact() {
  return (
    <MotionPage>
      <section className="px-5 pb-12 md:pb-24 w-full mt-12">
        <div className="flex flex-col">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Contact
            </h1>
            <div className="h-1 w-20 bg-[#008000] rounded"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-content-center text-2xl">
          <div className="text-xl mb-2">
            For any trial-related queries, please email
          </div>
          <div>
            <a
              className="flex flex-row items-center hover:text-[#008000]"
              href="mailto:MARVEL.Trial@ed.ac.uk"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                class="w-8 h-8 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              MARVEL.Trial@ed.ac.uk
            </a>
          </div>
        </div>
      </section>
    </MotionPage>
  );
}
