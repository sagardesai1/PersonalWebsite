import { Image } from "@nextui-org/image";
import Calendar from "@/components/icons/Calendar";
import Work from "./icons/Work";

interface CertificationsItemProps {
  logo: string;
  certification: string;
  company: string;
  period: string;
}

export function CertificationsItem({
  logo,
  certification,
  company,
  period,
}: CertificationsItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        <Image
          width={50}
          src={logo}
          alt={`${certification} Logo`}
          className="rounded-full aspect-square object-cover border-2 border-white shadow-sm"
        />
        <div>
          <p className="font-semibold">{certification}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <Work />
              <p>{company}</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar />
              <p>{period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
