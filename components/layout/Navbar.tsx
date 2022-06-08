import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className="z-10 px-3 py-3 text-white bg-gray-900 bg-opacity-10 backdrop-blur-md fixed top-0 w-full">
      <div className="m-container flex flex-wrap justify-center items-center ">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo-full.svg" width={125} height={30} alt="logo" />
          </a>
        </Link>
        {/*<button*/}
        {/*  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden "*/}
        {/*  onClick={() => setExpanded(!isExpanded)}*/}
        {/*>*/}
        {/*  <span className="sr-only">Open main menu</span>*/}
        {/*  <svg*/}
        {/*    width="27"*/}
        {/*    height="16"*/}
        {/*    viewBox="0 0 27 16"*/}
        {/*    fill="none"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      className={`transition-transform ease-linear duration-75 ${*/}
        {/*        isExpanded*/}
        {/*          ? ' rotate-45 -translate-y-4 translate-x-3'*/}
        {/*          : 'rotate-0'*/}
        {/*      }`}*/}
        {/*      d="M0.560976 14H23L22.439 16H0L0.560976 14Z"*/}
        {/*      fill="#D9D9D9"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      className={`${*/}
        {/*        isExpanded ? 'opacity-0' : 'opacity-100'*/}
        {/*      } transition-opacity duration-75`}*/}
        {/*      d="M7.43902 7H25L24.561 9H7L7.43902 7Z"*/}
        {/*      fill="#D9D9D9"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      className={`transition-transform ease-linear duration-75  ${*/}
        {/*        isExpanded ? '-rotate-45 translate-y-[18px]' : 'rotate-0'*/}
        {/*      } `}*/}
        {/*      d="M5.53659 0H27L26.4634 2H5L5.53659 0Z"*/}
        {/*      fill="#D9D9D9"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*</button>*/}
        {/*<div*/}
        {/*  className={`${*/}
        {/*    isExpanded ? ' block' : 'hidden '*/}
        {/*  } w-full md:block md:w-auto`}*/}
        {/*>*/}
        {/*  <ul className="flex flex-col mt-4 text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-y-3">*/}
        {/*    <li>*/}
        {/*      <Link href={'/'}>*/}
        {/*        <a*/}
        {/*          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent "*/}
        {/*          aria-current="page"*/}
        {/*        >*/}
        {/*          About Me*/}
        {/*        </a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link href={'/projects'}>*/}
        {/*        <a*/}
        {/*          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent "*/}
        {/*          aria-current="page"*/}
        {/*        >*/}
        {/*          Projects*/}
        {/*        </a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link href={'/blogs'}>*/}
        {/*        <a*/}
        {/*          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent "*/}
        {/*          aria-current="page"*/}
        {/*        >*/}
        {/*          Blogs*/}
        {/*        </a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
