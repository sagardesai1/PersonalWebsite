import { Image } from "@nextui-org/image";
import Calendar from "@/components/icons/Calendar";
import Location from "@/components/icons/Location";

interface EducationItemProps {
  logo: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

export function EducationItem({
  logo,
  school,
  degree,
  location,
  period,
  gpa,
  coursework,
}: EducationItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        <Image
          width={50}
          src={logo}
          alt={`${school} Logo`}
          className="rounded-full aspect-square object-cover border-2 border-white shadow-sm"
        />
        <div>
          <p className="font-semibold">{degree}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <Location />
              <p>{school}</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar />
              <p>{period}</p>
            </div>
            <div className="flex items-center gap-1">
              {gpa && <p className="text-sm text-gray-700">GPA: {gpa}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-16">
        {coursework && coursework.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm bg-[#f9fafb] py-2 rounded-md">
            {coursework.map((course, index) => (
              <div key={index} className="bg-[#e5e7eb] px-3 py-2 rounded-md">
                <p>{course}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
