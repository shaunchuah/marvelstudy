import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-600 text-lg lg:text-base">
      <div className="px-5 pt-10 border-t-2">
        <div className="flex flex-wrap lg:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT DETAILS
            </h2>
            <h3 className="font-bold">Email</h3>
            <p>
              <a
                href="mailto:MARVEL.Trial@ed.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="block lg:inline py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
              >
                MARVEL.Trial@ed.ac.uk
              </a>
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ADDRESS
            </h2>

            <p className="mb-10">
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

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <div className="flex flex-col">
              <a
                className="py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
                href="https://clinicaltrials.gov/ct2/show/NCT04276740"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trial Registration
              </a>
              <a
                className="py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
                href="https://www.ed.ac.uk/about/website/website-terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
              <a
                className="py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
                href="https://www.ed.ac.uk/data-protection"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Protection
              </a>
              <a
                className="py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
                href="https://www.ed.ac.uk/about/website/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                className="py-1 lg:py-0 border rounded-lg lg:border-0 hover:text-[#008000] mb-2 lg:mb-0"
                href="https://www.ed.ac.uk/about/website/accessibility"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 py-6 flex items-center lg:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900"
          >
            <Image
              src="/static/logos/header_highres.png"
              alt="MARVEL Logo"
              height="50"
              width="56"
              priority={true}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <p className="text-center lg:text-left text-sm text-gray-500 lg:ml-4 lg:mt-0 mt-4">
            © 2022 MARVEL &amp; mini-Marvel Research Team <br />
            Last Updated October 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
