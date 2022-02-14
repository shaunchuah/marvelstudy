import Image from "next/image";

export default function Investigators() {
  return (
    <main className="flex flex-col items-center w-full flex-1">
      <section className="px-5 pb-12 md:pb-24 w-full mt-12">
        <div className="flex flex-col">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Study Design
            </h1>
            <div className="h-1 w-20 bg-[#008000] rounded"></div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto py-12">
          <Image
            src="/static/marvel_study_overview.png"
            alt="Marvel Study Design Overview"
            height="650"
            width="1920"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          <div className="border rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Design
            </h2>
            <p>
              MARVEL is a randomised, double-blind, multi-centre trial in
              patients with a moderate flare of ulcerative colitis.
            </p>
          </div>
          <div className="border rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Aims
            </h2>
            <p>
              MARVEL aims to test the validity of mitochondrial antioxidant
              therapy in the context of a UC flare.
            </p>
          </div>
          <div className="border rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Setting
            </h2>
            <p>
              MARVEL will initially open in Edinburgh, Glasgow and Dundee with a
              plan for 20 sites in total across the UK.
            </p>
          </div>
          <div className="border rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Population
            </h2>
            <p>
              MARVEL plans to recruit 250 adult patients. In parallel with our
              paediatric trial MiniMARVEL, this will form the first ever all
              ages IBD trial.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:pb-24 w-full mt-8" id="criteria">
        <div className="flex flex-col">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Inclusion &amp; Exclusion Criteria
            </h1>
            <div className="h-1 w-20 bg-[#008000] rounded"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-4">
          <div className="border  rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Inclusion
            </h2>
            <p>
              MARVEL is a randomised, double-blind, multi-centre trial in
              patients with a moderate flare of ulcerative colitis.
            </p>
          </div>
          <div className="border  rounded p-4">
            <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
              Exclusion
            </h2>
            <p>
              MARVEL aims to test the validity of mitochondrial antioxidant
              therapy in the context of a UC flare.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="px-5 py-24">
          <div className="flex flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Scientific Basis
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
    </main>
  );
}
