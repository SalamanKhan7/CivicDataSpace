import Tag from "./Tag";
import FormatIcons from "./FormatIcons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import Image from "next/image";
import Sector from "./Sector";
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function DataListItem({ data }) {
  const getMetadataValue = (label) =>
    data.metadata?.find((m) => m.metadata_item.label === label)?.value;

  const published_on = new Date(data.created).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const geography = getMetadataValue("Geography");
  const sourceWebsite = getMetadataValue("Source Website");

  const {
    title,
    description,
    tags = [],
    formats = [],
    sectors = [],
    organization,
    download_count,
    has_charts = false,
  } = data;

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4">
      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold mb-2">
        <a
          href={sourceWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline cursor-pointer"
        >
          {title}
        </a>
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      {/* Meta Row */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 mb-4 items-center">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt className="text-forth text-xl font-bold" />
          <span>
            <span className="text-gray-500">Last Updated :</span>{" "}
            <strong>{published_on}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FiDownload className="text-forth text-xl font-bold" />
          <span>
            <span className="text-gray-500">Downloads :</span>{" "}
            <strong>{download_count || 0}+</strong>
          </span>
        </div>

        {geography && (
          <div className="flex items-center gap-2">
            <TbWorld className="text-forth text-xl font-bold" />
            <span>
              <span className="text-gray-500">Geography :</span>{" "}
              <strong>{geography}</strong>
            </span>
          </div>
        )}

        {has_charts && (
          <div className="flex items-center gap-2">
            <BsBarChart className="text-forth text-xl font-bold" />
            <span className="text-gray-600 font-semibold">With Charts</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-start gap-2 ">
        <div className="flex flex-col flex-wrap justify-center items-start pt-3  mt-3 text-sm text-gray-600 w-1/2">
          {/* Sectors */}
          {sectors?.length > 0 && (
            <div className="mb-2 text-sm text-gray-700 flex items-center ">
              <span className="font-medium">Sectors: </span>{" "}
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {sectors.slice(0, 4).map((tag, i) => (
                  <Sector key={i} label={tag} />
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {tags?.length > 0 && (
            <div className="mb-4 text-sm text-gray-700">
              <span className="font-medium">Tags:</span>{" "}
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {tags.slice(0, 4).map((tag, i) => (
                  <Tag key={i} label={tag} />
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Bottom: Publisher + Formats */}
        <div className="flex flex-col flex-wrap justify-center items-start pt-3  mt-3 text-sm text-gray-600 w-1/2">
          {/* Publisher */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500">Published by:</span>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 bg-white flex items-center justify-center">
              {" "}
              <Image
                src={`${apiUrl}${organization?.logo}`}
                alt="sector"
                width={50}
                height={50}
                priority
              />
            </div>
          </div>

          {/* Formats */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500">Formats:</span>
            <div className="flex gap-1">
              {formats.map((format, i) => (
                <FormatIcons key={i} format={format} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
