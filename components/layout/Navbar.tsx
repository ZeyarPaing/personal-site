import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TransitionRender from 'components/shared/TransitionRender';
import { navItems } from 'data';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className="z-10 px-3 py-3 text-white bg-darkblue bg-opacity-60 backdrop-blur-3xl fixed top-0 w-full">
      <div className="m-layout flex flex-wrap justify-between items-center ">
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.svg" width={125} height={30} alt="logo" />
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden "
          onClick={() => setExpanded(!isExpanded)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transition-transform ease-linear fill-primary-light duration-75 ${
                isExpanded
                  ? 'rotate-45 -translate-y-3 translate-x-[14px]'
                  : 'rotate-0'
              }`}
              d="M0.560976 14H23L22.439 16H0L0.560976 14Z"
            />
            <path
              className={`${
                isExpanded ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-75 fill-primary-light`}
              d="M7.43902 7H25L24.561 9H7L7.43902 7Z"
            />
            <path
              className={`transition-transform ease-linear fill-primary-light duration-75 ${
                isExpanded ? '-rotate-45 translate-y-[18px]' : 'rotate-0'
              } `}
              d="M5.53659 0H27L26.4634 2H5L5.53659 0Z"
            />
          </svg>
        </button>
        <TransitionRender
          render={isExpanded}
          className="grid place-items-center md:block md:opacity-100 hidden h-screen md:h-auto opacity-0 transition-transform transition-opacity origin-top duration-300 w-full md:block md:w-auto"
          renderClassName="opacity-100"
          hiddenClassName="opacity-0"
        >
          <ul className="flex flex-col mt-4 text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-y-5 w-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent "
                  aria-current="page"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </TransitionRender>
      </div>
    </nav>
  );
};

export default Navbar;
