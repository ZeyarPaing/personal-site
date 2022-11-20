import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope, Space_Grotesk } from '@next/font/google';
// import localFont from '@next/font/local';

// const visby = localFont({
//   src: [
//     {
//       path: '../styles/fonts/VisbyThin.woff2',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyExtrabold.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyBold.woff2',
//       weight: 'bold',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyHeavy.woff2',
//       weight: '900',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyLight.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyMedium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbySemibold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/VisbyRegular.woff2',
//       weight: 'normal',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-visby',
// });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-visby',
});

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-manrope',
});

function MyApp({ Component, pageProps }: AppProps) {
  //if production no console
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};
  }
  return (
    <div
      className={`${spaceGrotesk.variable} ${manrope.variable} font-primary`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
