"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Image } from "@nextui-org/image";
import professionalheadshot from "@/images/professionalheadshot-modified.png";
import skuhuntlogo from "@/images/SKUhunt-logo.svg";
import hackwellnesslogo from "@/images/hackwellness-logo.png";
import rewiredmindlogo from "@/images/rewired-mind.png";
import CapitalOneLogo from "@/images/Capital-One-logo.png";
import SandiaLogo from "@/images/sandia-logo.svg";
import AWSLogo from "@/images/aws-logo.jpg";
import Location from "@/components/icons/Location";
import Email from "@/components/icons/Email";
import Linkedin from "@/components/icons/Linkedin";
import { ExperienceItem } from "@/components/ExperienceItem";
import { EducationItem } from "@/components/EducationItem";
import UIUCLogo from "@/images/university-of-illinois-logo.svg";
import Download from "@/components/icons/Download";
import { CertificationsItem } from "@/components/CertificationsItems";
import { ProjectsItem } from "@/components/ProjectsItem";
import { Button } from "@nextui-org/button";

function ResumePage() {
  const experiences = [
    {
      logo: skuhuntlogo.src,
      title: "Co-Founder & CTO",
      company: "SKUhunt",
      location: "New York, NY",
      period: "Sep 2024 - Present",
      description:
        "Leading the technical vision and development of SKUhunt, a B2B SaaS platform that helps retailers optimize their inventory management and pricing strategies.",
      achievements: [
        "Engineered a real-time profit and loss analytics platform for TikTok sellers, ensuring 99.9% uptime while achieving sub-second latency for up to 15 transactions per second.",
        "Designed and optimized SQL database schema to support real-time financial calculations, delivering accuratedaily profit and loss reports for TikTok sellers while reducing query execution time by 30%.",
        "Integrated TikTok API to handle requests and provide seamless data updates, processing over 40,000 transactions per month with 98% data accuracy.",
      ],
    },
    {
      logo: CapitalOneLogo.src,
      title: "Software Engineer",
      company: "Capital One",
      location: "New York, NY",
      period: "Aug 2021 - Present",
      description:
        "Developed and maintained scalable microservices using Java and Spring Boot, improving system reliability and performance",
      achievements: [
        "Achieved $3.1M in AWS cost savings by collaborating with 5 teams to overhaul design patterns, driving efficiency and scalability through tailored recommendations and implementations across S3, EC2, RDS, and ECS.",
        "Designed a scalable system mapping organizations to teams, creating API endpoints and a AWS Fargate stream listener to track changes, supporting seamless updates for 1000+ teams.",
        "Implemented a pull-request scanning system in GitHub Checksuite using Python to enforce compliance and prevent unauthorized IAM and S3 policy changes, enhancing policy governance and reducing errors by 27%.",
      ],
    },
    {
      logo: CapitalOneLogo.src,
      title: "Associate Software Engineer",
      company: "Capital One",
      location: "Plano, TX",
      period: "Aug 2020 - Aug 2021",
      description:
        "Developed and maintained scalable microservices using Java and Spring Boot, improving system reliability and performance",
      achievements: [
        "Decoupled a monolithic loan decision-making system into modular microservices using Java Spring Boot and Jersey, enhancing scalability and reducing processing time to under 1 second per request.",
        "Delivered a core microservice to non-production environments in under two weeks, accelerating the rollout of customer-facing features.",
        "Enhanced API security by designing and implementing three iterations of Proof-of-Possession (PoP) Tokenvalidation, safeguarding sensitive customer data and preventing unauthorized access.",
      ],
    },
    {
      logo: SandiaLogo.src,
      title: "Software Engineer Intern",
      company: "Sandia National Laboratories",
      location: "Urbana Champaign, IL",
      period: "Jun 2019 - Aug 2019",
      description:
        "Developed and maintained scalable microservices using Java and Spring Boot, improving system reliability and performance",
      achievements: [
        "Enhanced outdated classification algorithms for data image processing by implementing a CNN image classifier,achieving up to 78% classification fidelity across groups and subgroups.",
        "Collaborated with a team of 4 engineers to analyze critical time series data and graph correlations using Pyplot, improving data visualization accuracy and insights.",
      ],
    },
  ];

  const education = [
    {
      logo: UIUCLogo.src,
      school: "University of Illinois at Urbana-Champaign",
      degree: "Bachelor of Science in Computer Science and Mathematics",
      location: "Urbana Champaign, IL",
      period: "2017 - 2020",
      gpa: "3.04/4.0",
      coursework: [
        "Algorithms & Models of Computation",
        "Systems Programming",
        "Graph Theory",
        "Data Structures",
        "Discrete Structures",
        "Numerical Analysis",
        "Numerical Methods",
      ],
    },
    // Add more education items here...
  ];

  const certifications = [
    {
      logo: AWSLogo.src,
      certification: "AWS Certified Solutions Architect Associate",
      company: "Amazon Web Services",
      period: "2024",
    },
  ];

  const projects = [
    {
      logo: skuhuntlogo.src,
      title: "SKUhunt",
      position: "Co-Founder & CTO",
      period: "Sep 2024 - Present",
      description:
        "Engineered a real-time profit and loss analytics platform for TikTok sellers, ensuring 99.9% uptime while achieving sub-second latency for up to 15 transactions per second.",
      technologies: ["React", "Next.js", "Neon", "Firebase"],
      link: "https://www.skuhunt.com//",
    },
    {
      logo: rewiredmindlogo.src,
      title: "Rewired Mind",
      position: "Co-Founder & CTO",
      period: "2024 - 2024",
      description:
        "Launched an AI-powered mental health app leveraging Langchain, Pinecone, and OpenAI, delivering personalized stress management techniques that improved stress levels by 15% for early users within 30 days.",
      technologies: [
        "React",
        "Next.js",
        "Langchain",
        "OpenAI",
        "Pinecone",
        "Firebase",
      ],
      link: "https://rewiredmind.vercel.app/",
    },
    {
      logo: hackwellnesslogo.src,
      title: "Hack Wellness",
      position: "Co-Founder & CTO",
      period: "2023 - 2024",
      description:
        "Wellness blog for health and fitness enthusiasts to learn about the latest trends and techniques to improve their longevity and quality of life.",
      technologies: ["React", "Next.js", "Tailwind", "TypeScript", "Firebase"],
      link: "https://www.hack-wellness.com/",
    },
    // Add more projects here...
  ];

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - 1/4 width */}
        <div className="md:w-1/4 flex flex-col gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader className="flex justify-center">
              <Image
                className="p-2"
                src={professionalheadshot.src}
                alt="Professional Headshot"
                style={{ width: "100%", maxWidth: "240px", height: "auto" }}
              />
            </CardHeader>
            <CardBody>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Sagar Desai</h1>
                <span className="ml-2 w-4 h-4 bg-green-200 rounded-full flex items-center justify-center animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="text-gray-600">Software Engineer</p>
              </div>
              <div className="text-gray-600 text-sm space-y-3 bg-[#f9fafb] px-2 py-4 rounded-md mt-2">
                <div className="flex items-center gap-2">
                  <Email />
                  <p>sagar@skuhunt.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Location className="w-5 h-5" />
                  <p>New York, NY</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/sagardesai12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin />
                  <p>sagardesai12</p>
                </a>
                <Button
                  className="flex items-center bg-[#2463eb] text-white px-4 py-3 justify-center rounded-md gap-3 w-full"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Download Resume
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Skills Card */}
          <Card>
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-1 p-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                <h2 className="text-lg ">Skills</h2>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="flex flex-wrap gap-2 text-sm bg-[#f9fafb] px-2 py-4 rounded-md">
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>AWS</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>Google Cloud</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>Node</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>Java</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>Python</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>NoSQL / SQL</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>C++</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>React</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>React Native</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>TypeScript</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>JavaScript</p>
                </div>
                <div className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                  <p>Next.js</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* About Me Card */}
          <Card>
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-1 p-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                <h2 className="text-lg">About Me</h2>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="text-gray-600 bg-[#f9fafb] px-2 py-4 rounded-md mt-2">
                <p>
                  I am a software engineer with a passion for building products
                  that make a difference. I am a co-founder and CTO at SKUhunt,
                  a Tiktok seller analytics platform that helps sellers optimize
                  their profit and loss.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-1 px-2 py-4">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                <h2 className="text-lg ">Information</h2>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="text-gray-600 bg-[#f9fafb] px-2 py-4 rounded-md mt-2 space-y-4s">
                <div className="flex items-center justify-between border-b border-gray-200 py-2">
                  <p>Location</p>
                  <p>New York, NY</p>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 py-2">
                  <p>Experience</p>
                  <p>4+ years</p>
                </div>
                <div className="flex items-center justify-between border-gray-200 py-2">
                  <p>Github</p>
                  <p>sagardesai1</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Column - 3/4 width */}
        <div className="md:w-3/4 flex flex-col gap-6">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              fullWidth={true}
              size="lg"
              classNames={{
                tab: "h-12",
                tabList: "gap-4",
              }}
            >
              <Tab key="resume" title="Resume">
                <div className="flex flex-col gap-6">
                  <Card>
                    <CardBody>
                      <div className="flex items-center space-x-1 p-2 mb-3">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        <h2 className="text-lg ">Experience</h2>
                      </div>
                      <div className="flex flex-col gap-2">
                        {experiences.map((experience, index) => (
                          <ExperienceItem key={index} {...experience} />
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <div className="flex items-center space-x-1 p-2 mb-3">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        <h2 className="text-lg ">Education</h2>
                      </div>
                      <div className="flex flex-col gap-2">
                        {education.map((edu, index) => (
                          <EducationItem key={index} {...edu} />
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <div className="flex items-center space-x-1 p-2 mb-3">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        <h2 className="text-lg ">Certifications</h2>
                      </div>
                      <div className="flex flex-col gap-2">
                        {certifications.map((cert, index) => (
                          <CertificationsItem key={index} {...cert} />
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Tab>

              <Tab key="projects" title="Projects">
                <Card>
                  <CardBody>
                    <div className="flex items-center space-x-1 p-2 mb-3">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      <h2 className="text-lg ">Projects</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      {projects.map((project, index) => (
                        <ProjectsItem key={index} {...project} />
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResumePage;
