import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button, TextButton } from '../components/Button';
import { Project, Technology } from '../types';
import {
  courses,
  education,
  experiences,
  projects,
  technologies,
  voluntaries,
} from '../helper/data';
import ExperienceCard from '../components/home/ExperienceCard';
import TechnologyCard from '../components/home/TechnologyCard';
import EducationCard from '../components/home/EducationCard';
import VoluntaryCard from '../components/home/VoluntaryCard';
import Link from 'next/link';
import ContactItem from '../components/home/ContactItem';
import ProjectCard from '../components/project/ProjectCard';
import BlurredBox from '../components/BlurredBox';
import IntersectionObserve from '../components/IntersectionObserve';

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <Layout>
      <LandingSection />
      <div className="mx-2">
        <IntersectionObserve>
          <BriefSection />
        </IntersectionObserve>
        <IntersectionObserve>
          <ProjectSection projects={projects} />
        </IntersectionObserve>
        <IntersectionObserve>
          <ExperienceSection />
        </IntersectionObserve>
        <IntersectionObserve>
          <TechnologySection />
        </IntersectionObserve>
        <IntersectionObserve>
          <EducationSection />
        </IntersectionObserve>
        <IntersectionObserve>
          <VoluntarySection />
        </IntersectionObserve>
        <IntersectionObserve>
          <ContactSection />
        </IntersectionObserve>
        <CreditSection />
      </div>
    </Layout>
  );
};
const AnimatingBlocks = () => (
  <>
    <BlurredBox
      size={{ width: '4rem', height: '3rem' }}
      color={'#1b84ff'}
      range={10}
      position={{ x: 0, y: 70 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1ef6bd'}
      range={300}
      position={{ x: 80, y: 22 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '3rem' }}
      color={'#1b84ff'}
      position={{ x: 55, y: 120 }}
    />
    <BlurredBox
      size={{ width: '5rem', height: '5rem' }}
      color={'#4655ff'}
      position={{ x: 70, y: 350 }}
    />
    <BlurredBox
      size={{ width: '3.5rem', height: '3rem' }}
      color={'#13ffbf'}
      position={{ x: 30, y: 230 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1ef6bd'}
      position={{ x: 90, y: 480 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1078ec'}
      position={{ x: 20, y: 470 }}
    />
    <BlurredBox
      size={{ width: '3rem', height: '3rem' }}
      color={'#1168e8'}
      position={{ x: 80, y: 590 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#14d7a4'}
      position={{ x: 0, y: 600 }}
    />
  </>
);
const LandingSection = () => (
  <section className="flex justify-center items-center gap-10 mx-auto mt-18 md:mt-28 relative flex-wrap lg:flex-nowrap">
    <AnimatingBlocks />
    <IntersectionObserve>
      <Image
        src="/assets/image/profile.svg"
        width={420}
        height={450}
        objectFit="cover"
        alt="profile"
      />
    </IntersectionObserve>
    <IntersectionObserve>
      <div className="max-w-xl lg:mt-12 mx-2">
        <p className="font-light uppercase">Hello there, I’m</p>
        <h1 className="font-black text-4xl my-3">ZEYAR PAING</h1>
        <p className="max-w-lg text-lg font-light leading-[28px]">
          A creative & passionate Front-End Developer delivering efficient &
          optimized solutions, Skilled in designing, developing and refactoring
          multiple web-based applications incorporating a range of technologies.
        </p>
        <div className="flex gap-8 items-center mt-5">
          <Button
            onClick={() =>
              window.open(
                'https://www.figma.com/proto/bejHkqD4rOQRzkkvHiZKqi/Resume?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1',
                '_blank',
              )
            }
            type="primary"
          >
            Resume
          </Button>
          <TextButton type="primary">
            <Link href="#contact">
              <a>Contact me</a>
            </Link>
          </TextButton>
        </div>
      </div>
    </IntersectionObserve>
  </section>
);
const BriefSection = () => (
  <section className="mt-16 mb-12">
    <h2 className="section-header mb-2">Brief about my career</h2>
    <div>
      <p className="text-gray-100 career-section">
        I was a UI/UX designer before I dived into web development. I really
        loves designing UI and making it live.
        {/*  After 3 years of experience*/}
        {/*including freelance and 2+ years of industry experience in Frontend*/}
        {/*Development,*/}
        I&apos;m delivering robust, efficient & elegant interfaces with
        considerations of <b>Performance</b>, <b>Accessibility</b>,{' '}
        <b>User Experience Laws</b> and <b>Responsiveness</b>.
      </p>
    </div>
  </section>
);
const ProjectSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-12 ">
      <h2 className="section-header mb-7">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 project-container">
        {projects.map((project, idx) => (
          <ProjectCard showDots={true} key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => (
  <section className="my-12 ">
    <h2 className="section-header mb-5">Work Experience</h2>
    <div className="flex gap-8 flex-col">
      {experiences.map((exp, idx) => (
        <ExperienceCard experience={exp} key={idx} />
      ))}
    </div>
  </section>
);

const TechnologySection = () => {
  let group: { specialized: Technology[]; others: Technology[] } = {
    specialized: [],
    others: [],
  };
  group = technologies.reduce((p, v) => {
    if (v.specialized) {
      p.specialized.push(v);
    } else {
      p.others.push(v);
    }
    return p;
  }, group);

  return (
    <section className="my-12">
      <h2 className="section-header mb-2">Technologies</h2>
      <p className="uppercase text-gray-400 text-sm font-semibold mb-4">
        Specialized in
      </p>
      <div className="flex flex-wrap gap-4">
        {group.specialized.map((tech, idx) => (
          <TechnologyCard key={idx} technology={tech} />
        ))}
      </div>
      <p className="uppercase text-gray-400 text-sm font-semibold mb-4 mt-6">
        Familiar with
      </p>
      <div className="flex flex-wrap gap-4">
        {group.others.map((tech, idx) => (
          <TechnologyCard key={idx} technology={tech} />
        ))}
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="my-12">
      <h2 className="section-header mb-5">Education</h2>
      <div className="flex gap-8 flex-col">
        {education.map((edu, idx) => (
          <EducationCard education={edu} key={idx} />
        ))}
      </div>
      <p className="uppercase text-gray-400 text-sm font-semibold mb-4 mt-6">
        Certificate Courses
      </p>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {courses.map((name, idx) => (
          <div
            className="bg-gray-900 bg-opacity-80 rounded-3xl border border-gray-700 px-5 py-4 flex flex-col items-end gap-y-5"
            key={idx}
          >
            <Image src="/assets/logos/coursera.svg" width={40} height={40} />
            <h4 className="font-bold text-xs ">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const VoluntarySection = () => (
  <section className="my-12">
    <h2 className="section-header mb-5">Voluntary Activities</h2>
    <div className="flex gap-8 flex-wrap">
      {voluntaries.map((vol, idx) => (
        <VoluntaryCard voluntary={vol} key={idx} />
      ))}
    </div>
  </section>
);

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle');

  async function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitStatus('loading');
    fetch('/api/dynamo', {
      body: JSON.stringify({ message: message, email: email }),
      method: 'PUT',
    })
      .then((res) => (res.status != 200 ? Promise.reject(res) : res))
      .then((res) => res.json())
      .then((res) => {
        console.log('message res : ', res);
        setSubmitStatus('ok');
      })
      .catch((err) => {
        console.warn('message err : ', err);
        setSubmitStatus('err');
      })
      .finally(() => {
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 1000);
      });
  }

  return (
    <section
      id="contact"
      className="my-24 flex justify-between flex-wrap gap-y-6"
    >
      <div className="max-w-md">
        <h2 className="section-header mb-3">Contact</h2>
        <ContactItem
          link="tel:+959783024165"
          icon="phone.svg"
          display="+959 78302 4165"
        />
        <ContactItem
          link="mailto:zaynepaing@gmail.com"
          icon="mail.svg"
          display="zaynepaing@gmail.com"
        />
        <ContactItem
          link="https://github.com/ZeyarPaing"
          icon="github.svg"
          display="ZeyarPaing"
        />
        <ContactItem
          link="https://linkedin.com/in/zeyar-paing"
          icon="linkedin.svg"
          display="zeyar-paing"
        />
      </div>

      <div className="w-full sm:max-w-md sm:w-auto">
        <h2 className="section-header mb-3">Drop a line</h2>
        <form onSubmit={handleSendMessage}>
          <label className="font-secondary text-gray-400 font-semibold text-sm">
            Message
          </label>
          <textarea
            required={true}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[10rem] resize-y px-5 py-4 rounded-xl mt-1 text-sm"
            placeholder="Hi there! "
          />
          <label className="font-secondary text-gray-400 font-semibold text-sm block mb-1 mt-1.5">
            Email
          </label>
          <input
            required={true}
            type="email"
            placeholder="yourname@company.com"
            className="px-4 py-3 rounded-xl w-full sm:w-auto text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="block mt-4 sm:m-0 sm:pl-3 sm:inline-block relative">
            <Button
              type="primary"
              className="w-full sm:w-auto"
              status={submitStatus}
            >
              Send
            </Button>
          </span>
        </form>
      </div>
    </section>
  );
};

const CreditSection = () => {
  return (
    <section className="mb-16 mt-32 flex justify-center">
      <div className="flex md:items-center items-start flex-col md:flex-row gap-3 mt-2 px-8 py-6 rounded-2xl border border-gray-900 shadow-2xl shadow-[#020f25] ">
        <img src="/logo-mono.svg" className="w-10 h-10" />
        <p className="text-gray-300">
          This awesome logo is designed by a talented designer,{' '}
          <br className="sm:block md:hidden" />
          <Link
            target="_blank"
            href="https://www.behance.net/kaungsithu6/projects"
          >
            <a
              target="_blank"
              className="hover:underline text-cyan-400 font-semibold"
            >
              Kaung Sithu
            </a>
          </Link>
          <small className="text-sm text-gray-400"> [Profile on Behance]</small>
        </p>
      </div>
    </section>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { projects },
  };
};
export default Home;
