import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { FormEventHandler, useCallback, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button, TextButton } from '../components/Button';
import projectCard from '../components/project/ProjectCard';
import { Project, Technology } from '../types';
import {
  courses,
  education,
  experiences,
  projects,
  technologies,
  voluntaries,
} from '../helper/data';
// import { getAbsoluteUrl } from '../helper';
import ExperienceCard from '../components/home/ExperienceCard';
import TechnologyCard from '../components/home/TechnologyCard';
import EducationCard from '../components/home/EducationCard';
import VoluntaryCard from '../components/home/VoluntaryCard';
import Link from 'next/link';
import ContactItem from '../components/home/ContactItem';
import ProjectCard from '../components/project/ProjectCard';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <Layout>
      <LandingSection />
      <div className="mx-2">
        <BriefSection />
        <ProjectSection projects={projects} />
        <ExperienceSection />
        <TechnologySection />
        <EducationSection />
        <VoluntarySection />
        <ContactSection />
      </div>
    </Layout>
  );
};

const LandingSection = () => (
  <section className="flex justify-center items-center gap-10 mx-auto mt-18 md:mt-28 relative flex-wrap lg:flex-nowrap">
    <div
      className="basset blur-[70px] w-16 h-16 bg-[#06B1D7] absolute t
    op-44 left-0"
    ></div>
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
        A creative Front-End Developer delivering efficient & optimized
        solutions, Skilled in designing, developing and refactoring multiple
        web-based applications incorporating a range of technologies.
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
  </section>
);
const BriefSection = () => (
  <section className="mt-16 mb-12">
    <h2 className="section-header mb-2">Brief about my career</h2>
    <div>
      <p className="text-gray-100">
        I was a UI/UX designer before I dived into web development. I really
        loves designing UI and making it live. After 2+ years of experience in
        Frontend Development, I&apos;m delivering robust, efficient & elegant
        interfaces with considerations of Accessibility, User Experience Laws
        and Responsiveness.
      </p>
    </div>
  </section>
);
const ProjectSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-12 ">
      <h2 className="section-header mb-7">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 project-container">
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

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    let token = '';
    try {
      token = await executeRecaptcha('submit');
    } catch (e) {
      console.error('Recaptcha Error');
    }
    return token;
  };

  async function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitStatus('loading');
    const token = await handleReCaptchaVerify();
    if (!token) return;
    fetch('/api/dynamo', {
      body: JSON.stringify({ message: message, email: email, captcha: token }),
      method: 'PUT',
    })
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
          link="https://mm.linkedin.com/in/zeyar-paing-713854172"
          icon="linkedin.svg"
          display="zeyar-paing-713854172"
        />
      </div>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
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
                <span className="absolute -top-2.5 -right-0.5">
                  <span className="inline-flex h-[10px] w-[10px] relative ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                    <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-emerald-300" />
                  </span>
                </span>
              </Button>
            </span>
          </form>
        </div>
      </GoogleReCaptchaProvider>
    </section>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  // const projectRes: Response = await fetch(getAbsoluteUrl('/projects'));
  // const projects: Project[] = await projectRes.json();
  return {
    props: { projects },
  };
};
export default Home;
