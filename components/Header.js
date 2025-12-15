import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    (<header>
      <div className="flex justify-between flex-wrap px-5 p-4 flex-col lg:flex-row items-center border-b-2">
        <div className="flex items-center mb-4 lg:mb-0">
          <Link href="/" className="items-center mr-2 lg:pb-1">

            <Image
              src="/static/logos/header_highres.png"
              alt="MARVEL Logo"
              height="50"
              width="56"
              priority={true}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />

          </Link>
          <span className="rounded-lg uppercase shadow-lg tracking-wider text-center text-xs bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2">
            In follow-up
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 sm:text-xl">
          <Link
            href="/"
            className="flex flex-row items-center gap-1 hover:text-[#008000]">

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>Home
                        
          </Link>
          <Link
            href="/investigators"
            className="flex flex-row items-center gap-1 hover:text-[#008000]">

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>Investigators
                        
          </Link>

          <Link
            href="/results"
            className="flex flex-row items-center gap-1 hover:text-[#008000]">

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>Results
                        
          </Link>
        </nav>
      </div>
    </header>)
  );
}
