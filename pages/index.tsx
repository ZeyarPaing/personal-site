import type {NextPage} from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import Layout from '../components/layout/Layout';
import {Button, TextButton} from '../components/Button';
import Project from "./projects/_components/Project";

const Home: NextPage = () => {
  return (
      <Layout>
        <section className="flex justify-center items-center gap-10 mx-auto mt-28 relative flex-wrap lg:flex-nowrap">
          <div className="basset blur-[70px] w-16 h-16 bg-[#06B1D7] absolute top-44 left-0"></div>
          <div className="basset blur-[80px] w-16 h-16 bg-primary absolute top-20 right-[15%]"></div>
          <Image
              src="/assets/image/profile.svg"
              width={420}
              height={450}
              objectFit="cover"
              alt="profile"
          />
          <div className="max-w-xl lg:mt-12 mx-2">
            <p className="font-light uppercase">Hello there, I’m</p>
            <h1 className="font-black text-4xl my-3">ZEYAR PAING</h1>
            <p className="max-w-lg text-lg font-light leading-[28px]">
              A frontend enthusiast who loves building efficient & usable
              interfaces with knowledge of design creative UI/UX and implement it
              to make it alive.
            </p>
            <div className="flex gap-8 items-center mt-5">
              <Button type="primary">Resume</Button>
              <TextButton type="primary">Contact me</TextButton>
            </div>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Brief about my career</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Featured Projects</h2>
          <div>
            <Project/>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Work Experience</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Technologies</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Education</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Voluntary Activities</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
        <section className="my-16">
          <h2 className="section-header mb-2">Contact</h2>
          <div>
            <p className="text-gray-100">
              I was a graphic designer before I jump into dev ecosystem. At first,
              I switched to UI/UX design and then learned fundamentals of computer
              sicence and web development. Now, I’m a frontend developer who
              builds UIs for both mobile and web in elegant and efficient way.
            </p>
          </div>
        </section>
      </Layout>
  );
};

export default Home;
