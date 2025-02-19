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
          <span className="rounded-lg uppercase shadow-lg tracking-wider text-center text-xs bg-gradient-to-r from-emerald-500 to-green-700 text-white px-4 py-2">
            Recruiting Now
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
            href="/marvel"
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>Marvel
                        
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
          <Link
            href="/contact"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>Contact
                        
          </Link>
        </nav>
      </div>
    </header>)
  );
}
