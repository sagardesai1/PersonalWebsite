import React from "react";
import { Image } from "@nextui-org/image";
import Calendar from "@/components/icons/Calendar";
import UserIcon from "@/components/icons/UserIcon";
import OpenLinkIcon from "@/components/icons/OpenLinkIcon";

interface ProjectProps {
  logo?: string;
  title: string;
  position: string;
  period: string;
  description: string;
  link?: string;
  technologies: string[];
}

export const ProjectsItem: React.FC<ProjectProps> = ({
  logo,
  title,
  position,
  period,
  description,
  link,
  technologies,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        {logo && (
          <Image
            width={50}
            src={logo}
            alt={`${title} Logo`}
            className="rounded-full aspect-square object-cover border-2 border-white shadow-sm"
          />
        )}
        <div>
          <p className="font-semibold">{title}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-700 mt-2">
            <div className="flex items-center space-x-1">
              <UserIcon />
              <p>{position}</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar />
              <p>{period}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 ml-16">
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 flex items-center space-x-1"
          >
            <span>{link}</span>
            <OpenLinkIcon className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="mt-2 ml-16">
        <div className="flex flex-wrap gap-2 text-sm bg-[#f9fafb] py-2 rounded-md">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-[#e5e7eb] px-3 py-2 rounded-md">
              <p>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
