import { Image } from "@nextui-org/image";
import Work from "@/components/icons/Work";
import Location from "@/components/icons/Location";
import Calendar from "@/components/icons/Calendar";

interface ExperienceItemProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export function ExperienceItem({
  logo,
  title,
  company,
  location,
  period,
  description,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        <Image
          width={50}
          src={logo}
          alt={`${company} Logo`}
          className="rounded-full aspect-square object-cover border-2 border-white shadow-sm"
        />
        <div>
          <p className="font-semibold">{title}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <Work />
              <p>{company}</p>
            </div>
            <div className="flex items-center gap-1">
              <Location />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar />
              <p>{period}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-16">
        {/* <p className="text-sm text-gray-700 mb-2">{description}</p> */}
        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-4">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
