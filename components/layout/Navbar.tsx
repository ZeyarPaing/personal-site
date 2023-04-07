import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navItems } from 'data/app-data';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <nav
      className={`${
        isExpanded ? 'bg-darkblue/50 backdrop-blur-md' : ''
      } fixed top-0 left-1/2 -translate-x-1/2 md:bg-transparent md:backdrop-blur-0 md:relative md:translate-x-0 md:left-0 z-50 py-3 pt-6 md:pt-10 text-white  rounded-b-xl md:rounded-t-xl rounded-t-none m-layout !px-0 w-full`}
    >
      <div className="m-layout flex flex-wrap justify-between items-center relative">
        <Link
          aria-label="Go to home page"
          aria-current={router.pathname === '/' ? 'page' : undefined}
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo-full.svg"
            width={125}
            height={30}
            alt="personal logo"
          />
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden "
          onClick={() => {
            document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
            setExpanded(!isExpanded);
          }}
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
        <section
          className={`${
            isExpanded
              ? 'opacity-100 visible h-screen'
              : 'invisible opacity-0 h-0'
          } grid place-items-center md:block md:translate-x-0 md:visible md:h-auto md:opacity-100 transition-opacity duration-300 w-full md:w-auto`}
        >
          <ul className="flex flex-col mt-4 text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-y-5 w-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent "
                  aria-current={
                    router.pathname === item.url ? 'page' : undefined
                  }
                  href={item.url}
                >
                  {item.name}{' '}
                  {item.beta && <code className="bg-blue-500">beta</code>}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/*<div className="absolute inset-x-0 top-full h-px transition bg-white "></div>*/}
    </nav>
  );
};

export default Navbar;
