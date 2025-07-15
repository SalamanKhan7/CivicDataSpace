import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Sector from "./Sector";
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function DataCard({ data }) {
  const {
    title,
    description,
    sectors = [],
    organization,
    download_count,
    has_charts = false,
  } = data;
  const getMetadataValue = (label) =>
    data.metadata?.find((m) => m.metadata_item.label === label)?.value;
  // Format date
  const published_on = new Date(data.created).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const geography = getMetadataValue("Geography");
  const sourceWebsite = getMetadataValue("Source Website");
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-4 flex flex-col justify-between h-full">
      <h3 className="text-base font-semibold text-primary mb-2 line-clamp-2">
        <a
          href={sourceWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline cursor-pointer"
        >
          {title}
        </a>
      </h3>

      {/* Date, Downloads, Geography */}
      <div className="flex items-center text-xs text-gray-600 gap-4 mb-2">
        <div className="flex items-center gap-1">
          <FaRegCalendarAlt className="text-forth text-xl font-bold" />
          <span className="font-medium"> {published_on}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiDownload className="text-forth text-xl font-bold" />
          <span>{download_count || 0}+</span>
        </div>
        {geography && (
          <div className="flex items-center gap-1 overflow-hidden">
            <TbWorld className="text-forth text-xl font-bold" />
            <span className="truncate">
              {geography.split(",").slice(0, 2).join(",")}
            </span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>

      {/* Bottom row */}
      <div className="flex justify-between items-center mt-auto gap-2">
        {/* Formats & charts */}
        <div className="flex items-center gap-2">
          {has_charts && (
            <span
              className="p-1 bg-white border rounded-full"
              title="With Charts"
            >
              <BsBarChart className="text-forth text-xl font-bold" />
            </span>
          )}
          {sectors?.length > 0 && (
            <div className="mb-2 text-sm text-gray-700 flex items-center ">
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {sectors.slice(0, 4).map((tag, i) => (
                  <Sector key={i} label={tag} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Publisher logo */}
        {organization?.logo && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>published by</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-white flex items-center justify-center">
              <img
                src={`${apiUrl}${organization?.logo}`}
                alt="sector"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
