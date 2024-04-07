import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/sanity/typings";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchExperiences from "@/utils/fetchExperiences";
import fetchSkills from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import fetchSocials from "@/utils/fetchSocials";
import React, { useEffect } from "react";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  console.log(skills);

  /*   useEffect(() => {
    const AudioPlayer = () => {
      const audio = new Audio("/CoolingDown.mp3");
      audio.autoplay = true;
      audio.loop = true;
      audio.play().catch((error) => {
        console.log(error);
      });
    };
    AudioPlayer();
  }, []); */

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]"
    >
      <Head>
        <title>Martins Portfolio</title>
      </Head>

      {/* <AudioPlayer /> */}

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 bg-[#F7AB0A] text-white rounded-full filter grayscale
              hover:grayscale-0 cursor-pointer"
              src="/circle-up-regular.svg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = groq`*[_type == "pageInfo"][0]`;
  const pageInfo = await sanityClient.fetch(query);
  const query2 = groq`*[_type == "experiences"][0]`;
  const experiences = await sanityClient.fetch(query2);
  const query3 = groq`*[_type == "skills"][0]`;
  const skills = await sanityClient.fetch(query3);
  const query4 = groq`*[_type == "projects"][0]`;
  const projects = await sanityClient.fetch(query4);
  const query5 = groq`*[_type == "socials"][0]`;
  const socials = await sanityClient.fetch(query5);

  console.log(skills);

  return {
    props: {
      experiences: experiences ? experiences : [],
      pageInfo,
      skills: skills ? skills : [],
      projects: projects ? projects : [],
      socials: socials ? socials : [],
    },
    revalidate: 10,
  };
};
