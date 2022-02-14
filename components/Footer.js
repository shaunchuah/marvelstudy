import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="px-5 pt-10 border-t-2 border-[#008000]">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              USEFUL LINKS
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://samples.musicstudy.uk"
                >
                  G-Trac
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://ecrf.igmm.ed.ac.uk/index.php?action=myprojects"
                >
                  RedCap
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT DETAILS
            </h2>
            <h3 className="font-bold">Email</h3>
            <p className="mb-4">
              <a
                href="mailto:MARVEL.Trial@ed.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#008000]"
              >
                MARVEL.Trial@ed.ac.uk
              </a>
            </p>

            <h3 className="font-bold">Address</h3>
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
            <ul className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://clinicaltrials.gov/ct2/show/NCT04276740"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trial Registration
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://www.ed.ac.uk/about/website/website-terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://www.ed.ac.uk/data-protection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Protection
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://www.ed.ac.uk/about/website/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#008000]"
                  href="https://www.ed.ac.uk/about/website/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 py-6 flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/static/marvellogo.png"
              alt="MARVEL Logo"
              height="51"
              width="109"
            />
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2022 MARVEL Research Team
          </p>
        </div>
      </div>
    </footer>
  );
}
